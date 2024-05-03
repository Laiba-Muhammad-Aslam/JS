var firstName = "Laiba";
var lastName = "Aslam";

console.log(firstName+ lastName);

// JS Top to bottom and left to right 

var num1 = "2";
var num2 = 2;

console.log(num1 + num2 + 2);

var num3 = 2;
var num4 = "2";

console.log(2 + num3 + num4 );

console.log(+"2" + 2);

var n1 = +prompt();
var n2 = +prompt();
console.log(n1 + n2);

prompt("Enter Your Name", "Laiba");
console.log("2"==2);
console.log("2"===2);

if(true){
    console.log("console.....")
}

var city = prompt("Enter your city ");

if(city == "karachi"){
    console.log("Welcome to city of lights");
}

console.log("123" !== "123");
console.log("123" !== "1234");

var age = +prompt("Enter your age: ");

if(age >= 18){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

// CALCULATOR 

var val1 = +prompt("Enter first number: ");
var val2 = +prompt("Enter second number: ");
var ope = prompt("Enter operator ");
var result;

if(ope === "+"){
    result = val1 + val2;
}
else if(ope === "-"){
    result = val1 - val2;
}
else if(ope === "*"){
    result = val1 * val2;
}
else if(ope === "/"){
    if(val2 === 0){
        result = "Cannot divide by zero";
    }
    else{
        result = val1 / val2;
    }
}else{
    result = "Invalid operator";
}
console.log("Result: ", result);