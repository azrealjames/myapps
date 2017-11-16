// My printReverse version
// var printReverse = [1, 2, 3, 4];
// will print in reverse order
// for (var i = printReverse.length - 1; i >= 0; i--) {
//  console.log(printReverse[i]);
// }
// Colts printReverse version
function printReverse(arr) {
 for (var i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
 }
}
printReverse([3, 6, 2, 5]);
// This is my isUniform function
// checking for duplicate values
// var index = [1, 1, 1, 1];
//
// function isUniform() {
//  for (var i = 1; i < index.length; i++) {
//   if (index[i] !== index[0])
//    return false;
//  }
//  return true;
// }
// This is Colts isUniform function
function isUniform(arr) {
 var first = arr[0];
 for (var i = 0; i < arr.length; i++) {
  if (arr[i] !== first) {
   return false;
  }
 }
 return true;
}

// My sumArray version
// summing all the numbers in an array
// var sumArray = [1, 2, 3, 4]
// console.log(sumArray.reduce(function num(prev, cur) {
//  return prev + cur;
// }));
// Colts sumArray version
function sumArray(arr) {
 var total = 0;
 arr.forEach(function(element) {
  total += element;
 });
 return total;
}

// My max version
// finding the max of an array
// var numbers = [1, 500, 250, 501];
// var largest = 0;
//
// numbers.forEach(function(elem) {
//  if (largest < elem)
//   largest = elem;
//  console.log(largest);
// });
// Colts Max array
function max(arr) {
 var max = arr[0];
 for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
   max = arr[i];
  }
 }
 return max;
}
