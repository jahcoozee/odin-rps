// getComputerChoice() to return rock, paper, or scissors
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

// getPlayerChoice() to receive input and return player's choice of rock, paper, or scissors
function getPlayerChoice() {

  // Ask the player what their choice is
  let playerChoice = prompt("Do you choose rock, paper, or scissors?");

  // Make their choice case-insensitive
  playerChoice = playerChoice.toLowerCase();
  console.log("You chose " + playerChoice);
  return playerChoice;
}

// Global variables used to record the status for individual rounds and
// allow for tracking across multiple rounds
let win = "You win! ";
let lose = "You lose! ";
let tie = "It's a tie!";

// playRound() to take player's choice and computer's choice and determining a winner for one round
function playRound(playerChoice, computerChoice) {
  // Rock conditionals
  if (playerChoice === "rock" && computerChoice === "paper") {
    lose += computerChoice + " beats " + playerChoice;
    return lose;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    win += playerChoice + " beats " + computerChoice;
    return win;
  } else if (playerChoice === "rock" && computerChoice === "rock") {
    return tie;
  }

  // Paper conditionals
  else if (playerChoice === "paper" && computerChoice === "scissors") {
    lose += computerChoice + " beats " + playerChoice;
    return lose;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    win += playerChoice + " beats " + computerChoice;
    return win;
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    return tie;
  }

  // Paper conditionals
  else if (playerChoice === "scissors" && computerChoice === "rock") {
    lose += computerChoice + " beats " + playerChoice;
    return lose;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    win += playerChoice + " beats " + computerChoice;
    return win;
  } else {
    return tie;
  }
}

// game() to tally scores of player and computer and determine a winner after 5 rounds
function game() {

  // Track wins after each round is played
  let playerWins = 0;
  let computerWins = 0;

  // Set up game to consist of 5 rounds total
  for (let i = 0; i < 5; i++) {

    // Store the return value of a round
    let round = playRound(getPlayerChoice(), getComputerChoice());

    // Compare return value of round and update score based on standing
    if (round === win) {
      console.log(win);
      playerWins ++;
    } else if (round === lose) {
      console.log(lose);
      computerWins ++;
    } else {
      console.log(tie);
      playerWins += 0;
      computerWins += 0;
    }

    // Reset standing variables to prevent extra concatenation after each round
    win = "You win! ";
    lose = "You lose! ";
    tie = "It's a tie!";
  }

  // At the end of 5 rounds, determine winner
  if (playerWins > computerWins) {
    console.log("Final Score: " + playerWins + " - " + computerWins);
    console.log("Congrats, you won the best of 5!");
  } else {
    console.log("Final Score: " + playerWins + " - " + computerWins);
    console.log("Sorry, you lost the best of 5!");
  }
}

// DOM manipulation and events
const buttons = document.querySelectorAll("button");
buttons.forEach(choice => choice.addEventListener("click", function(e) {
  if (e.target.id === "rock") {
    console.log(playRound("rock", getComputerChoice()));
    win = "You win! ";
    lose = "You lose! ";
    tie = "It's a tie!";
  }
  
  if (e.target.id === "paper") {
    console.log(playRound("paper", getComputerChoice()));
    win = "You win! ";
    lose = "You lose! ";
    tie = "It's a tie!";
  }

  if (e.target.id === "scissors") {
    console.log(playRound("scissors", getComputerChoice()));
    win = "You win! ";
    lose = "You lose! ";
    tie = "It's a tie!";
  }
}));

// Run the game
// game();