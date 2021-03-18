const questionEl = document.getElementById("question-text");
const startBtnEl = document.getElementById("start-btn");
const restartBtnEl = document.getElementById("restart-btn");
const titleSection = document.querySelector(".title-container");
const QnASection = document.getElementById("qNa");
const resultsSection = document.getElementById("results");
const INITIAL_DURATION = 5 * 60; // Sets the initial timer duration in seconds

let currentQuestion;

// Question array:
const questions = [
  {
    question: "What are the 3 types of variable declaration you can use?",
    answers: [
      "var, let, const",
      "variable, declaration, let",
      "Var, Const, Dec",
      "var, declare, create",
    ],
  },
  {
    question: "JavaScript has six primitivedata types, they are:",
    answers: [
      "Boolean, String, Number, undefined, BigInt, Symbol",
      "Object, Function, Number, String, Boolean, NaN",
      "null, Function, Array, Boolean, String, Object",
      "Number, variable, Function, Array, Item, Declaration",
    ],
  },
  {
    question:
      "The following symbols +, =, !=, *, === are called what in JavaScript?",
    answers: ["Operators", "Data Types", "Variables", "Math symbols"],
  },
  {
    question: "The if ... else statement commonly used in JavaScript is a",
    answers: ["Conditional", "Variable", "Function", "Object"],
  },
  {
    question: "How are the variable declarations const and let used?",
    answers: [
      "let is used when a variable will require reassigning./n const is used when a variable will not be reassigned. (correct)",
      "No difference they are used interchangeably.",
      "let is used when a variable will not be reassigned./n const is used when a variable will require reassigning.",
      "let and const are not used to declare variables, only var is used.",
    ],
  },
];

// Display the Q&A container when start is clicked
function dispQnA() {
  toggleQnADisplay();
  // document.getElementById("qNa").style = "display:block";
  currentQuestion = 0;
  displayQuestion(currentQuestion);
}

// When answer selected display next question and save the selection to session storage
function displayNextQuestion(event) {
  // Save the user selections to the session storage (to be displayed on results page)
  // sessionStorage.setItem("key", "value")
  let userSelections = window.sessionStorage;
  userSelections.setItem(currentQuestion, event.target.id);
  console.log("Session Storage object: ", userSelections);
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    toggleQnADisplay();
    toggleResultsDisplay();
  } else {
    displayQuestion(currentQuestion);
  }
}

// Run displayNextQuestion function when any answer li is clicked
document.querySelectorAll(".answer").forEach(function (element) {
  element.addEventListener("click", displayNextQuestion);
});

// Render questions to Q&A Section
function displayQuestion(index) {
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
function startQuiz() {
  dispQnA();
  startTimer();
  toggleTitleDisplay();
}

// Return to the Title section & hide everything else when Restart button clicked
restartBtnEl.addEventListener("click", returnHome);

// combined the restart button click events
function returnHome() {
  toggleTitleDisplay();
  toggleResultsDisplay();
}

//Hide or show the title section
function toggleTitleDisplay() {
  if (titleSection.style.display === "none" || "") {
    titleSection.style.display = "block";
  } else {
    titleSection.style = "display:none";
  }
}

// Hide or show the Q&A Section
function toggleQnADisplay() {
  if (QnASection.style.display === "none" || "") {
    QnASection.style.display = "block";
  } else {
    QnASection.style = "display:none";
  }
}

//Hide or show Results display
function toggleResultsDisplay() {
  if (resultsSection.style.display === "none" || "") {
    resultsSection.style.display = "block";
  } else {
    resultsSection.style = "display:none";
  }
}

//TIMER CODE
let timeCountDownEl = document.getElementById("time-counter");
let timer;

// Timer functions
function setTimer(duration) {
  // Seconds => mm:ss
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  timeCountDownEl.innerHTML =
    minutes + ":" + seconds.toString().padStart(2, "0");
}

function startTimer() {
  let duration = INITIAL_DURATION;
  setTimer(duration);
  timer = setInterval(function () {
    duration--;
    setTimer(duration);

    if (duration <= 0) {
      clearInterval(timer);
      timesUp();
    }
  }, 1000);
}
// Display results when timer reaches 0
function timesUp() {
  toggleQnADisplay();
  toggleResultsDisplay();
}
