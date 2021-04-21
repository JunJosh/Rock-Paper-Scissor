function computerPlay() {
    let x = Math.floor(Math.random() * (3 - 0)) + 0;
    if(x === 0) {
        return "Rock"
    } else if(x === 1) {
        return "Paper"
    } else {
        return "Scissor"
    }
  };

function play() {
    let computer = computerPlay();
    computerSelection = computer;
    let player = prompt("input yours");
    playerSelection = player;
    let win = " THEREFORE YOU WIN";
    let lose = " THEREFORE YOU LOSE";
    let draw = " THEREFORE THE RESULT IS DRAW";

    if(computerSelection === "Rock" && (playerSelection.toLowerCase() == "scissor")){
        console.log(computerSelection.toUpperCase() + " VS " + playerSelection.toUpperCase() + lose);
        return "lose";
    } else if(computerSelection === "Rock" && (playerSelection.toLowerCase() == "Paper")){
        console.log(computerSelection.toUpperCase() + " VS " + playerSelection.toUpperCase() + win);
        return "win"
    } else if(computerSelection === "Rock" && (playerSelection.toLowerCase() == "Rock")){
        console.log(computerSelection.toUpperCase() + " VS " + playerSelection.toUpperCase() + draw);
        return "draw"
    } 
    //computer picks paper
    else if(computerSelection === "Paper" && (playerSelection.toLowerCase() == "scissor")){
        console.log(computerSelection.toUpperCase() + " VS " + playerSelection.toUpperCase() + win);
        return "win";
    } else if(computerSelection === "Paper" && (playerSelection.toLowerCase() == "rock")){
        console.log(computerSelection.toUpperCase() + " VS " + playerSelection.toUpperCase() + lose);
        return "lose";
    } else if(computerSelection === "Paper" && (playerSelection.toLowerCase() == "paper")){
        console.log(computerSelection.toUpperCase() + " VS " + playerSelection.toUpperCase() + draw);
        return "draw";
    } 
    //computer picks Scissor
    else if(computerSelection === "Scissor" && (playerSelection.toLowerCase() == "rock")){
        console.log(computerSelection.toUpperCase() + " VS " + playerSelection.toUpperCase() + win);
        return "win"
    } else if(computerSelection === "Scissor" && (playerSelection.toLowerCase() == "paper")){
        console.log(computerSelection.toUpperCase() + " VS " + playerSelection.toUpperCase() + lose);
        return "lose"
    } else if(computerSelection === "Scissor" && (playerSelection.toLowerCase() == "scissor")){
        console.log(computerSelection.toUpperCase() + " VS " + playerSelection.toUpperCase() + draw);
        return "draw"
    }
}

function playFiveRounds () {
    let i = 0;
    let win = 0;
    let lose = 0;
    let draw =0 ;
    while(i <= 5){
        i++;
        let x = play();
        if(x === "win"){
         win++;   
        }else if(x === "lose") {
            lose++;
        }else {
            draw++;
        }
    } 
return "your score is " + "win :" + win + " lose:" + lose + " draw: " + lose;
}


  
