let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "green", "red", "blue"];

let started = false;
let level = 0;
let HighScore = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

// Game Flash Effect Function
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

// User Flash Effect Function
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}
function levelUp() {
    // Reset user sequence so that he has to repeat the entire pattern
    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    // choosing randon btn
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

// Checking user and game sequence
function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        h2.innerHTML = `Game Over!! Your Score is:  <b>${level-1}<b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}


// Button Press Effect Function
function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];

    for(btn of allBtns) {
        btn.classList.remove("flash", "userFlash");
    }
}


// Saving High Score (implement this)

