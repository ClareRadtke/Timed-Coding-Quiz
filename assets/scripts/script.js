const questionEl = document.getElementById("question-text");
const startBtnEl = document.getElementById("start-btn");
const INITIAL_DURATION = 5 * 60; // Sets the initial timer duration in seconds
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
  document.getElementById("qNa").style = "display:block";
  // Set the question to the Q&A p tag
  document.getElementById("question-text").innerHTML = questions[0].question;

  // Set the answers arrays and load to the li tags
  // document.getElementById("A1").innerHTML = questions.question1.q1Answers[i];

  // [0, 1, 2, 3] want to randomise this and set the random index to the li innerHTML
}
startBtnEl.addEventListener("click", dispQnA);
startBtnEl.addEventListener("click", startTimer);
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

function timesUp() {
  document.getElementById("qNa").style = "display:none";
  document.getElementById("results").style = "display:block";
}
