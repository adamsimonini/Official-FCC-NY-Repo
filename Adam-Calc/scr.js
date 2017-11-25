let temp = [];
let operand = 0;
let operator;

let numbers = [6,6];
//sum should be 3;

let result = add(numbers[0],numbers[1]);
console.log(result);

//functions for mathematical operations
function add(a, b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

function multiply(a, b){
  return a-b;
}

function divide(a, b){
  return a-b;
}

function calculate(){

  switch (input){
    case '+':
      result = add();
      break;
    case '-':
      result = subtract();
      break;
    case '*':
      result = multiply();
      break;
    case '/':
      result = divide();
      break;
  }
  //take numbers, use the correct function
  //take users numbers
  return result;
}

console.log((calculate(numbers)));

function calculate2(firstNumber, firstNumber, operator){
  return 
}


$('#equals').on("click", function(){
  //handle calculations

});

$('#restart').on("click", function(){
  //reset everything
  temp = [];
  operand = 0;
  operator = undefined;
  $('#output').html("");
});


function noDot(input){
  //check if our temp number already has a decimal
  let preString = input;
  let string = preString.toString();
  test = string.indexOf('.');
  return (test < 0) ? true : false;
}

function numberFound(input){
  //a number was selected! tack it on to temp, and change the output field to = temp
  temp.push(input);
  console.log(temp);
  $('#output').html(temp);
}

function handleOperator(input){
  operand = temp.join("");
  console.log(operand);
  temp = [];
  operator = input;
  $('#output').html(operator);
}

function handleClick(id){
  if(!isNaN(id)){
    numberFound(id)
  }else if(temp.length < 1 && operand == 0){
    //reply to user inputting nonsense
    $('#output').html("I'm sorry Dave, I'm afraid I can't compute nothing.");
  }else if(id != '.'){
    handleOperator(id)
  }else if(noDot(temp)){
    temp.push(id);
    console.log(temp);
  }else{
    console.log("more than one decimal detected. doing nothing");
    return false;
  }
}
