let num1 = "";
let num2 = "";
let operator = "";
console.log(operator);

const display = document.getElementById("display");

// basic math operators
add = (a, b) => a + b;
subract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

//operates the specific calculation, num1 and num2 converterd from string to float
operate = function (operator, num1, num2) {
  num1 = parseFloat(num1); //converts string to float
  num2 = parseFloat(num2);
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == ":") {
    return divide(num1, num2);
  }
};

const digitButtons = document.querySelectorAll(".digitButton");
//adds the digit when button is pressed, to the display
digitButtons.forEach((button) =>
  button.addEventListener("click", addNumberToDisplay)
);

function addNumberToDisplay(button) {
 
  if (display.innerText === "0") {
    display.innerText = "";
    console.log(display.innerText);
    display.innerText += button.explicitOriginalTarget.innerText;
  } else {
    display.innerText += button.explicitOriginalTarget.innerText;
  }
} // explicitOriginalTarget is important
function addOperatorToDisplay(button) {
  return (display.innerText += button.explicitOriginalTarget.innerText);
} // explicitOriginalTarget is important
const operatorButtons = document.querySelectorAll(".operatorButton");

operatorButtons.forEach((button) =>
  button.addEventListener("click", pressedOperatorButton)
);

function pressedOperatorButton(button) {
  if (display.innerText !== "" && operator === "") {
    num1 = display.innerText;
    addOperatorToDisplay(button);
    operator = button.explicitOriginalTarget.innerText; // stores value of the operatorButton in var operator
  } else {
    return;
  }
}

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", pressedEqual);

function pressedEqual() {
  num2 = display.innerText.replace(num1, "").replace(operator, "");
  if (num1 !== "" && operator !== "" && num2 !== "") {
    let result = operate(operator, num1, num2);
    display.innerText = result;
    operator = "";
    num1 = result;
    num2 = "";
  } else {
    return;
  }
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
function clear() {
  display.innerText = "";
  operator = "";
  num1 = "";
  num2 = "";
}

const deleteButton = document.getElementById("delete");
console.log(deleteButton);

deleteButton.addEventListener("click", del);
//remove last character of the diplay
//if operator is removed --> var operator = ""
//if num2 is removed --> num2 = ""
// if display = "" --> num1 = "" ?
function del() {
  display.innerText = display.innerText.slice(0, -1);
}

/* 


let num1;
let num2;
let operator;



const display = document.getElementById("display");

// basic math operators
add = (a, b) => a + b;
subract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

operate = function (operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  }
  else if (operator == "-") {
    return subract(num1, num2);
  }
  else if (operator == "*") {
    return multiply(num1, num2);
  }
  else if (operator == ":") {
    return divide(num1, num2);
  }
};

const digitButtons = document.querySelectorAll(".digitButton");
digitButtons.forEach((button) =>
  button.addEventListener("click", addToDisplay)
);

function addToDisplay(button) {
  return (display.innerHTML += button.explicitOriginalTarget.innerText);
} // explicitOriginalTarget is important

const operatorButtons = document.querySelectorAll(".operatorButton");
console.log(operatorButtons);
operatorButtons.forEach((button) =>
  button.addEventListener("click", pressedOperatorButton)
);

function pressedOperatorButton(button) {
  num1 = parseFloat(display.innerText);
  addToDisplay(button);
  operator = button.explicitOriginalTarget.innerText;
}

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", pressedEqual);

function pressedEqual() {
    
  let displayText = display.innerText;
  num2 = parseFloat(displayText.split(operator)[1]);
  let result = operate(operator, num1, num2);
  display.innerText = result;
}

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", clear);
function clear(){
    display.innerText = "";
}

const deleteButton = document.getElementById("delete");
console.log(deleteButton);

deleteButton.addEventListener("click", del)
function del(){
    display.innerText = display.innerText.slice(0,-1)
}
 */
