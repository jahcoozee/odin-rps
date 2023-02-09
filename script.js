// getComputerChoice() to return rock, paper, or scissors
function getComputerChoice() {

  // Generate a number between 1 and 10
  let randomNumber = Math.floor(Math.random() * 9) + 1;

  // Assign a choice based on that random number
  if (randomNumber > 6) {
    return "rock";
  } else if (randomNumber > 4 && randomNumber < 7) {
    return "paper";
  } else {
    return "scissors";
  }
}

// getPlayerChoice() to receive input and return player's choice of rock, paper, or scissors
function getPlayerChoice() {

  // Ask the player what their choice is
  let playerChoice = prompt("Do you choose rock, paper, or scissors?");

  // Make their choice case-insensitive
  return playerChoice.toLowerCase();
}

// playRound() to take player's choice and computer's choice and determining a winner for one round
function playRound(playerChoice, computerChoice) {
  let win = "You win! ";
  let lose = "You lose! ";
  let tie = "It's a tie!";

  // Rock conditionals
  if (playerChoice === "rock" && computerChoice === "paper") {
    return "You lose! " + computerChoice + " beats " + playerChoice;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You win! " + playerChoice + " beats " + computerChoice;
  } else if (playerChoice === "rock" && computerChoice === "rock") {
    return "It's a tie!"
  }

  // Paper conditionals
  else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "You lose! " + computerChoice + " beats " + playerChoice;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "You win! " + playerChoice + " beats " + computerChoice;
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    return "It's a tie!"
  }

  // Paper conditionals
  else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "You lose!" + computerChoice + " beats " + playerChoice;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You win!" + playerChoice + " beats " + computerChoice;
  } else {
    return "It's a tie!"
  }
}

// game() to tally scores of player and computer and determine a winner after 5 rounds
function game() {

}