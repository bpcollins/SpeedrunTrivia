let shuffledQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let gameStarted = false;
let timer;

const initialQuestion = {
    question: "Get ready to answer!",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: ""
};

function loadQuestions() {
    fetch('questions.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data.questions)) {
                throw new Error('Questions data is not an array');
            }
            shuffledQuestions = data.questions;
            shuffleQuestions();
        })
        .catch(error => console.error('Error loading questions:', error));
}

function shuffleQuestions() {
    shuffledQuestions.sort(() => Math.random() - 0.5);
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
        selectedButton.classList.add("bg-green-500", "hover:bg-green-500", "md:bg-green-500", "md:hover:bg-green-500");
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
        displayQuestion(getRandomQuestion());
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
    displayQuestion(initialQuestion);
    document.getElementById('results_modal').close();
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
    const scoreContainer = document.getElementById('score-container2');
    scoreContainer.innerHTML = `<p>You got <span>${correctAnswers} out of ${answeredQuestions} correct</span></p>`;
    document.getElementById('final-score').value = correctAnswers;
}

function showResultModal() {
    showResultScore();
    const modal = document.getElementById('results_modal');
    modal.showModal();
}

document.getElementById('submit-score-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const score = document.getElementById('final-score').value;

    fetch('https://speedruntrivia.onrender.com/submit-score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, score }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        fetchLeaderboard();
        resetGame();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function fetchLeaderboard() {
    fetch('https://speedruntrivia.onrender.com/leaderboard')
        .then(response => response.json())
        .then(data => {
            const leaderboardDiv = document.getElementById('leaderboard-content');
            leaderboardDiv.innerHTML = '';
            leaderboardDiv.className = 'grid grid-cols-2 w-full bg-slate-100 border border-gray-300 rounded-xl p-6';

            const nameHeaderDiv = document.createElement('div');
            nameHeaderDiv.classList.add('font-bold', 'text-black', 'pb-2');
            nameHeaderDiv.textContent = 'Name';
            leaderboardDiv.appendChild(nameHeaderDiv);

            const scoreHeaderDiv = document.createElement('div');
            scoreHeaderDiv.classList.add('font-bold', 'text-black', 'pb-2', 'text-center');
            scoreHeaderDiv.textContent = 'Score';
            leaderboardDiv.appendChild(scoreHeaderDiv);

            data.forEach((item, index) => {
                const nameDiv = document.createElement('div');
                nameDiv.classList.add('text-black');
                nameDiv.innerHTML = `<span class="font-bold mr-2">${index + 1}.</span>${item.username}`;

                const scoreDiv = document.createElement('div');
                scoreDiv.classList.add('text-black', 'text-center');
                scoreDiv.textContent = item.score;

                leaderboardDiv.appendChild(nameDiv);
                leaderboardDiv.appendChild(scoreDiv);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

window.addEventListener("load", () => {
    loadQuestions();
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startGame);
    fetchLeaderboard();
});

function startGame() {
    if (!gameStarted && shuffledQuestions.length > 0) {
        gameStarted = true;
        currentQuestionIndex = 0;
        correctAnswers = 0;
        displayQuestion(getRandomQuestion());
        startTimer(59);
    }
}

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerText = currentYear;
