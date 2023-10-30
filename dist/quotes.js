const quotes = [
    { quote: "The beginning is the most important part of the work.", author: "Plato" },
    { quote: "Life is the flower for which love is honey.", author: "Victor Hugo" },
    { quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { quote: "In three words I can sum up everything I’ve learned about life: it goes on.", author: "Robert Frost" },
    { quote: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
    { quote: "Love inspires, illumines, designates, and leads the way.", author: "Mary Baker Eddy" },
    { quote: "Relationships are based on four principles: Respect, Understanding, Acceptance, and Appreciation.", author: "William Wordsworth" },
    { quote: "Don’t go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "For a man to conquer himself is the first and noblest of all victories.", author: "Plato" },
    { quote: "A superior man is modest in his speech, but exceeds in his actions.", author: "Confucius" },
    { quote: "Seize the moments of happiness, love and be loved! That is the only reality in the world, all else is folly.", author: "Leo Tolstoy" },
    { quote: "Everything you say should be true, but not everything true should be said.", author: "Voltaire" },
    { quote: "One who believes in himself has no need to convince others.", author: "Laozi" },
    { quote: "You can easily judge the character of a man by how he treats those who can do nothing for him.", author: "Johann Wolfgang von Goethe" },
    { quote: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { quote: "The good we do today becomes the happiness of tomorrow.", author: "William James" },
    { quote: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
    { quote: "A great man is hard on himself; a small man is hard on others.", author: "Confucius" },
    { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { quote: "Falling down is not a failure. Failure comes when you stay safe where you have fallen.", author: "Socrates" },
    { quote: "Never give up. No one knows what's going to happen next.", author: "Hafez" },
    { quote: "When you rise in the morning, give thanks for the light, for your life, for your strength.", author: "Tecumseh" },
    { quote: "There is only one good thing in life, and that is love.", author: "Guy de Maupassant" },
    { quote: "The future depends on what we do in the present.", author: "Mahatma Gandhi" },
    { quote: "Great minds have purpose, others have wishes.", author: "Washington Irving" },
    { quote: "Worrying is like paying a debt you don't owe.", author: "Mark Twain" },
    { quote: "Love betters what is best.", author: "William Wordsworth" },
    { quote: "The mind is not a vessel to be filled but a fire to be kindled.", author: "Plutarch" }
];

let displayedQuotes = [...quotes];
let currentIndex = 0;

const quoteDisplay = document.getElementById("quote");
const authorDisplay = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
    if (displayedQuotes.length === 0) {
        displayedQuotes = [...quotes];
    }

    const randomIndex = Math.floor(Math.random() * displayedQuotes.length);
    const randomQuote = displayedQuotes.splice(randomIndex, 1)[0];

    return randomQuote;
}

function displayRandomQuote() {
    if (displayedQuotes.length === 0) {
        displayedQuotes = [...quotes];
    }

    quoteDisplay.style.opacity = 0;
    authorDisplay.style.opacity = 0;

    setTimeout(() => {
        const randomQuote = getRandomQuote();
        quoteDisplay.textContent = randomQuote.quote;
        authorDisplay.textContent = `- ${randomQuote.author}`;

        quoteDisplay.classList.add("transition-opacity");
        authorDisplay.classList.add("transition-opacity");

        setTimeout(() => {
            quoteDisplay.style.opacity = 1;
            authorDisplay.style.opacity = 1;
        }, 50);
    }, 700);
}

newQuoteButton.addEventListener("click", displayRandomQuote);

displayRandomQuote();
