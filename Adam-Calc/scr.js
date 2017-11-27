let temp = [];
let operand1;
let operand2;
let operator = "+";

function calculate(first, second, op){
  return eval(first + " " + op + " " + second);
}

$(document).ready(function(){
  $('#equals').on("click", function(){
    operand2 = temp.join('');
    if(isNaN(operand1) || isNaN(operand2)){
      $('#output').html("Equals? Really?? Aren't you missing something?");
      return false;
    }else{
      console.log("operand 1 = " + operand1 + " operand 2 = " + operand2 + " operator = " + operator);
      let calculated = calculate(operand1, operand2, operator);
      $('#output').html(calculated);
      operand1 = calculated;
    }
  });

  $('#reset').on("click", function(){
    temp = [];
    operand1 = operand2 = undefined;
    operator = undefined;
    $('#output').html("OUTPUT FIELD");
  });
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
  $('#output').html(temp);
}

function handleOperator(input){
  isNaN(operand1) ? operand1 = temp.join("") : operand2 = temp.join("");
  temp = [];
  operator = input;
  $('#output').html(operator);
}

function handleClick(id){
  if(!isNaN(id)){
    numberFound(id)
  }else if(temp.length < 1 && id != '.' && isNaN(operand1)){
    //reply to user inputting operator before number
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
