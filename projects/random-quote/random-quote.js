// Random Quote Generator

const quoteBtn = document.getElementById("new-quote");
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const originalStyle = quoteBtn.style.cssText;

const apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

quoteBtn.addEventListener("click", newQuote);
quoteBtn.addEventListener("dblclick", tooFast);

// I can not get the .innertext to stay for the btn and text when dbl clicked.

 function tooFast() {
    // I added this removeEventListener in hopes it would allow the .innertext to stay.
    quoteBtn.removeEventListener("click", newQuote);
    quoteBtn.innerText = "Whoa there!";
    quoteText.innerText = "Chill out, buddy! Not so fast!";
    quoteAuthor.innerText = "~ Angry Ron Swanson";
    quoteBtn.disabled = true;
    quoteBtn.style.backgroundColor = "red";
    quoteBtn.style.color = "white";
    quoteBtn.style.cursor = "not-allowed";
    setTimeout(() => {
        quoteText.innerText = "Fine then, quit pouting!";
        quoteBtn.disabled = false;
        quoteBtn.style.cursor = "pointer";
        quoteBtn.style.backgroundColor = "gray";
        quoteBtn.innerText = "\"I promise I wont click so much...\"";
        quoteBtn.addEventListener("click", newQuote);
    }, 4000);
    //I'd also like to get the button back to the original style on first click after the timeout.
};

async function newQuote() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        quoteText.innerText = `"${data[0]}"`;
        quoteBtn.innerText = "New Quote";
    } catch (error) {
        quoteText.innerText = "Error fetching quote. Please try again.";
        console.error("Error fetching quote:", error);
        quoteAuthor.innerText = "~ Sad Ron Swanson :(";
    }
};

