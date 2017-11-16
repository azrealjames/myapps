var movieDB = [{
 title: "The Fountain",
 // rating: " - 4 Stars",
 seen: true,
 rating: 5
}, {
 title: "Lord of the Rings",
 // rating: " - 5 Stars",
 seen: true,
 rating: 5
}, {
 title: "Starwars: The Last Jedi",
 // rating: " - 0 Stars",
 seen: false,
 rating: 4.5
}]
// this is the result string
movieDB.forEach(function(movie) {
 console.log(buildString(movie));
});
// Colts condensced string
function buildString(movie) {
 var result = "You have ";
 if (movie.seen) {
  result += "watched ";
 } else {
  result += "not seen ";
 }
 result += "\"" + movie.title + "\" - ";
 result += movie.rating + " stars";
 return result;
}
