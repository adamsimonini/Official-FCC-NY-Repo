// let temp = [];
// let operator;
let operand;

// Get two numbers
let numbers = [3, '*', 5];

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate(userInput) {
  let result = 0;

  return result;
}

function calculate(userInput) {
  let tempNumbers = []; // [1, 2]

  // Take our numbers, run the correct functions
  userInput.forEach((input) => {
    // If its a number, store it in tempNumbers
    if(!isNaN(input)) {
      tempNumbers.push(input);
    } else {
      operand = input;
    }

    if(tempNumbers.length == 2) {
     switch(operand) {
        case "+":
        tempNumbers = [sum(tempNumbers[0], tempNumbers[1])];
        break;
        case "-":
        tempNumbers = [subtract(tempNumbers[0], tempNumbers[1])]
        break;
        case "*":
        tempNumbers = [multiply(tempNumbers[0], tempNumbers[1])]
        break;
        case "/":
        tempNumbers = [divide(tempNumbers[0], tempNumbers[1])]
        break;
      }
    }
  });

  // Return the result
  return tempNumbers[0];
}

console.log(calculate(numbers));

// Add them together
// let result = sum(numbers[0], numbers[1]);
// console.log(result);

// Click enter should give us the correct calculation
// Expecting 3

$('#equals').on("click", function() {
  //handle calculations
});

$('#restart').on("click", function() {
  //reset everything
  temp = [];
  operand = 0;
  operator = undefined;
  $('#output').html("");
});

function noDot(input) {
  //check if our temp number already has a decimal
  let preString = input;
  let string = preString.toString();
  test = string.indexOf('.');
  return (test < 0) ? true : false;
}

function numberFound(input) {
  //a number was selected! tack it on to temp, and change the output field to = temp
  temp.push(input);
  console.log(temp);
  $('#output').html(temp);
}

function handleOperator(input) {
  operand = temp.join("");
  console.log(operand);
  temp = [];
  operator = input;
  $('#output').html(operator);
}

function handleClick(id) {
  if(!isNaN(id)) {
    numberFound(id)
  } else if(temp.length < 1 && operand == 0){
    //reply to user inputting nonsense
    $('#output').html("I'm sorry Dave, I'm afraid I can't compute nothing.");
  } else if(id != '.') {
    handleOperator(id)
  } else if(noDot(temp)) {
    temp.push(id);
    console.log(temp);
  } else {
    console.log("more than one decimal detected. doing nothing");
    return false;
  }
}
