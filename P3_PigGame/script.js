'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1'); // selecting the players for the bg change
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // selection of an ID can be also done by this.
const diceEl = document.querySelector('.dice');
// const diceEl = document.getElementsByClassName('dice'); // if we use this method(getElementWith className), the classlist add won't wrk as this method returns HTML collection so it will work when we call it as = document.getElementsByClassName('dice')[0], because of this same reason it will not work with querySlectorAll
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//selecting current score
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
/*//Rewritten in initial()
//Starting condition
score0El.textContent = 0; // 0 number is directly coverted to string by js
score1El.textContent = 0;
diceEl.classList.add('hidden');

//it is  global var as we don't update on each click
const scores = [0, 0]; //the real score of players
let currentScore = 0;
let activePlayer = 0;
let playing = true;*/

//Starting condition
let scores, currentScore, activePlayer, playing;
const initial = function () {
  //it is  global var as we don't update on each click
  const scores = [0, 0]; //the real score of players
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

initial();
//Switching the player function

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // to disable the button
    //1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);
    //2. display the dice result
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    //3. Check for rolled 1: if True, swtich to next player if now then add to curr score
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; // change later as player wise, for now it's player1
    } else {
      /*Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');*/
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to the score of active player
    scores[activePlayer] += currentScore; // scores[1] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check 'if player's score is >= 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      //2.1 finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //remove the active class as player wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      /*We  can also use these 3 to disable btns and dice
        //btnRoll.disabled = true;
        // btnHold.disabled = true;
        //diceEl.classList.add('hidden');
        */
    } else {
      //2.2 Switch the next player
      switchPlayer();
    }
  }
});

/** btnNew.addEventListener('click', function () {
  /* //Rewritten in initial()
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  playing = true;*/

//  }
// );*/
btnNew.addEventListener('click', initial());
