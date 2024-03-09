let options = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;


function computerSelection() {
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
};

function playRound(playerSelection, computerSelection) {
    
    if(playerScore == 5 || computerScore == 5) {
        if(playerScore == 5) {
            roundResult.textContent = "You have won against the computer, just wow :)";
        }
        else {
            roundResult.textContent = "You have lost to the computer, just wow :(";
        }  
    }
    
    else {
        if ((playerSelection == "ROCK" && computerSelection == "ROCK") || (playerSelection == "PAPER" && computerSelection == "PAPER") || (playerSelection == "SCISSORS" && computerSelection == "SCISSORS")){
            roundResult.textContent = "You draw!";
            resultDiv.textContent = "Player Score: " + playerScore + " | " + "Computer Score " + computerScore;
            return "You Draw!";
        }
    
        else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
            playerScore++;
            roundResult.textContent = "You Win! Rock beats Scissors";
            resultDiv.textContent = "Player Score: " + playerScore + " | " + "Computer Score " + computerScore;
            return "You Win! Rock beats Scissors";
        }
    
        else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            computerScore++;
            roundResult.textContent = "You Lose! Paper beats Rock";
            resultDiv.textContent = "Player Score: " + playerScore + " | " + "Computer Score " + computerScore;
            return "You Lose! Paper beats Rock"
        }
    
        else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
            computerScore++;
            roundResult.textContent = "You Lose! Scissors beats Paper";
            resultDiv.textContent = "Player Score: " + playerScore + " | " + "Computer Score " + computerScore;
            return "You Lose! Scissors beats Paper";
        }
    
        else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            playerScore++;
            roundResult.textContent = "You Win! Paper beats Rock";
            resultDiv.textContent = "Player Score: " + playerScore + " | " + "Computer Score " + computerScore;
            return "You Win! Paper beats Rock"
        }
    
        else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
            computerScore++;
            roundResult.textContent = "You Lose! Rock beats Scissors";
            resultDiv.textContent = "Player Score: " + playerScore + " | " + "Computer Score " + computerScore;
            return "You Lose! Rock beats Scissors";
        }
    
        else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            playerScore++;
            roundResult.textContent = "You Win! Scissors beats Paper";
            resultDiv.textContent = "Player Score: " + playerScore + " | " + "Computer Score " + computerScore;
            return "You Win! Scissors beats Paper";
        }
    }
    
}

let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");

rockButton.addEventListener("click",function () {
    playRound("ROCK", computerSelection());
});
paperButton.addEventListener("click",function () {
    playRound("PAPER", computerSelection());
});
scissorsButton.addEventListener("click",function () {
    playRound("SCISSORS", computerSelection());
});

let container = document.getElementById('container');
let roundResult = document.createElement('div');
let resultDiv = document.createElement('div');


container.appendChild(roundResult);
container.appendChild(resultDiv);
