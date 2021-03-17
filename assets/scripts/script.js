const questionEl = document.getElementById("question-text");
const startBtnEl = document.getElementById("start-btn");
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

//TIMER CODE
let timeCountDownEl = document.getElementById("time-counter");

let timerCount = (timeCountDownEl.innerHTML = "5:00");
let timer;

//Timer functions
// function startTimer() {
//   timer = setInterval(function () {
//     const timeArr = timerCount.split(/[:]+/);
//     let minute = timeArr[0];
//     let second = correctSeconds(timeArr[1] - 1);
//     // reduce the minute by 1 when the seconds match "59"
//     if (second == 59) {
//       minute = minute - 1;
//     }
//     if (minute == 0 && second == 00) {
//       // TODO hide the Q&A container and show the Results container
//       clearInterval(timer);
//     }
//     timerCount = minute + ":" + second;
//     second--;
//   }, 1000);
// }

// function correctSeconds(second) {
//   // reset the seconds to 59
//   if (second < 0) {
//     second = "59";
//   }
//   //add a 0 before any single digit seconds
//   if (second < 10 && second >= 0) {
//     second = "0" + second;
//   }
//   return second;
// }

// startBtnEl.addEventListener("click", startTimer);
