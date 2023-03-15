"use strict";

const scissor1 = document.querySelector("#scissor1");
const rock1 = document.querySelector("#rock1");
const paper1 = document.querySelector("#paper1");
const pic1 = document.querySelector("#p1");
const pic2 = document.querySelector("#p2");
const winnerTxt = document.querySelector("#winner");
const p1Point = document.querySelector("#p1-point");
const p2Point = document.querySelector("#p2-point");
const reseter = document.querySelector("#reset");


let choice1;
let choice2;
let random = Math.floor(Math.random() * 3 + 1);
let play1Points = 0;
let play2Points = 0;


reseter.addEventListener("click", function(){
  p1Point.textContent = "Player: 0";
  p2Point.textContent = "Computer: 0";
  play1Points = 0;
  play2Points = 0;
  
})


const choiceComp = function (random) {
  if (random == 1) {
    return "scissors";
  } else if (random == 2) {
    return "rock";
  } else {
    return "paper";
  }
};

scissor1.addEventListener("click", function () {
  random = Math.floor(Math.random() * 3 + 1);
  choice1 = "scissors";
  choice2 = choiceComp(random);
  console.log("scissors");
  console.log(choice1, choice2);
  compare(choice1, choice2);
 
  pic1.style.backgroundImage = `url("./static/pics/${choice1}.JPG")`;
  pic1.classList.add("pic-style");
  pic2.style.backgroundImage = `url("./static/pics/${choice2}.JPG")`;
  pic2.classList.add("pic-style");
});
rock1.addEventListener("click", function () {
  random = Math.floor(Math.random() * 3 + 1);
  choice1 = "rock";
  choice2 = choiceComp(random);
  console.log("rock");
  console.log(choice1, choice2);
  compare(choice1, choice2);
 
  pic1.style.backgroundImage = `url("./static/pics/${choice1}.JPG")`;
  pic1.classList.add("pic-style");
  pic2.style.backgroundImage = `url("./static/pics/${choice2}.JPG")`;
  pic2.classList.add("pic-style");
});
paper1.addEventListener("click", function () {
  random = Math.floor(Math.random() * 3 + 1);
  choice1 = "paper";
  choice2 = choiceComp(random);
  console.log("paper");
  console.log(choice1, choice2);
  compare(choice1, choice2);
 
  pic1.style.backgroundImage = `url("./static/pics/${choice1}.JPG")`;
  pic1.classList.add("pic-style");
  pic2.style.backgroundImage = `url("./static/pics/${choice2}.JPG")`;
  pic2.classList.add("pic-style");
});

const compare = function (a, b) {
 
  if (a === "paper" && b === "paper") {
    winnerTxt.textContent = "Tie";
  } else if (a === "rock" && b === "paper") {
    winnerTxt.textContent = "You Lost";
    play2Points++;

  } else if (a === "scissors" && b === "paper") {
    winnerTxt.textContent = "You Won";
    play1Points++;


  } else if (a === "rock" && b === "scissors") {

    winnerTxt.textContent = "You Won";
    play1Points++;


  } else if (a === "rock" && b === "rock") {
  
    winnerTxt.textContent = "Tie";

  } else if (a === "paper" && b === "rock") {
   
    winnerTxt.textContent = "You Won";
    play1Points++;


  } else if (a === "paper" && b === "scissors") {
    
    winnerTxt.textContent = "You Lost";
    play2Points++;


  } else if (a === "scissors" && b === "rock") {
   
    winnerTxt.textContent = "You Lost";
    play2Points++;


  } else if (a === "scissors" && b === "scissors") {

    winnerTxt.textContent = "Tie";

  }
  resulter(play1Points, play2Points);
};


const resulter = function(a, b) {
  p1Point.textContent = `Player: ${a}`;
  p2Point.textContent = `Computer: ${b}`;
}
