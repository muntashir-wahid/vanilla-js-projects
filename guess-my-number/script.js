"use strict";

// State variables

const body = document.querySelector("body");
const relodeBtn = document.querySelector(".restart");
const guessInput = document.querySelector(".guess-num");
const secretNumViwer = document.querySelector(".secret-num");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const checkBtn = document.querySelector(".check");
const winPrompt = document.querySelector(".win-prompt");
const loosePrompt = document.querySelector(".loose-prompt");
let scoreValue = 30;
let hightScoreValue = 0;
// console.log(relodeBtn, secretNumViwer, message, score, highscore);
let secretNumber = Math.trunc(Math.random() * 30) + 1;
console.log(secretNumber);

// Check button functionalitys
checkBtn.addEventListener("click", function () {
  const guess = Number(guessInput.value);
  // console.log(guess);
  if (!guess) {
    message.textContent = `⛔Input a valid number..`;
  } else if (guess === secretNumber) {
    message.textContent = "🍾Correct number!";
    secretNumViwer.textContent = secretNumber;
    body.style.backgroundColor = "#2C5E1A";
    winPrompt.classList.remove("hidden");
    if (scoreValue > hightScoreValue) {
      highscore.textContent = scoreValue;
    }
  } else if (guess !== secretNumber) {
    message.textContent = guess > secretNumber ? "📈Too high!" : "📉Too low!";
    if (scoreValue > 20) {
      scoreValue--;
      // console.log(scoreValue);
      score.textContent = scoreValue;
    } else if (scoreValue > 10) {
      scoreValue -= 2;
      score.textContent = scoreValue;
    } else if (scoreValue > 5) {
      scoreValue -= 5;
      score.textContent = scoreValue;
    } else {
      message.textContent = "👎You have lost the game!";
      score.textContent = 0;
      body.style.backgroundColor = "#BA0F30";
      loosePrompt.classList.remove("hidden");
    }
  }
});

// Relode button functionality

relodeBtn.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  // console.log(secretNumber);
  message.textContent = `Start gussing...`;
  scoreValue = "30";
  score.textContent = scoreValue;
  guessInput.value = "";
  secretNumViwer.textContent = "?";
  body.style.backgroundColor = "#201f1f";
  winPrompt.classList.add("hidden");
  loosePrompt.classList.add("hidden");
});
