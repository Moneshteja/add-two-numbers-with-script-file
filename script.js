
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));

function sum(a, b) {
  return a + b;
}

var total = sum(num1, num2);

document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + total + ".";
