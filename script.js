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
