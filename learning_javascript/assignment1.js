function isInteger() {
 var txt;
 var number = prompt("Please enter a number?");
 if (isNaN(number)) {
  txt = "Please enter a real number.";
 } else if (number === "") {
  txt = "Please type something.";
 } else {
  txt = "Number " + number + "! Now this is an integer!";
 }
 document.getElementById("isInteger").innerHTML = txt;
}
var sum = 0;
var numbers = [2, 2, 2, 2];

function add_all(item) {
 sum += item;
 add.innerHTML = sum;
}
