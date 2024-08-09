let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {

  userSeq = [] ;
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

 
function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkanswer(userSeq.length-1);
  
}
// jo hamara current level hoga vhi hmara idx number hoga
function checkanswer(idx){
   
if(gameSeq[idx]===userSeq[idx]){
  if(gameSeq.length==userSeq.length){ setTimeout(levelUp,1000);} 



} else{
 
  h2.innerHTML=`GAME OVER!  YOUR SCORE WAS <b>${level}</b> <br>PRESS ANY KEY TO START AGAIN` ;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function (){   
    document.querySelector("body").style.backgroundColor="white";
  },150)
  reset();

}

}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}



