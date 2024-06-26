// Date Object | Functions

var date = new Date(); // Date Object
console.log(date);

// Changing Date object to String

var date = new Date();
console.log(date.toString());

// GET DAY

var date = new Date();
console.log(date.getDay()); // it returns the index no of day Sunday -- 0

var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
var date = new Date();
console.log(days[date.getDay()]);

// GET MONTH

var date = new Date();
console.log(date.getMonth());

var date = new Date();
console.log(date.getDate());

var date = new Date();
console.log(date.getFullYear());

var date = new Date();
console.log(date.getHours());

var date = new Date();
console.log(date.getMinutes());

var date = new Date();
console.log(date.getSeconds());

var date = new Date();
console.log(date.getMilliseconds());

var date = new Date();
console.log(date.getTime());

// SET A DATE

var date = new Date("June 30, 2035");
console.log(date);

var date = new Date("17 October 2003");
console.log(date);

var date = new Date("2002 October 26");
console.log(date);

var date = new Date("17-October-2002");
console.log(date);

// SET A DATE

var date1 = new Date();
date1.setFullYear(2003);
console.log(date1);

// FUNCTIONS / METHODS

function abc() {
  console.log(new Date());
}
abc();

function myString(number) {
  // Parameters
  console.log(number.toString());
}
myString(56); // arguments

// var userInput = +prompt("Enter your Number: ");

// function myString(number){ // Parameters
//     console.log(number.toString());
// }
// myString(userInput); // arguments

// BASIC DOM

console.log(document);
console.log(document.getElementById("#main"));
console.log(document.getElementById("#main").innerText);
console.log(document.getElementById("#main").innerHTML);

document.getElementById("main").innerHTML = "Laiba Khan";

function getValue() {
  var input = document.getElementById("input").value;

  console.log(input);
}

// PARCTICE QUESTIONS 

// HEAD AND TAIL GAME 

var choices = ["head", "tail"];
var coin = Math.round(Math.random());
// alert(choices[coin])
var palyer1 = prompt("Player 1: Enter your choice Head | Tail ");
var palyer2 = prompt("Player 2: Enter your choice Head | Tail ");
palyer1 = palyer1.toLocaleLowerCase();
palyer2 = palyer2.toLocaleLowerCase();

if(palyer1 === choices[coin]){
    alert("Player 1 wins!!");
}
else if(palyer2 === choices[coin]){
    alert("Player 2 wins");
}
else if (palyer1 === choices[coin]  && palyer2 === choices[coin]){
    alert("Draw");
}
else{
    alert(`Invalid Input, You Loss the Game computer chosed ${choices[coin]}`);
}