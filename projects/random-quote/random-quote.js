// Random Quote Generator

const quoteBtn = document.getElementById("new-quote");
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const originalStyle = quoteBtn.style.cssText;

const apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

let clickTimeout = null;

// Click handler: delay to check if a double-click is coming
quoteBtn.addEventListener("click", () => {
    if (clickTimeout !== null) return; // Already waiting for double-click

    clickTimeout = setTimeout(() => {
        newQuote();
        clickTimeout = null;
    }, 300); // Adjust this timing as needed
});

// If double-click happens, cancel the pending single-click
quoteBtn.addEventListener("dblclick", () => {
    if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
    }
    tooFast();
});


 function tooFast() {
    blockClick = true;
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
    }, 4000);
};

async function newQuote() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        quoteText.innerText = `"${data[0]}"`;
        quoteBtn.innerText = "New Quote";
        quoteAuthor.innerText = "~ Ron Swanson";
        quoteBtn.style.cssText = originalStyle;
    } catch (error) {
        quoteText.innerText = "Error fetching quote. Please try again.";
        console.error("Error fetching quote:", error);
        quoteAuthor.innerText = "~ Sad Ron Swanson :(";
    }
};

