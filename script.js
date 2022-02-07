//button to invoke the logic
//view in document if you win
//game logic

playBtn = document.querySelector(".playBtn");
playFiveRoundsBtn = document.querySelector(".playRoundsBtn");
clogBtn = document.querySelector(".clogBtn");

//get random number between 0 - 2
function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

//generate random play from computer
function computerPlay() {
  let x = getRandomNumber();
  if (x === 0) {
    return "Rock";
  } else if (x === 1) {
    return "Paper";
  } else if (x === 2) {
    return "Scissor";
  }
}

let winScore = 0;
let loseScore = 0;
let drawScore = 0;

// play a match
function play() {
  let computerSelection = computerPlay();
  let playerSelection = prompt("input yours");
  let win = " THEREFORE YOU WIN";
  let lose = " THEREFORE YOU LOSE";
  let draw = " THEREFORE THE RESULT IS DRAW";

  // computer picks rock
  if (
    computerSelection == "Rock" &&
    playerSelection.toLowerCase() == "scissor"
  ) {
    let resultMatch =
      computerSelection.toUpperCase() +
      " VS " +
      playerSelection.toUpperCase() +
      lose;

    return console.log(resultMatch), loseScore++;
  } else if (
    computerSelection == "Rock" &&
    playerSelection.toLowerCase() == "paper"
  ) {
    let resultMatch =
      computerSelection.toUpperCase() +
      " VS " +
      playerSelection.toUpperCase() +
      win;

    return console.log(resultMatch), winScore++;
  } else if (
    computerSelection == "Rock" &&
    playerSelection.toLowerCase() == "rock"
  ) {
    let resultMatch =
      computerSelection.toUpperCase() +
      " VS " +
      playerSelection.toUpperCase() +
      draw;

    return console.log(resultMatch), drawScore++;
  }

  //computer picks paper
  if (
    computerSelection == "Paper" &&
    playerSelection.toLowerCase() == "scissor"
  ) {
    let resultMatch =
      computerSelection.toUpperCase() +
      " VS " +
      playerSelection.toUpperCase() +
      win;

    return console.log(resultMatch), winScore++;
  } else if (
    computerSelection == "Paper" &&
    playerSelection.toLowerCase() == "rock"
  ) {
    let resultMatch =
      computerSelection.toUpperCase() +
      " VS " +
      playerSelection.toUpperCase() +
      lose;

    return console.log(resultMatch), loseScore++;
  } else if (
    computerSelection == "Paper" &&
    playerSelection.toLowerCase() == "paper"
  ) {
    let resultMatch =
      computerSelection.toUpperCase() +
      " VS " +
      playerSelection.toUpperCase() +
      draw;

    return console.log(resultMatch), drawScore++;
  }

  //computer picks Scissor
  if (
    computerSelection == "Scissor" &&
    playerSelection.toLowerCase() == "rock"
  ) {
    let resultMatch =
      computerSelection.toUpperCase() +
      " VS " +
      playerSelection.toUpperCase() +
      win;

    return console.log(resultMatch), winScore++;
  } else if (
    computerSelection == "Scissor" &&
    playerSelection.toLowerCase() == "paper"
  ) {
    let resultMatch =
      computerSelection.toUpperCase() +
      " VS " +
      playerSelection.toUpperCase() +
      lose;

    return console.log(resultMatch), loseScore++;
  } else if (
    computerSelection == "Scissor" &&
    playerSelection.toLowerCase() == "scissor"
  ) {
    let resultMatch =
      computerSelection.toUpperCase() +
      " VS " +
      playerSelection.toUpperCase() +
      draw;

    return console.log(resultMatch), drawScore++;
  }
}

function playFiveRounds() {
  let i = 0;

  while (i < 5) {
    i++;
    play();
  }
  alert(
    "you win : " +
      winScore +
      ", you lose : " +
      loseScore +
      ", draw : " +
      drawScore
  );
}

playBtn.addEventListener("click", function () {
  play();
});

playFiveRoundsBtn.addEventListener("click", function () {
  //restart score back to zero and play for more 5 rounds !!!
  winScore = 0;
  loseScore = 0;
  drawScore = 0;
  playFiveRounds();
});

clogBtn.addEventListener("click", function () {
  console.log(computerPlay());
});
