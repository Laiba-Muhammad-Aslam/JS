// MATH EXPRESSIONS

document.writeln("<h1>MATH EXPRESSIONS</h1>");

// Q#1

var num1 = prompt("Enter your first Number: ");
var num2 = prompt("Enter your second Number: ");
var sum = parseInt(num1) + parseInt(num2);
alert(sum);
document.write( `<p> Sum of ${num1} and ${num2} is ${sum} </p>`);

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
document.write(`<p> Value after variable declaration is: ${variable} </p>`);
variable = 17;
document.write(`<p> Initial value: ${variable} </p>`);
variable++;
document.write(`<p> Value after increment is ${variable} </p>`);
variable = variable + 7;
document.write(`<p> Value after addition is  ${variable} </p>`);
variable--;
document.write(`<p> Value after decrement is: ${variable} </p>`);
variable = variable % 3;
document.write(`<p> The remainder is : ${variable} </p>`);

// Q#4 

var movieTicket = 600;
var noOfTickets = parseInt(prompt("Please enter a number of tickets you buy:  </p>"));
var cost = movieTicket * noOfTickets;
document.write(`<p> Total cost to buy ${noOfTickets} to a movie is ${cost}  </p>`);

// Q# 5

var tableNumber = parseInt(prompt("Please Enter a number: "));
document.write(`Table of ${tableNumber}`);
document.write(`<p> ${tableNumber} x 1 =  ${tableNumber * 1} </p>`);
document.write(`<p> ${tableNumber} x 2 =  ${tableNumber * 2} </p>`);
document.write(`<p> ${tableNumber} x 3 =  ${tableNumber * 3} </p>`);
document.write(`<p> ${tableNumber} x 4 =  ${tableNumber * 4} </p>`);
document.write(`<p> ${tableNumber} x 5 =  ${tableNumber * 5} </p>`);
document.write(`<p> ${tableNumber} x 6 =  ${tableNumber * 6} </p>`);
document.write(`<p> ${tableNumber} x 7 =  ${tableNumber * 7} </p>`);
document.write(`<p> ${tableNumber} x 8 =  ${tableNumber * 8} </p>`);
document.write(`<p> ${tableNumber} x 9 =  ${tableNumber * 9} </p>`);
document.write(`<p> ${tableNumber} x 10 =  ${tableNumber * 10} </p>`);

// Q#6 

var farenheit = parseInt(prompt("Please Enter a Farenheit temperature: "));
var farenheitToCelsius = (farenheit - 32) * 5/9;
document.write(`<p> ${farenheit} oC is ${farenheitToCelsius} oF  </p>`);

var celcius = parseInt(prompt("Please Enter a Celcius temperature: "));
var celsiusToFarenheit = (celcius * 9/5) + 32;
document.write(`<p> ${celcius} oF is ${celsiusToFarenheit} oC  </p>`);

// Q#7 

var priceOfItem1 = 650;
var priceOfItem2 = 100;
var shippingCharges = 100;
var quantityOfItem1 = parseInt(prompt("Please Enter a quantity of Item 1:"));
var quantityOfItem2 = parseInt(prompt("Please Enter a quantity of Item 2:"));
var totalCost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges;
document.write(`<p> Price of item 1 is ${priceOfItem1}  </p>`);
document.write(`<p> Quantity of item 1 is ${quantityOfItem1}  </p>`);
document.write(`<p> Price of item 2 is ${priceOfItem2}  </p>`);
document.write(`<p> Quantity of item 2 is ${quantityOfItem2}  </p>`);
document.write(`<p> Total cost of your order is ${totalCost}  </p>`);

// Q#8 

document.write("<h1>Mark Sheet</h1>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained * 100) / totalMarks;
document.write(`<p> Total marks: ${totalMarks} </p> `);
document.write(`<p> Marks obtained: ${marksObtained}  </p>`);
document.write(`<p> Percentage: ${percentage} % </p>`);

// Q#9 

document.write("<h1>Currency in PKR</h1>");
var dollar = 10;
var riyal = 25;
var totalCurrency = (dollar * 104.80) + (riyal *  28);
document.write(`<p> Total currency in PKR: ${totalCurrency} </p>`);

// Q#10 

var n = 10;
n += 5;
n *= 10;
n /= 2;
document.writeln(`<p>${n}</p>`);

// Q#11 

var currentYear = 2016;
var birthYear = 1992;
var yourAge =  currentYear - birthYear;
document.writeln(`<p>Current Year: ${currentYear}</p>`);
document.writeln(`<p>Birth Year: ${birthYear}</p>`);
document.writeln(`<p>Your Age is: ${yourAge}</p>`);