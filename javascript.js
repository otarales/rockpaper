function computerPlay() {
  var options = ["Rock", "Paper", "Scissor"];
  var choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  /*First since it's the beginning of a round they have to play according to the rules. which are:
     Rock beats scissor
     Paper beats Rock
     Scissor beats Paper.

     I used an if statement to start, like "if player 'me' plays and is = 'rock' and the computer also plays it's own random options between 'rock, paper scissor', it'll return something back.
    */
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "Rock" && computerSelection == "Scissor") {
    return "You Win!  Rock beats Scissor";
  } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    return "Draw! Equal";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "Paper" && computerSelection == "Scissor") {
    return "You Lose! Scissor beats Paper";
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    return "Draw! Equal";
    //for some reason i had to do the code above all over again.
  } else if (playerSelection == "Scissor" && computerSelection == "Rock") {
    return "You Lose! Rock beats Scissor";
  } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
    return "You Win! Scissor beats Paper";
  } else if (playerSelection == "Scissor" && computerSelection == "Scissor") {
    return "Draw! Equal";
  }
}

const playerSelection = "Scissor";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
