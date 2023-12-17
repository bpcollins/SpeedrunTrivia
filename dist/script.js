const questions = [
 {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Mars", "Venus", "Earth"],
    correctAnswer: "Mars"
  },
  {
    question: "How many US states are there?",
    options: ["50", "52", "48", "100"],
    correctAnswer: "50"
  },
  {
    question: "How many continents are there?",
    options: ["Six", "Seven", "Eight", "Five"],
    correctAnswer: "Seven"
  },
  {
    question: "How many quarts in a gallon?",
    options: ["Five", "Six", "Four", "Eight"],
    correctAnswer: "Four"
  },
  {
    question: "How many feet are in a mile?",
    options: ["3600", "4850", "5280", "5480"],
    correctAnswer: "5280"
  },
  {
    question: "What is the capital of South Korea?",
    options: ["Sejong", "Incheon", "Gwangju", "Seoul"],
    correctAnswer: "Seoul"
  },
  {
    question: "What is the fastest animal in the world?",
    options: ["Cheetah", "Ostrich", "Golden Eagle", "Peregrine Falcon"],
    correctAnswer: "Peregrine Falcon"
  },
  {
    question: "What president is not featured on Mount Rushmore?",
    options: ["Thomas Jefferson", "Andrew Jackson", "Theodore Roosevelt", "Abraham Lincoln"],
    correctAnswer: "Andrew Jackson"
  },
  {
    question: "Who wrote 'The Catcher in the Rye'?",
    options: ["J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald", "J.D. Salinger"],
    correctAnswer: "J.D. Salinger"
  },
  {
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Mars", "Jupiter", "Mercury", "Venus"],
    correctAnswer: "Venus"
  },
  {
    question: "What is the largest island in the world?",
    options: ["Australia", "Greenland", "Madagascar", "Borneo"],
    correctAnswer: "Greenland"
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Jane Goodall"],
    correctAnswer: "Marie Curie"
  },
  {
    question: "What is the largest ocean mammal?",
    options: ["Blue Whale", "Dolphin", "Seal", "Manatee"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "In which country is the Taj Mahal located?",
    options: ["Egypt", "India", "Turkey", "Pakistan"],
    correctAnswer: "India"
  },
  {
    question: "Who is the author of 'The Lord of the Rings' trilogy?",
    options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "George R.R. Martin"],
    correctAnswer: "J.R.R. Tolkien"
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "0", "2", "3"],
    correctAnswer: "2"
  },
  {
    question: "Who is the author of '1984'?",
    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
    correctAnswer: "George Orwell"
  },
  {
    question: "What is the capital of Brazil?",
    options: ["São Paulo", "Rio de Janeiro", "Buenos Aires", "Brasília"],
    correctAnswer: "Brasília"
  },
  {
    question: "In which year did the United States declare its independence?",
    options: ["1789", "1750", "1800", "1776"],
    correctAnswer: "1776"
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Gobi Desert", "Antarctic Desert", "Sahara Desert", "Arctic Desert"],
    correctAnswer: "Sahara Desert"
  },
  {
    question: "Who is the author of 'Pride and Prejudice'?",
    options: ["Charlotte Brontë", "Jane Austen", "Charles Dickens", "Emily Brontë"],
    correctAnswer: "Jane Austen"
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: ["Stephen Hawking", "Galileo Galilei", "Isaac Newton", "Albert Einstein"],
    correctAnswer: "Albert Einstein"
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Avocado", "Onion", "Garlic", "Tomato"],
    correctAnswer: "Avocado"
  },
  {
    question: "Which country is known as the 'Land of the Midnight Sun'?",
    options: ["Finland", "Sweden", "Denmark", "Norway"],
    correctAnswer: "Norway"
  },
  {
    question: "What is the currency of China?",
    options: ["Yen", "Won", "Ringgit", "Yuan"],
    correctAnswer: "Yuan"
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    options: ["John Steinbeck", "Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    question: "What is the largest bird in the world?",
    options: ["Eagle", "Penguin", "Albatross", "Ostrich"],
    correctAnswer: "Ostrich"
  },
  {
    question: "In what year did the Berlin Wall fall?",
    options: ["1991", "1985", "1990", "1989"],
    correctAnswer: "1989"
  },
  {
    question: "Who painted 'The Last Supper'?",
    options: ["Michelangelo", "Raphael", "Caravaggio", "Leonardo da Vinci"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What is the currency of France?",
    options: ["Pound", "Dollar", "Franc", "Euro"],
    correctAnswer: "Euro"
  },
  {
    question: "Who painted 'Starry Night'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dalí"],
    correctAnswer: "Vincent van Gogh"
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["South Korea", "China", "Vietnam", "Japan"],
    correctAnswer: "Japan"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Melbourne", "Brisbane", "Canberra", "Sydney"],
    correctAnswer: "Canberra"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Oscar Wilde", "Jane Austen", "Charles Dickens", "William Shakespeare"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "In what year did the Titanic sink?",
    options: ["1905", "1920", "1898", "1912"],
    correctAnswer: "1912"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Mars", "Earth", "Jupiter"],
    correctAnswer: "Jupiter"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Michelangelo", "Vincent van Gogh", "Leonardo da Vinci"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Indian Ocean", "Southern Ocean", "Atlantic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Iron", "Uranium", "Oxygen"],
    correctAnswer: "Oxygen"
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Alan Turing"],
    correctAnswer: "Alan Turing"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Bangkok", "Tokyo", "Seoul"],
    correctAnswer: "Tokyo"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["George Orwell", "Mark Twain", "J.K. Rowling", "Harper Lee"],
    correctAnswer: "Harper Lee"
  },
  {
    question: "In which year did World War II end?",
    options: ["1939", "1950", "1940", "1945"],
    correctAnswer: "1945"
  },
  {
    question: "Who wrote 'The Odyssey'?",
    options: ["Virgil", "Sophocles", "Aristotle", "Homer"],
    correctAnswer: "Homer"
  },
  {
    question: "In what year did the first manned moon landing occur?",
    options: ["1972", "1981", "1955", "1969"],
    correctAnswer: "1969"
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: ["Carbon Dioxide", "Hydrogen", "Oxygen", "Nitrogen"],
    correctAnswer: "Nitrogen"
  },
  {
    question: "Who painted 'The Persistence of Memory'?",
    options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correctAnswer: "Salvador Dalí"
  },
  {
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Venus"],
    correctAnswer: "Earth"
  },
  {
    question: "Who developed the theory of general relativity?",
    options: ["Isaac Newton", "Stephen Hawking", "Galileo Galilei", "Albert Einstein"],
    correctAnswer: "Albert Einstein"
  },
  {
    question: "What is the largest big cat in the world?",
    options: ["Lion", "Jaguar", "Leopard", "Tiger"],
    correctAnswer: "Tiger"
  },
  {
    question: "In which year did the Berlin Wall fall?",
    options: ["1991", "1985", "1990", "1989"],
    correctAnswer: "1989"
  },
  {
    question: "What is the capital of Italy?",
    options: ["Milan", "Florence", "Venice", "Rome"],
    correctAnswer: "Rome"
  },
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let gameStarted = false;
let timer;

