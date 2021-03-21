//TODO:
// resolve duplicate output error if saving again
// sort the highscores to be 1st higest time remaining & score etc
// decide how to access highscore list

const questionEl = document.getElementById("question-text");
const startBtnEl = document.getElementById("start-btn");
const restartBtnEl = document.getElementById("restart-btn");
const viewOutcomesBtn = document.getElementById("outcomes-btn");
const saveBtn = document.getElementById("save-btn");
const titleSection = document.querySelector(".title-container");
const QnASection = document.getElementById("qNa");
const resultsSection = document.getElementById("results");
const timeRemaining = document.getElementById("time-remaining");
const INITIAL_DURATION = 5 * 60; // Sets the initial timer duration in seconds
const timerSection = document.querySelector(".timer-container");
const totalScore = document.getElementById("total-score");
const outcomesEl = document.getElementById(
  "questions-correct-answer-user-selection"
);
const outcomesContainer = document.querySelector(".outcome");
const initialsInput = document.getElementById("initial-input");
const highScoreListEl = document.getElementById("highScores-list");
const highScoreListItem = document.getElementById("user-highscore");

const timeCountDownEl = document.getElementById("time-counter");
let timer;
let currentQuestion;
const userSelections = window.sessionStorage;
let duration;
let score = 0;
const highScores = [];

// Question array:
const questions = [
  {
    question: "What are the 3 types of variable declaration you can use?",
    answers: [
      "variable, declaration, let",
      "Var, Const, Dec",
      "var, declare, create",
      "var, let, const",
    ],
    correctAnswer: "A4",
  },
  {
    question: "JavaScript has six primitivedata types, they are:",
    answers: [
      "Object, Function, Number, String, Boolean, NaN",
      "Boolean, String, Number, undefined, BigInt, Symbol",
      "null, Function, Array, Boolean, String, Object",
      "Number, variable, Function, Array, Item, Declaration",
    ],
    correctAnswer: "A2",
  },
  {
    question:
      "The following symbols +, =, !=, *, === are called what in JavaScript?",
    answers: ["Operators", "Data Types", "Variables", "Math symbols"],
    correctAnswer: "A1",
  },
  {
    question: "The if ... else statement commonly used in JavaScript is a",
    answers: ["Variable", "Conditional", "Function", "Object"],
    correctAnswer: "A2",
  },
  {
    question: "How are the variable declarations const and let used?",
    answers: [
      "No difference they are used interchangeably.",
      "let is used when a variable will not be reassigned. const is used when a variable will require reassigning.",
      "let is used when a variable will require reassigning. const is used when a variable will not be reassigned.",
      "let and const are not used to declare variables, only var is used.",
    ],
    correctAnswer: "A3",
  },
];

const answerMapping = {
  A1: 0,
  A2: 1,
  A3: 2,
  A4: 3,
};

const scorePerAnswer = 100 / questions.length;

// When answer selected display next question and save the selection to session storage
function handleUserSelection(event) {
  // Check was the correct answer selected and if not then reduce time by 30 seconds
  if (event.target.id != questions[currentQuestion].correctAnswer) {
    console.log(
      "wrong! correct answer: ",
      questions[currentQuestion].correctAnswer
    );
    duration -= 30;
    if (duration <= 29) {
      duration = 0;
      stopQuiz();
    }
  }
  // Calculate the score
  if (event.target.id === questions[currentQuestion].correctAnswer) {
    score = score + scorePerAnswer;
    console.log("current score: ", score);
  }
  // Save the user selections to the session storage
  // sessionStorage.setItem("key", "value")
  userSelections.setItem(currentQuestion, event.target.id);

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    stopQuiz();
  } else {
    showQuestion(currentQuestion);
  }
}

// Run displayNextQuestion function when any answer li is clicked
document.querySelectorAll(".answer").forEach(function (element) {
  element.addEventListener("click", handleUserSelection);
});

// Render questions to Q&A Section
function showQuestion(index) {
  // Set the question to the Q&A p tag
  questionEl.innerHTML = questions[index].question;
  // Set the answers array and load to the li tags
  document.getElementById("A1").innerHTML = questions[index].answers[0];
  document.getElementById("A2").innerHTML = questions[index].answers[1];
  document.getElementById("A3").innerHTML = questions[index].answers[2];
  document.getElementById("A4").innerHTML = questions[index].answers[3];
}

// When start button clicked start timer, hide the Title section & display the Quiz
startBtnEl.addEventListener("click", startQuiz);

// combined all start button click events
// Display the Q&A container when start is clicked
function startQuiz() {
  qnaShow();
  timerShow();
  currentQuestion = 0;
  showQuestion(currentQuestion);
  startTimer();
  titleHide();
}

