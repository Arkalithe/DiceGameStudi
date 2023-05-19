// DOM const (A finir si besoin)
const playerOne = document.querySelector(".player1")
const playerTwo = document.querySelector(".player2") 
const playerOneScore = document.getElementById("score1");
const playerTwoScore = document.getElementById("score2");
const playerOneCurrent = document.getElementById("current1");
const playerTwoCurrent = document.getElementById("current2");
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btnNew');
const btnRoll =document.querySelector('.btnRoll');
const btnHold =document.querySelector('.btnHold');

// Paramètre de base
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
dice.classList.add("hidden");
let currentScore = 0;
const scores = [0,0];
let activePlayer = 1;
let playing = true;

// Changer de joueure
const changePlayer = function () {
    currentScore = 0;
    document.getElementById(`current${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer == 1 ? 2 : 1;
    playerOne.classList.toggle('activePlayer');
    playerTwo.classList.toggle('activePlayer');
};

// Lancer de dé
btnRoll.addEventListener('click', function() {
    if (playing) {
        dice.classList.remove("hidden");
        const diceResult = Math.floor(Math.random() * 6) + 1;
        console.log(diceResult);
        dice.src = `/images/dice${diceResult}.png`;
        if (diceResult !== 1 ) {
            currentScore += diceResult;
            document.getElementById(`current${activePlayer}`).textContent = currentScore;
        } else {
            changePlayer();
        }
    }
});







