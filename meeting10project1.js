var operator = prompt("Enter operator( +, -, * or / ): ");
var number1 = parseFloat(prompt("Enter first number: "));
var number2 = parseFloat(prompt("Enter second number: "));
var result;

var validOperators = ["+", "-", "*", "/"];
if (!validOperators.includes(operator)) {
  alert("Invalid operator! Please use one of +, -, *, /");
}

if (!isNaN(number1) && !isNaN(number2)) {
  if (operator == "+") {
    result = number1 + number2;
  } else if (operator == "-") {
    result = number1 - number2;
  } else if (operator == "*") {
    result = number1 * number2;
  } else if (operator == "/") {
    result = number1 / number2;
  }
  console.log(`${number1} ${operator} ${number2} = ${result}`);
} else {
  alert("Your input is not a number");
}
