// QUESTION # 1 

var firstName = prompt("Enter your First Name: ");
var secondName = prompt("Enter your Second Name: ");
var fullName = firstName + " " +  secondName;
alert("Hello " + fullName);

// QUESTION # 2

var model = prompt("Enter your favorite model: ");
var len = model.length;
alert(`My favorite phone is: ${model} Lenght of string is: ${len}`);

// QUESTION # 3 

var str = "Pakistani";
var ind = str.indexOf("n");
console.log(`String: ${str} Index of "n": ${ind}`);

// QUESTION # 4 

var lastLetter = "Hello World";
var ind = lastLetter.lastIndexOf("l");
console.log(`String: ${lastLetter} Last index of "n": ${ind}`);

// QUESTION # 5

var str = "Pakistani";
var ind = str.charAt(3);
console.log(`String: ${str} Character at Index 3: ${ind}`);

// QUESTION # 6

var firstName = prompt("Enter your First Name: ");
var secondName = prompt("Enter your Second Name: ");
var fullName = firstName.concat(" " + secondName);
alert("Hello " + fullName);

// QUESTION # 7 

var city = "Hyderabad";
var replaceWord = city.replace("Hyder", "Islam");
console.log(`city ${city} After replacement: ${replaceWord}`);

// QUESTION # 8 

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replaceMessage = message.replaceAll("and", "&");
console.log(replaceMessage);

// QUESTION # 9 

var str = "472";
console.log("Value: " + str + " Type: " + typeof str);
var num = parseInt(str);
console.log("Value: " + num + " Type: " + typeof num);

// QUESTION # 10 

var input = prompt("Enter your word");
var uppercaseWord = input.toUpperCase();
console.log(`User Input: ${input}. Upper Case: ${uppercaseWord}`);

