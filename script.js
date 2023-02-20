// Global variables used to record the status for individual rounds and
// allow for tracking across multiple rounds
let win = "You win! ";
let lose = "You lose! ";
let tie = "It's a tie!";

// Create variables to show and display outcomes
const outcome = document.querySelector("#outcome");
const roundResult = document.createElement("p");
const score = document.querySelector("#score");
const gameResult = document.createElement("p");

// Track wins after each round is played
let playerWins = 0;
let computerWins = 0;
gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
score.appendChild(gameResult);

// Player choice
const buttons = document.querySelectorAll("button");
buttons.forEach(choice => choice.addEventListener("click", function(e) {
  if (e.target.id === "rock") {
    roundResult.textContent = playRound("rock", getComputerChoice());
    outcome.appendChild(roundResult);
    win = "You win! ";
    lose = "You lose! ";
    tie = "It's a tie!";
  }
  
  if (e.target.id === "paper") {
    roundResult.textContent = playRound("paper", getComputerChoice());
    outcome.appendChild(roundResult);
    win = "You win! ";
    lose = "You lose! ";
    tie = "It's a tie!";
  }

  if (e.target.id === "scissors") {
    roundResult.textContent = playRound("scissors", getComputerChoice());
    outcome.appendChild(roundResult);
    win = "You win! ";
    lose = "You lose! ";
    tie = "It's a tie!";
  }

  if (playerWins > 4 && computerWins < 5) {
    roundResult.textContent = "Congrats, you won the best of 5!";
    playerWins = 0;
    computerWins = 0;
  } else if (computerWins > 4 && playerWins < 5) {
    roundResult.textContent = "Sorry, you lost the best of 5!";
    playerWins = 0;
    computerWins = 0;
  } else {
    roundResult.textContent;
  }
}));

// Computer choice
function getComputerChoice() {

  // Generate a number between 1 and 10
  let randomNumber = Math.floor(Math.random() * 9) + 1;

  // Assign a choice based on that random number
  if (randomNumber > 6) {
    console.log("The computer chose" + " rock");
    return "rock";
  } else if (randomNumber > 4 && randomNumber < 7) {
    console.log("The computer chose" + " paper");
    return "paper";
  } else {
    console.log("The computer chose" + " scissors");
    return "scissors";
  }
}

// playRound() to take player's choice and computer's choice and determining a winner for one round
function playRound(playerChoice, computerChoice) {
  // Rock conditionals
  if (playerChoice === "rock" && computerChoice === "paper") {
    lose += computerChoice + " beats " + playerChoice;
    computerWins++;
    gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
    return lose;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    win += playerChoice + " beats " + computerChoice;
    playerWins++;
    gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
    return win;
  } else if (playerChoice === "rock" && computerChoice === "rock") {
    playerWins += 0;
    computerWins += 0;
    gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
    return tie;
  }

  // Paper conditionals
  else if (playerChoice === "paper" && computerChoice === "scissors") {
    lose += computerChoice + " beats " + playerChoice;
    computerWins++;
    gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
    return lose;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    win += playerChoice + " beats " + computerChoice;
    playerWins++;
    gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
    return win;
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    playerWins += 0;
    computerWins += 0;
    gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
    return tie;
  }

  // Paper conditionals
  else if (playerChoice === "scissors" && computerChoice === "rock") {
    lose += computerChoice + " beats " + playerChoice;
    computerWins++;
    gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
    return lose;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    win += playerChoice + " beats " + computerChoice;
    playerWins++;
    gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
    return win;
  } else {
    playerWins += 0;
    computerWins += 0;
    gameResult.textContent = `Current Score: ${playerWins} - ${computerWins}`;
    return tie;
  }
}



//   // Reset standing variables to prevent extra concatenation after each round
//   win = "You win! ";
//   lose = "You lose! ";
//   tie = "It's a tie!";
// }

// // At the end of 5 rounds, determine winner
// if (playerWins > computerWins) {
//   console.log("Final Score: " + playerWins + " - " + computerWins);
//   console.log("Congrats, you won the best of 5!");
// } else {
//   console.log("Final Score: " + playerWins + " - " + computerWins);
//   console.log("Sorry, you lost the best of 5!");
// }


// Run the game
// game();