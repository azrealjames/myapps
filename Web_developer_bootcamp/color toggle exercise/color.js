var button = document.querySelector("button");
var isPink = false;

// button.addEventListener("click", function() {
//  if (isPink) {
//   document.body.style.background = "rgb(0, 6, 92)";
//   // isPink = false;
//  } else {
//   document.body.style.background = "rgba(250, 0, 0, 0.41)";
//   // isPink = true;
//  }
//  // this negates the isPink true false because it can't equal itself
//  isPink = !isPink;
// });


button.addEventListener("click", function() {
 document.body.classList.toggle("purple");
});


// var body = document.getElementById("#wallpaper");

// button.addEventListener("click", changeColor);
//
// function changeColor() {
//  // if black
//  // make it pink
//  // else
//  // make it white
//  wallpaper.style.backgroundColor = "pink";
// }

// button.addEventListener("click", changeColorBack);
//
// function changeColorBack() {
//  wallpaper.style.backgroundColor = "black";
// }