function getRandom(possibleOutcome) {
    return possibleOutcome[Math.floor(Math.random() * possibleOutcome.length)];
}

function getComputerChoice() {
    possibleOutcome = ["Rock", "Paper", "Scissors"];

    return getRandom(possibleOutcome);
}

let myWinCount = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if(playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        myWinCount++;
    } else if(playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        myWinCount++;
    } else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        myWinCount++;
    } else if(playerSelection === computerSelection) {
        console.log(`It's a draw! Both chose ${playerSelection}`);
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        myWinCount--;
    }
}

function game() {
    let numOfRound = prompt("Please enter the number of rounds you want to play:");
    
    for(let round = 1; round <= numOfRound; round++) {
        let playerSelection = prompt("Please choose one from rock, paper and scissors");

        let compuerSelection = getComputerChoice();

        console.log(`Round #${round}:`) + playRound(playerSelection, compuerSelection);
    }
    
    console.log("Final Result:");
    if(myWinCount > 0) {
        console.log("You won the series!");
    } else if(myWinCount === 0) {
        console.log("Series ended up in a draw!");
    } else {
        console.log("You lost the series");
    }
}

game();