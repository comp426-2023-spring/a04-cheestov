#!/usr/bin/env node

const rpsChoices = ["rock", "paper", "scissors"];
const rpslsChoices = ["rock", "paper", "scissors", "spock", ];

export function rps(playerChoice=null) {

    const computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

    if (playerChoice === null){
      return {"player": computerChoice}
    }

    if (!rpsChoices.includes(playerChoice)){
      console.error(`${playerChoice} is out of range.`);
      console.log('Usage: node-rps [SHOT');
      console.log('Play Rock Paper Scissors (RPS)');
      console.log();
      console.log('  -h, --help      display this help message and exit');
      console.log(' -r, --rules     display the rules and exit');
      console.log()
      console.log('Examples:');
      console.log('  node-rps        Return JSON with single player RPS result.');
      console.log('                  e.g. {"player":"rock"}');
      console.log('  node-rps rock   Return JSON with results for RPS played against a simulated opponent.');
      console.log('                  e.g {"player":"rock","opponent":"scissors","result":"win"}');
      console.log('Rules for Rock Paper Scissors:');
      console.log();
      console.log('  - Scissors CUTS Paper');
      console.log('  - Paper COVERS Rock');
      console.log('  - Rock CRUSHES Scissors');
      return;
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
    console.error(`${playerChoice} is out of range.`);
    console.log('Usage: node-RPSLS [SHOT]');
    console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS!");
    console.log();
    console.log('  -h, --help        display this help message and exit');
    console.log('  -r, --rules       display the rules and exit');
    console.log();
    console.log('Examples:');
    console.log('  node-rpsls        Return JSON with single player RPSLS result.');
    console.log('                    e.g. {"player":"rock"}');
    console.log('  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
    console.log('                    e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:');
    console.log('  - Scissors CUTS Paper');
    console.log('  - Paper COVERS Rock');
    console.log('  - Rock SMOOSHES Lizard');
    console.log('  - Lizard POISONS Spock');
    console.log('  - Spock SMASHES Scissors');
    console.log('  - Scissors DECAPITATES Lizard');
    console.log('  - Lizard EATS Paper');
    console.log('  - Paper DISPROVES Spock');
    console.log('  - Spock VAPORIZES Rock');
    console.log('  - Rock CRUSHES Scissors');
    return;
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