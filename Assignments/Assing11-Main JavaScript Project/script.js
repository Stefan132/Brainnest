function computerPlay() {
   const pick = ['rock', 'paper', 'scissors'];
   return pick[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
      return `It's a tie! you both picked ${playerSelection}`;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats Scissors";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats Rock";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats Paper";
   } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
   }
}


const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))

const result = {win:0, tie:0, loss:0};
const win = "You win";
const tie = "tie";
const loss = "You lose";

function game() {
   for (i = 0; i < 5; i++) {
      console.log(playRound(playerSelection, computerSelection));
      if (playRound() === win) {
         result.win++;
      } else if (playRound() == tie) {
         result.tie++;
      } else {
         result.loss++;
      }
   }

   console.log("Wins: " + result.win);
   console.log("Losses: " + result.loss);
   console.log("Ties: " + result.tie);
}

game();



//https://stackoverflow.com/questions/63655685/struggling-to-loop-through-function-and-return-proper-results-for-odin-project-r
//https://stackoverflow.com/questions/63655685/struggling-to-loop-through-function-and-return-proper-results-for-odin-project-r
// https://codepen.io/christianmmason/pen/ErxZeE