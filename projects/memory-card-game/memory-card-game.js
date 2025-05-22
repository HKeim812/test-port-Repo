// Function to flip the cards on the click
const cards = document.querySelectorAll(".game-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});


// Function to shuffle the cards
function shuffleCards() {
  const cardList = [...document.querySelectorAll(".game-card")];
  cardList.sort(() => Math.random() - 0.5);
  const gameBoard = document.querySelector(".game-board");
  gameBoard.innerHTML = "";
  cardList.forEach(card => gameBoard.appendChild(card));
}

// Shuffle the cards on page load
shuffleCards();

// Function to reset the game
function resetGame() {
  const cardList = [...document.querySelectorAll(".game-card")];
  cardList.forEach(card => {
    card.classList.remove("flipped");
  });
  shuffleCards();
}

