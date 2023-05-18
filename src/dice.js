// Nombre aléatoire de 1 a 6.
const randomNumber = Math.floor(Math.random() * 6) + 1;

const diceImages = '../images/dice' + randomNumber + '.png';

document.querySelectorAll('img')[0].setAttribute('src', diceImages)