let options = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();

    if ((playerSelection == "ROCK" && computerSelection == "ROCK") || (playerSelection == "PAPER" && computerSelection == "PAPER") || (playerSelection == "SCISSORS" && computerSelection == "SCISSORS")){
        return "You Draw!";
    }

    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        playerScore++;
        return "You Win! Rock beats Scissors";
    }

    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        computerScore++;
        return "You Lose! Paper beats Rock"
    }

    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }

    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        playerScore++;
        return "You Win! Paper beats Rock"
    }

    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }

    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
    
}


function playGame() {

    for(let i=0; i<5; i++){
        let playerSelection = prompt("Choose Rock, Paper or Scissors...");
        let computerSelection = getComputerChoice();   
        console.log(playRound(playerSelection, computerSelection)); 
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("Player Score:"+ playerScore);
        console.log("Computer Score:"+ computerScore);
    }
    if (playerScore > computerScore){
        console.log("You Win :)");
    }
    else if(playerScore == computerScore){
        console.log("It's a Draw:|");
    }
    else {
        console.log("You Lose :(");
    }
}

playGame();
