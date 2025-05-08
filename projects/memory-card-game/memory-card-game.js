const card = document.querySelector(".game-card");

let firstCard = null;
let secondCard = null;
let lockBoard = false;

card.addEventListener('click', flipCard);

function flipCard() {
  this.classList.add('flipped');
}

