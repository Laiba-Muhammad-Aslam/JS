// MATH EXPRESSIONS

// Q#1

var num1 = prompt("Enter your first Number: ");
var num2 = prompt("Enter your second Number: ");
var sum = parseInt(num1) + parseInt(num2);
alert(sum);
document.write( `Sum of ${num1} and ${num2} is ${sum} `);

// Q#2


// var num1 = prompt("Enter your first Number: ");
// var num2 = prompt("Enter your second Number: ");
// var subtraction = parseInt(num1) - parseInt(num2);
// alert(subtraction);
// document.write( `Subtraction of ${num1} and ${num2} is ${subtraction} `);

// var num1 = prompt("Enter your first Number: ");
// var num2 = prompt("Enter your second Number: ");
// var multiplication = parseInt(num1) * parseInt(num2);
// alert(multiplication);
// document.write( `Multiplication of ${num1} and ${num2} is ${multiplication} `);


// var num1 = prompt("Enter your first Number: ");
// var num2 = prompt("Enter your second Number: ");
// var division = parseInt(num1) / parseInt(num2);
// alert(division);
// document.write( `Division of ${num1} and ${num2} is ${division} `);

// var num1 = prompt("Enter your first Number: ");
// var num2 = prompt("Enter your second Number: ");
// var remainder = parseInt(num1) % parseInt(num2);
// alert(remainder);
// document.write( `Remainder of ${num1} and ${num2} is ${remainder} `);

// Q#3

var variable;
document.write("“Value after variable declaration is: " + variable);
variable = 17;
document.write("“Initial value:" + variable);
variable++;
document.write("Value after increment is" + variable);
variable = variable + 7;
document.write("Value after addition is" + variable);
variable--;
document.write("Value after decrement is:" + variable);
variable = variable % 3;
document.write("The remainder is :" + variable);

// Q#4 

var movieTicket = 600;
var noOfTickets = parseInt(prompt("Please enter a number of tickets you buy:"));
var cost = movieTicket * noOfTickets;
document.write(`Total cost to buy ${noOfTickets} to a movie is ${cost}`); 
