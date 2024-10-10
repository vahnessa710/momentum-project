const quotes = [
    "\"The more that you read, the more things you will know. The more that you learn, the more places you'll go.\" - Dr. Seuss",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"The only way to do great work is to love what you do.\"  - Steve Jobs",
    "\"Hardships often prepare ordinary people for an extraordinary destiny.\" - C.S. Lewis",
    "\"It does not matter how slowly you go as long as you do not stop.\" - Confucius",
    "\"Success is not in what you have, but who you are.\" - Bo Bennett",
    "\"Go confidently in the direction of your dreams. Live the life you have imagined.\" - Henry David Thoreau"
];
const quotesDisplay = document.querySelector(".body-text");

function updateQuotes() {
    let randomNumber = Math.random()* quotes.length;
    let newNumber = Math.floor(randomNumber);
    document.getElementById(quotesDisplay.textContent = quotes[newNumber]);
}

updateQuotes(); // random quotes every refresh

const outerButton = document.getElementById("addQuotesOuter");
const newDivQuotes = document.querySelector(".container-newDivQuotes");
const containerQuotes = document.querySelector(".container-quotes");
const containerTasks = document.querySelector(".container-tasks");
const containerToday = document.querySelector(".container-today");
// outer add quote button on click
outerButton.onclick = function() {
    containerQuotes.style.display = "none";
    containerToday.style.display = "none";
    document.querySelector(".container-question").style.display = "none";
    document.querySelector(".container-focus").style.display = "none";
    newDivQuotes.style.display = "flex";
    newDivQuotes.style.marginTop = "18px";
    containerTasks.style.justifyContent = "flex-end";
}

const addQuotesInner = document.querySelector("#addQuotesInner"); // inner button
const textarea = document.querySelector("#userQuotes"); 
const containerQuestion = document.querySelector(".container-question");
const containerFocus = document.querySelector(".container-focus");

// inner add quote button on click
addQuotesInner.onclick = () => {
    let a = textarea.value;
    if(a === ""){
        alert('Please enter quote.')
    } else {
        quotes.push(a);
        console.log(quotes);
        containerQuestion.style.display = "flex";
        containerFocus.style.display = "flex";
        quotesDisplay.innerText = '"' + quotes[quotes.length-1] + '"';
        containerQuotes.style.display = "flex";
        newDivQuotes.style.display = "none";
        containerToday.style.display = "block";
        if(document.querySelector(".focusInput").value === ""){
            containerQuestion.style.display = "flex";
            containerToday.style.display = "none";
        }
    };

}



