#!/usr/bin/env node

const rpsChoices = ["rock", "paper", "scissors"];
const rpslsChoices = ["rock", "paper", "scissors", "spock", ];

export function rps(playerChoice=null) {

    const computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

    if (playerChoice === null){
      return {"player": computerChoice}
    }

    if (!rpsChoices.includes(playerChoice)){
      throw new RangeError("Invalid input")
    }


    if (playerChoice === computerChoice) {
      const results = "tie";
      return {"player": playerChoice, "opponent": computerChoice, "result": results}
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        const results = "win";
        return {"player": playerChoice, "opponent": computerChoice, "result": results}
      } else {
        const results = "lose";
        return {"player": playerChoice, "opponent": computerChoice, "result": results}
      }
}

export function rpsls(playerChoice=null) {
  const computerChoice = rpslsChoices[Math.floor(Math.random() * rpslsChoices.length)];

  if (playerChoice === null) {
    return {"player": computerChoice}
  }

  if (!rpslsChoices.includes(playerChoice)) { 
    throw new RangeError("Invalid input")
  }

 if (playerChoice === computerChoice) {
  const results = "tie";
  return {"player": playerChoice, "opponent": computerChoice, "result": results}
 } else if (
  (playerChoice === "rock" && computerChoice === "scissors") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "rock" && computerChoice === "lizard") ||
  (playerChoice === "lizard" && computerChoice === "spock") || 
  (playerChoice === "spock" && computerChoice === "scissors") || 
  (playerChoice === "scissors" && computerChoice === "lizard") || 
  (playerChoice === "lizard" && computerChoice === "paper") ||
  (playerChoice === "paper" && computerChoice === "spock") ||
  (playerChoice === "spock" && computerChoice === "rock") ||
  (playerChoice === "scissors" && computerChoice === "paper")) {
    const results = "win";
    return {"player": playerChoice, "opponent": computerChoice, "result": results}
  } else {
    const results = "lose"
    return {"player": playerChoice, "opponent": computerChoice, "result": results}
  }
 
}