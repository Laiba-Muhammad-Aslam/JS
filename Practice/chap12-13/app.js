// QUESTION # 1

var input = prompt("Enter a character:");

// Get ASCII code of the input character
var charCode = input.charCodeAt(0);

// Check if the input is a number
if (charCode >= 48 && charCode <= 57) {
    alert("The input is a number.");
} 
// Check if the input is an uppercase letter
else if (charCode >= 65 && charCode <= 90) {
    alert("The input is an uppercase letter.");
} 
// Check if the input is a lowercase letter
else if (charCode >= 97 && charCode <= 122) {
    alert("The input is a lowercase letter.");
} 
// If none of the above conditions are true, the input is not a valid character
else {
    alert("The input is not a valid character.");
}



// QUESTION # 2

var int1 = +prompt("Enter your first number: ");
var int2 = +prompt("Enter your second number: ");

if(int1 > int2){
    // alert(int1 + "is greater");
    console.log(int1 + "is greater");
}
else if(int1 === int2){
    // alert(`${int1} and ${int2} are equal`);
    console.log(`${int1} and ${int2} are equal`);
}else{
    // alert(`${int2} is greater`);
    console.log(`${int2} is greater`);
}


// QUESTION # 3

var num = +prompt("Enter your number: ");

if (num > 0){
    console.log("Number is positive");
}else if (num == 0){
    console.log("Number is equal to Zero");
}else{
    console.log("Number is negative");
}

// QUESTION # 4 

var character = prompt("Enter a character: ");

if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
    console.log(true);
    // alert(true);
}else{
    console.log(false);
    // alert(false);
}
// QUESTION # 5

var correctPassword = "ravi476";
var password = prompt("Enter your password: ");

if (password == ""){
    // console.log("Please enter your password");
    alert("Please enter your password");
}else if (password == correctPassword){
    // console.log("“Correct! The password you entered matches the original password");
    alert("“Correct! The password you entered matches the original password");
}else {
    // console.log("Incorrect password");
    alert("Incorrect password");
}

// QUESTION # 6 

var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
console.log(greeting);
}
else{
    greeting = "Good evening"; 
    console.log(greeting);
} 

// QUESTION # 7 

var time = +prompt("Enter a time: ");

if (time == 13) {
    alert("1 pm");
} else if (time == 14) {
    alert("2 pm");
} else if (time == 15) {
    alert("3 pm");
} else if (time == 16) {
    alert("4 pm");
} else if (time == 17) {
    alert("5 pm");
} else if (time == 18) {
    alert("6 pm");
} else if (time == 19) {
    alert("7 pm");
} else if (time == 20) {
    alert("8 pm");
} else if (time == 21) {
    alert("9 pm");
} else if (time == 22) {
    alert("10 pm");
} else if (time == 23) {
    alert("11 pm");
} else if (time == 24 || time == 0) { // Handling both 24 (12 am) and 0 (also 12 am)
    alert("12 am");
} else if (time > 0 && time < 13) { // Morning hours
    alert(time + " am");
} else { // Handling invalid input
    alert("Invalid input");
}

var t = +prompt("Enter a time: ");

if (t >= 0 && t < 1200 ){
    alert("Good Morning!");
}else if (t >=1200 && t < 1700){
    alert("Good Afternoon");
}else if (t >=1700 && t < 2100){
    alert("Good Evening");
}else if (t >=2100 && t <= 2359){
    alert("Good Night");
}else{
    alert("Invalid Time");
}

