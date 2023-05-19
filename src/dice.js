// DOM const (A finir si besoin)
const playerOne = document.querySelector(".player0")
const playerTwo = document.querySelector(".player1")
const playerOneScore = document.getElementById("score0");
const playerTwoScore = document.getElementById("score1");
const playerOneCurrent = document.getElementById("current0");
const playerTwoCurrent = document.getElementById("current1");
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btnNew');
const btnRoll = document.querySelector('.btnRoll');
const btnHold = document.querySelector('.btnHold');

// Paramètre de base
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
dice.classList.add("hidden");

let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;
let playing = true;
let active = 0;

// Changer de joueure
const changePlayer = function () {
    currentScore = 0;
    document.getElementById(`current${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer == 0 ? 1 : 0;
    playerOne.classList.toggle('activePlayer');
    playerTwo.classList.toggle('activePlayer');
};

// Lancer de dé
btnRoll.addEventListener('click', function () {
    if (playing) {
        dice.classList.remove("hidden");
        const diceResult = Math.floor(Math.random() * 6) + 1;
        console.log(diceResult);
        dice.src = `/images/dice${diceResult}.png`;
        if (diceResult !== 1) {
            currentScore += diceResult;
            document.getElementById(`current${activePlayer}`).textContent = currentScore;
        } else {
            changePlayer();
        }
    }
});

//Retien du score dans le Global
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            playing = false;
            dice.classList.add('hidden');
            document.getElementById(`score${activePlayer}`).textContent = 'WIN ! ! !';
            changePlayer();
            document.getElementById(`score${activePlayer}`).textContent = 'LOST T.T';
            document.querySelector(`.player${activePlayer}`).classList.add(`playerWinner`);
            active = activePlayer = 1 ? 0 : 1;
            document.querySelector(`.player${active}`).classList.add('activePlayer');
        } else {
            changePlayer();
        }
    }
});






