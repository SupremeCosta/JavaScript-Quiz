const quiz = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does JS stand for?",
    choices: [
      "JavaScript",
      "JavaServer",
      "JavaSource",
    ],
    answer: "JavaScript",
  },
];

const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const timeLeftEl = document.getElementById("time-left");
const finalScoreEl = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitScoreBtn = document.getElementById("submit-score-btn");
const highscoresScreen = document.getElementById("highscores-screen");
const highscoresList = document.getElementById("highscores-list");
const viewHighScoresBtn = document.getElementById("view-highscores-btn");

let currentQuestionIndex;
let timeLeft;
let timerInterval;

function startQuiz() {
  currentQuestionIndex = 0;
  timeLeft = 60;
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
  startTimer();
}

function showQuestion() {
  const question = quiz[currentQuestionIndex];
  questionEl.textContent = question.question;
  choicesEl.innerHTML = "";
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice");
    button.addEventListener("click", () => {
      if (choice === question.answer) {
        showFeedback("Correct!");
      } else {
        showFeedback("Wrong!");
        timeLeft -= 10;
        if (timeLeft < 0) {
          timeLeft = 0;
        }
        timeLeftEl.textContent = timeLeft;
      }
    });
    choicesEl.appendChild(button);
  });
}
  
  function showFeedback(feedback) {
  const feedbackEl = document.createElement("p");
  feedbackEl.textContent = feedback;
  quizScreen.appendChild(feedbackEl);
  setTimeout(() => {
  feedbackEl.remove();
  currentQuestionIndex++;
  if (currentQuestionIndex === quiz.length) {
  endQuiz();
  } else {
  showQuestion();
  }
  }, 1000);
  }
  
  function startTimer() {
  timeLeftEl.textContent = timeLeft;
  timerInterval = setInterval(() => {
  timeLeft--;
  timeLeftEl.textContent = timeLeft;
  if (timeLeft === 0) {
  endQuiz();
  }
  }, 1000);
  }
  
  function endQuiz() {
  clearInterval(timerInterval);
  quizScreen.classList.add("hidden");
  gameOverScreen.classList.remove("hidden");
  finalScoreEl.textContent = timeLeft;

  const retakeQuizBtn = document.createElement("button");
  retakeQuizBtn.textContent = "Retake Quiz";
  gameOverScreen.appendChild(retakeQuizBtn);

  retakeQuizBtn.addEventListener("click", () => {
    gameOverScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  });
  }

  function showHighScores() {
    highscoresList.innerHTML = "";
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.forEach(score => {
      const li = document.createElement("li");
      li.textContent = `${score.initials} - ${score.score}`;
      highscoresList.appendChild(li);
    });
    startScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    gameOverScreen.classList.add("hidden");
    highscoresScreen.classList.remove("hidden");

    const clearHighscoresBtn = document.getElementById("clear-highscores-btn");
    clearHighscoresBtn.addEventListener("click", () => {
      localStorage.removeItem("highScores");
      highscoresList.innerHTML = "";
    });
  }
  
  submitScoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const initials = initialsInput.value.trim();
    if (initials !== "") {
      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      const newScore = { initials, score: timeLeft };
      highScores.push(newScore);
      highScores.sort((a, b) => b.score - a.score);
      localStorage.setItem("highScores", JSON.stringify(highScores));
  
      // hide quiz content and show highscores list
      quizScreen.classList.add("hidden");
      gameOverScreen.classList.add("hidden");
      highScoresScreen.classList.remove("hidden");
  
      // update highscores list
      highScoresList.innerHTML = "";
      highScores.forEach((score) => {
        const li = document.createElement("li");
        li.textContent = `${score.initials} - ${score.score}`;
        highScoresList.appendChild(li);
      });
    }
  });

startBtn.addEventListener("click", startQuiz);
viewHighScoresBtn.addEventListener("click", showHighScores);