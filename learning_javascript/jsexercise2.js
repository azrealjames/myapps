// var age = prompt("How old are you?");
// if (age < 0) {
//  alert("Come back when you are born!");
// } else if (age === 21) {
//  alert("Happy 21st Birthday!!");
// } else if (age % 2 !== 0) {
//  alert("Your age is odd!");
// } else if (age % Math.sqrt(age) === 0) {
//  alert("Your age is a perfect square!");
// }
// find out if leap year or not
year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);
