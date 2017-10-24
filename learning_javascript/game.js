// create secret number
var secretNumber = 4;
// ask user for guess
// var guess = Number(prompt("Guess a number")); this will work but not as defined
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
// check guess
if (Number(guess) === secretNumber) {
 alert("YOU GOT IT Right!");
}
// check if guess is higher
else if (guess > secretNumber) {
 alert("Too high. Guess again!")
}
// otherwise, check if lower
else if (guess < secretNumber) {
 alert("Too low. Guess again!")
}