function shuffleQuestions() {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function getRandomQuestion() {
  return shuffledQuestions[currentQuestionIndex];
}

function displayQuestion(questionObj) {
    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers-container");

    questionContainer.textContent = questionObj.question;

    answersContainer.innerHTML = "";

    questionObj.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        button.addEventListener("click", () => checkAnswer(button, option));
        button.classList.add("bg-white", "md:hover:bg-gray-300", "text-black", "font-thin", "py-2", "px-4", "rounded-xl");
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedButton, selectedAnswer) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    let isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
        selectedButton.classList.add("bg-green-500", "hover:bg-green-500", "md:bg-green-500", "md:hover:bg-green-500", );
        incrementScore();
    } else {
        selectedButton.classList.add("bg-red-500", "hover:bg-red-500", "md:bg-red-500", "md:hover:bg-red-500");
    }

    setTimeout(() => {
        selectedButton.classList.remove("bg-green-500", "hover:bg-green-500", "bg-red-500", "hover:bg-red-500");
        nextQuestion();
    }, 250);
}


function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < shuffledQuestions.length) {
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
  } else {
    clearInterval(timer);
    showResultModal();
  }
}

function incrementScore() {
  correctAnswers++;
  document.getElementById('score').innerText = correctAnswers;
}

function updateTimer(seconds) {
  document.getElementById('timer-value').innerText = seconds;
}

function resetGame() {
  gameStarted = false;
  currentQuestionIndex = 0;
  correctAnswers = 0;
  clearInterval(timer);
  document.getElementById("score").innerText = "0";
  document.getElementById("timer-value").innerText = "60";

  const originalQuestion = {
    question: "Get ready to answer!",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  };

  displayQuestion(originalQuestion);
}

function startTimer(duration) {
  let seconds = duration;
  timer = setInterval(function () {
    updateTimer(seconds);
    seconds--;

    if (seconds < 0) {
      clearInterval(timer);
      showResultModal();
    }
  }, 1000);
}

function showResultScore() {
  const totalQuestions = shuffledQuestions.length;
  const answeredQuestions = currentQuestionIndex;
  const correctAnswers = document.getElementById('score').innerText;

  const scoreContainer = document.getElementById('score-container2');
  scoreContainer.innerHTML = `<p>You got <span>${correctAnswers} out of ${answeredQuestions} correct</span></p>`;
}

function showResultModal() {
  showResultScore();
  const modal = document.getElementById('results_modal');
  modal.showModal();
}

window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", startGame);
});

function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    shuffleQuestions();
    document.getElementById('score').innerText = correctAnswers;
    const randomQuestion = getRandomQuestion();
    displayQuestion(randomQuestion);
    startTimer(59);
  }
}

document.getElementById('submit-score-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const score = document.getElementById('final-score').value; // Set this value based on the game's score

    fetch('/submit-score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, score }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally close the modal or give feedback to the user
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function fetchLeaderboard() {
    fetch('/leaderboard')
    .then(response => response.json())
    .then(data => {
        const leaderboardDiv = document.getElementById('leaderboard-content');
        leaderboardDiv.innerHTML = ''; // Clear existing content
        data.forEach(item => {
            leaderboardDiv.innerHTML += `<div>${item.username}: ${item.score}</div>`;
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


const currentYear = new Date().getFullYear();

document.getElementById('currentYear').innerText = currentYear;
