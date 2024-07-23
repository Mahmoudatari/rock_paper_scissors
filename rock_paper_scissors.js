console.log("Hello World");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice;
  do {
    humanChoice = prompt("Choose rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
  } while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  );
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(`Round${i}: ` + result);
  }
  if (humanScore > computerScore) {
    console.log(
      `Your Score: ${humanScore}, Computer Score: ${computerScore} You win!`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Your Score: ${humanScore}, Computer Score: ${computerScore} You win!`
    );
  } else {
    console.log("Tie!");
  }
}

playGame();
