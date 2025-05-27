// Function to flip the cards on the click
const cards = document.querySelectorAll(".game-card");
let flippedCards = [];
let lockBoard = false;
let firstCard, secondCard;



cards.forEach(card => {
  card.addEventListener("click", () => {
    console.log("Card clicked", card);
    if (lockBoard || card.classList.contains("flipped") || card.classList.contains("matched")) return;
    card.classList.add("flipped");
    checkForMatch();
  });
});


// Function to shuffle the cards on each page load
function shuffleCards() {
  const cardList = [...document.querySelectorAll(".game-card")];
  cardList.sort(() => Math.random() - 0.5);
  const gameBoard = document.querySelector(".game-board");
  gameBoard.innerHTML = "";
  cardList.forEach(card => gameBoard.appendChild(card));
}

shuffleCards();

// Track the flipped cards - WIP

function checkForMatch() {
  flippedCards = document.querySelectorAll(".game-card.flipped");
  if (flippedCards.length === 2){
    lockBoard = true;
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.match === secondCard.dataset.match) {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");
      lockBoard = false;
      flippedCards = [];
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
      }, 1000);
    }
    flippedCards = [];
  lockBoard = false;
  }
}

// Function to reset the game - WIP

function resetGame() {
  lockBoard = true;
  const cardList = [...document.querySelectorAll(".game-card")];
  cardList.forEach(card => {
    card.classList.remove("flipped");
    card.classList.remove("matched");
  });
  shuffleCards();
  flippedCards = [];
  lockBoard = false;
  document.querySelector(".game-board").classList.add("hidden");
  document.querySelector(".restart-game").classList.add("hidden");
  document.querySelector(".difficulty-selection").classList.remove("hidden");
  document.querySelector(".play-game").classList.remove("hidden");
  document.querySelector(".difficulty-selection").value == "select";
}

// Funstion to start the game - WIP
function startGame() {
  document.querySelector(".game-board").classList.remove("hidden");
  document.querySelector(".restart-game").classList.remove("hidden");
  document.querySelector(".difficulty-selection").classList.add("hidden");
  document.querySelector(".play-game").classList.add("hidden");
  document.querySelectorAll(".game-card").classList.add("hidden");
  const easyCards = document.querySelectorAll(".game-card.easy");
  const mediumCards = document.querySelectorAll(".game-card.medium");
  const hardCards = document.querySelectorAll(".game-card.hard");
  const value = document.getElementById("difficulty").value;
  if (value === "easy") {
    easyCards.forEach(card => card.classList.remove("hidden"));
  } else if (value === "medium") {
    easyCards.forEach(card => card.classList.remove("hidden"));
    mediumCards.forEach(card => card.classList.remove("hidden"));
  } else if (value === "hard") {
    easyCards.forEach(card => card.classList.remove("hidden"));
    mediumCards.forEach(card => card.classList.remove("hidden"));
    hardCards.forEach(card => card.classList.remove("hidden"));
  } else {
    alert("Please select a difficulty level.");
    return;
  }
}