function stopQuiz() {
  qnaHide();
  resultsShow();
  stopTimer();
  timerHide();
}

// Return to the Title section & hide everything else when Restart button clicked
restartBtnEl.addEventListener("click", returnHome);

// Combined the restart button click events
function returnHome() {
  titleShow();
  resultsHide();
}

// Show or hide outcomes
viewOutcomesBtn.addEventListener("click", outcomesToggle);

//Hide or show the title section
function titleShow() {
  titleSection.style.display = "block";
}
function titleHide() {
  titleSection.style.display = "none";
}

// Hide or show the Q&A Section
function qnaShow() {
  QnASection.style.display = "block";
}
function qnaHide() {
  QnASection.style.display = "none";
}

//Hide or show Results
function resultsShow() {
  resultsSection.style.display = "block";
}
function resultsHide() {
  resultsSection.style.display = "none";
}

//Hide or show timer
function timerShow() {
  timerSection.style.display = "block";
}
function timerHide() {
  timerSection.style.display = "none";
}

//Hide or show outcomes
function outcomesToggle() {
  if (outcomesEl.style.display === "block") {
    outcomesEl.style.display = "none";
    viewOutcomesBtn.innerHTML = "View";
  } else {
    outcomesEl.style.display = "block";
    viewOutcomesBtn.innerHTML = "Hide";
  }
}

// Timer functions
function formatTime(duration) {
  // Seconds => mm:ss
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return minutes + ":" + seconds.toString().padStart(2, "0");
}

function setTimer(duration) {
  timeCountDownEl.innerHTML = formatTime(duration);
}

function startTimer() {
  duration = INITIAL_DURATION;
  setTimer(duration);
  timer = setInterval(function () {
    duration--;
    setTimer(duration);

    if (duration <= 0) {
      clearInterval(timer);
      stopQuiz();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  // Display the remaining time in results
  timeRemaining.innerHTML = formatTime(duration);
  // Display the total score in results
  totalScore.innerHTML = score;
  // Save the remaining time to the session storage
  // sessionStorage.setItem("key", "value")
  userSelections.setItem("timeRemaining", duration);
  // Save the total score to the session storage
  userSelections.setItem("score", score);
  // Set the outcomes section
  setOutcomes();
  console.log(userSelections);
}

// Showing the questions, correct answers and user selections
function setOutcomes() {
  for (let i = 0; i < questions.length; i++) {
    // Clone the outcomes container element
    const clnOutcomesContainer = outcomesContainer.cloneNode(true);
    // Display the clones but not the template
    clnOutcomesContainer.style.display = "block";
    // Display the questions in the p tag
    clnOutcomesContainer.querySelector(".outcome-question").innerHTML =
      questions[i].question;
    // Display the users selection in the 'You selected' li tag
    clnOutcomesContainer.querySelector(".outcome-user-selection").innerHTML =
      questions[i].answers[answerMapping[userSelections.getItem(i)]];
    // Display the correct answer in the 'Correct answer' li tag
    clnOutcomesContainer.querySelector(".outome-correct").innerHTML =
      questions[i].answers[answerMapping[questions[i].correctAnswer]];

    outcomesEl.appendChild(clnOutcomesContainer);
  }
}

// Save the input initials to initials variable
saveBtn.addEventListener("click", addHighScore);

// Save highscore
function addHighScore() {
  let initialsEntry = "";
  initialsEntry = initialsInput.value;
  let newEntryTime = userSelections.getItem("timeRemaining");
  let newEntryScore = userSelections.getItem("score");
  const newEntry = {
    initials: initialsEntry,
    score: newEntryScore,
    time: newEntryTime,
  };
  highScores.push(newEntry);
  //TODO: sort the array based on TIme and Score

  // Clear the highscores list prior to displaying
  highScoreListEl.innerHTML = "";

  for (let i = 0; i < highScores.length; i++) {
    // Clone the highscore list item
    const clnHighScoreListItem = highScoreListItem.cloneNode(true);
    // Display the clones but not the template
    clnHighScoreListItem.style.display = "block";
    // Display the initials
    clnHighScoreListItem.querySelector(".initials").innerHTML =
      highScores[i].initials;
    // Display the score
    clnHighScoreListItem.querySelector(".highscore-score").innerHTML =
      highScores[i].score;
    // Display the time
    clnHighScoreListItem.querySelector(
      ".highscore-time"
    ).innerHTML = formatTime(highScores[i].time);
    // append the clones to the high scores list
    highScoreListEl.appendChild(clnHighScoreListItem);
  }
  console.log(highScores);
}
