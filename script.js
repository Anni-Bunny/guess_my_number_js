'use strict';

/*
console.log(document.querySelector('.message').textContent);

// DOM - document object model: structured representation of HTML documents
// DOM allows js to access HTML elements and styles to manipulate them.
// DOM is a part of web API - which is like library (also written in js) that browser implements and that we can access from js code.
// API - Application Programming Interface

document.querySelector('.message').textContent = 'correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//PROJECT 1
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const startingScore = 20;
let score = startingScore;
const guessElement = document.querySelector('.guess');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
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

      if (Number(highScore.textContent) < Number(score.textContent)) {
        highScore.textContent = scoreElement.textContent;
      }
    } else if (guess > secretNumber) {
      message.textContent = 'Too high!';
      score--;

    } else if (guess < secretNumber) {
      message.textContent = 'Too low!';
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
  score = startingScore;
  highScore.textContent = 0;
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  guessElement.value = '';
  guessElement.disabled = false;
  checkButton.disabled = false;
});