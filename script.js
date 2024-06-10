'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const startingScore = 20;
let highScore = 0;
let score = startingScore;
const guessElement = document.querySelector('.guess');
const message = document.querySelector('.message');
const highScoreElement = document.querySelector('.highscore');
const scoreElement = document.querySelector('.score');
const number = document.querySelector('.number');
const checkButton = document.querySelector('.check');

checkButton.addEventListener('click', function() {
  const guess = Number(guessElement.value);

  if (!guess) {
    message.textContent = '⛔ no number!';
  } else {
    if (guess === secretNumber) {
      message.textContent = 'correct number!';
      number.textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      number.style.width = '30rem';
      guessElement.disabled = true;
      checkButton.disabled = true;

      if (highScore < score) {
        highScore = score;
        highScoreElement.textContent = highScore;
      }
    } else if (guess !== secretNumber){
      message.textContent = guess > secretNumber? 'Too high!' : 'Too low!';
      score--;
    }
    if (score <= 0) {
      message.textContent = 'you lost the game!';
      score = 0;
    }
    scoreElement.textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function() {
  scoreElement.textContent = startingScore;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  score = startingScore;
  number.textContent = '?';
  guessElement.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  guessElement.disabled = false;
  checkButton.disabled = false;
});