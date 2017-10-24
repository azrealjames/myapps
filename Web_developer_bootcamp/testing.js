// Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise.

function isEven(num) {
 return num % 2 === 0;
}

// Function factorial() which takes a single numeric argument and returns the factorial of that number
// This is my code for factoial
function factoial(number) {
 // return is what I had but I was on the right path
 if (number === 0) {
  return 1;
 }
 return number * factorial(number - 1);
}
// This is from Codecademy.com
// This is the function for a factorial.
function factorial(n) {
 if (n === 0) {
  return 1;
 }
 return n * factorial(n - 1);
}
// kebabToSnake()
function kebabToSnake(str) {
 //replace all dashes with
 var myString = str.replace(/-/g, "_");
 //return str
 return myString;
 //try with: "this - is -a - ---test";
}
