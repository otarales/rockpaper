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
  let pS = playerSelection.toLowerCase();
  let cS = computerSelection.toLowerCase();
  //Created the variables to make all strings to the lowecase.

  if (pS == "rock" && cS == "paper") {
    return "You Lose! Paper beats Rock";
  } else if (pS == "rock" && cS == "scissor") {
    return "You Win!  Rock beats Scissor";
  } else if (pS == "paper" && cS == "rock") {
    return "You Win! Paper beats Rock";
  } else if (pS == "paper" && cS == "scissor") {
    return "You Lose! Scissor beats Paper";
  } else if (pS == "scissor" && cS == "rock") {
    //for some reason i had to do the code above all over again.
    return "You Lose! Rock beats Scissor";
  } else if (pS == "scissor" && cS == "paper") {
    return "You Win! Scissor beats Paper";
  } else if (pS === cS) {
    return "Draw! Equal";
  }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
