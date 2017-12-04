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

// Building our own for.Each
function myForEach(arr, func) {
 // loop through arrar
 for (var i = 0; i < arr.length; i++) {
  // call func for each item in array
  func();
 }
}

//The keyword "this"
var comments = {}

comments.data = ["Good", "Great job", "Lame"]

comments.print = function() {
 this.data.forEach(function(el) {
  console.log(el);
 });
}

// An example of dispalying a message when cliked
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// setup click event First example
button.addEventListener("click", function() {
 paragraph.textContent = "Someone clicked the button!! :D"
});

paragraph.addEventListener("mouseover", function() {
 this.textContent = "No on has clicked the button yet. :(";
});
// setup click event Second example
// button.addEventListener("click", changeText);

// function changeText() {
//  paragraph.textContent = "Someone Clicked the Button! :D"
// }

var para = document.querySelector("#mouseover");

// setup mouse over listener
para.addEventListener("mouseover", function() {
 this.textContent = "Stop hovering over me!"
});

// setup mouse out listener
para.addEventListener("mouseout", function() {
 this.textContent = "Phew, thank you for leaving me alone";
});