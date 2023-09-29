'use strict';

//   genrate random number b/w 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// add event listner to the CHECK button
document.querySelector('.check').addEventListener('click', function () {
  // get value from the input field
  let guess = Number(document.querySelector('.guess').value);

  // Reset the error message
  document.querySelector('.errorTxt').textContent = '';

  //------------------ Validation of Input field
  if (guess > 20 || guess < 1) {
    document.querySelector('.errorTxt').textContent =
      'Pls choose the Number b/w 1&20';
    guess.setCustomValidity('Invalid input');
  } else {
    //update text if input field is empty
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number!';
    }
    //   compare the secret number and guessed number
    else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎊 Correct Number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.highscore').textContent = score;
    }
    //   if the guess is not secretNumber
    else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? '🔺 Too High!' : '🔻 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the Game';
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

// TO reset the game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';

  // reset the error message
  document.querySelector('.errorTxt').textContent = '';
});
