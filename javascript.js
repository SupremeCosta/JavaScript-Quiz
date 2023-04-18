// Define quiz questions and answers
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "Berlin", "London", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Mars", "Jupiter", "Saturn", "Neptune"],
      answer: "Jupiter"
    },
    {
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
      answer: "Mitochondria"
    },
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
      answer: "Hyper Text Markup Language"
    }
];

// Set up variables and DOM elements
const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const timeEl = document.getElementById("time");
const endContainer = document.getElementById("end-container");
const scoreEl = document.getElementById("score");
const initialsInput = document.getElementById("initials");
const submitBtn = document.getElementById("submit-btn");
const highScoresContainer = document.getElementById("high-scores-container");
const highScoresList = document.getElementById("high-scores-list");
const backBtn = document.getElementById("back-btn");
const clearBtn = document.getElementById("clear-btn");
let currentQuestionIndex = 0;
let time = 60;
let score = 0;
let timerInterval;

// Add event listener to start button
startBtn.addEventListener("click", startQuiz);

// Define startQuiz function
function startQuiz() {
    startBtn.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
    timerInterval = setInterval(updateTimer, 1000);
}

// Define showQuestion function


// Define handleChoice function


// Define updateTimer function


// Define endQuiz function


// Add event listener to submit button


// Define saveHighScore function