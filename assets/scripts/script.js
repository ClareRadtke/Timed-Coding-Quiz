// JS Fundamental questions:
// Q: What are the 3 types of variable declaration you can use?
//   A: var, let, const (correct)
//   A: variable, declaration, let
//   A: Var, Const, Dec
//   A: var, declare, create

// Q: JavaScript has six primitivedata types, they are:
//   A: Boolean, String, Number, undefined, BigInt, Symbol (correct)
//   A: Object, Function, Number, String, Boolean, NaN
//   A: null, Function, Array, Boolean, String, Object
//   A: Number, variable, Function, Array, Item, Declaration

// Q: The following symbols +, =, !=, *, === are called what in JavaScript?
//   A: Operators (correct)
//   A: Data Types
//   A: Variables
//   A: Math symbols

// Q: The if ... else statement commonly used in JavaScript is a
//   A: Conditional (correct)
//   A: Variable
//   A: Function
//   A: Object

// Q: How are the variable declarations const and let used?
//   A: let is used when a variable will require reassigning.
//      /n const is used when a variable will not be reassigned. (correct)
//   A: No difference they are used interchangeably.
//   A: let is used when a variable will not be reassigned.
//      /n const is used when a variable will require reassigning.
//   A: let and const are not used to declare variables, only var is used.

// Question objects:
const questions = {
  question1: {
    q1: "What are the 3 types of variable declaration you can use?",
    q1Answers: [
      "var, let, const",
      "variable, declaration, let",
      "Var, Const, Dec",
      "var, declare, create",
    ],
  },
  question2: {
    q2: "JavaScript has six primitivedata types, they are:",
    q2Answers: [
      "Boolean, String, Number, undefined, BigInt, Symbol",
      "Object, Function, Number, String, Boolean, NaN",
      "null, Function, Array, Boolean, String, Object",
      "Number, variable, Function, Array, Item, Declaration",
    ],
  },
  question3: {
    q3: "The following symbols +, =, !=, *, === are called what in JavaScript?",
    q3Answers: ["Operators", "Data Types", "Variables", "Math symbols"],
  },
  question4: {
    q4: "The if ... else statement commonly used in JavaScript is a",
    q4Answers: ["Conditional", "Variable", "Function", "Object"],
  },
  question5: {
    q5: "How are the variable declarations const and let used?",
    q5Answers: [
      "let is used when a variable will require reassigning./n const is used when a variable will not be reassigned. (correct)",
      "No difference they are used interchangeably.",
      "let is used when a variable will not be reassigned./n const is used when a variable will require reassigning.",
      "let and const are not used to declare variables, only var is used.",
    ],
  },
};

//TIMER CODE

let timeCountDownEl = document.getElementById("time-counter");
const startBtnEl = document.getElementById("start-btn");
let timerCount = (timeCountDownEl.innerHTML = "5:00");
let timer;

//Timer functions
function startTimer() {
  timer = setInterval(function () {
    const timeArr = timerCount.split(/[:]+/);
    let minute = timeArr[0];
    let second = correctSeconds(timeArr[1] - 1);
    // reduce the minute by 1 when the seconds match "59"
    if (second == 59) {
      minute = minute - 1;
    }
    if (minute == 0 && second == 00) {
      // TODO hide the Q&A container and show the Results container
      clearInterval(timer);
    }
    timerCount = minute + ":" + second;
  }, 1000);
}

function correctSeconds(second) {
  // reset the seconds to 59
  if (second < 0) {
    second = "59";
  }
  //add a 0 before any single digit seconds
  if (second < 10 && second >= 0) {
    second = "0" + second;
  }
  return second;
}

startBtnEl.addEventListener("click", startTimer);
