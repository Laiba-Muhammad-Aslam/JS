// MATH METHODS

// QUESTION # 1

var userInput = +prompt("Enter a number");
var round = Math.round(userInput);
var floorNumber = Math.floor(userInput);
var ceilNumber = Math.ceil(userInput);
console.log(`number: ${userInput} round off value: ${round} floor value: ${floorNumber} ceil value: ${ceilNumber}`);

// QUESTION # 2

var userInput = +prompt("Enter a number");
var round = Math.round(userInput);
var floorNumber = Math.floor(userInput);
var ceilNumber = Math.ceil(userInput);
console.log(`number: ${userInput} round off value: ${round} floor value: ${floorNumber} ceil value: ${ceilNumber}`);

// QUESTION # 3

var num = +prompt("Enter a number");
var absoluteNumber = Math.abs(num);
console.log(`The absolute value of ${num} is ${absoluteNumber}`);

// QUESTION # 4 

var dice = Math.ceil(Math.random() * 6);
console.log(`Random dice value: ${dice}`);

// QUESTION # 5

var coin = Math.ceil(Math.random() * 2);
var val;
if(coin == "1"){
    val = "Tails" 
}else{
    val =  "Heads"
}
console.log(`${coin} Random coin value: ${val}`);

// QUESTION # 6

var ranNumber = Math.ceil(Math.random() * 100);
console.log(`Random number between 1 and 100: ${ranNumber}`);

// QUESTION # 7

var weight = +prompt("Enter your weight in kilogram");
while (weight<50){
    var weight = +prompt("Enter your weight in kilogram");
    console.log(`The weight of user is ${weight} kilograms`)
}

// QUESTION # 8 

var secretNumber = 17;
var guessNumber = +prompt("Guess the number between 1 - 20: ");

if(guessNumber == secretNumber){
    alert("Congratulation you win the game ");
}

while(guessNumber != secretNumber){
    alert("Try again!");
    var guessNumber = +prompt("Guess the number between 1 - 20: ");
}