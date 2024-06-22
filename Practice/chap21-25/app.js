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

// QUESTION # 11 

var input = prompt("Enter your word");
var lowercaseWord = input.toLowerCase();
console.log(`User Input: ${input}. Title Case: ${lowercaseWord}`);

// QUESTION # 12 

var num = 35.36;
var str = num.toString();
var noDecimalStr = str.replace('.', '');
// console.log(noDecimalStr);
// console.log(typeof noDecimalStr);
console.log(`Number: ${num} Result: ${noDecimalStr}`);

// QUESTION # 13

var userInput = prompt("Enter your name: ");

for(var i = 0; i< userInput.length; i++){
    if(userInput[i] === "!" || userInput[i] === "," || userInput[i] === "." || userInput[i] === "@"){
        alert("Please Enter a valid username");
        break;
    }
}

// QUESTION # 14 

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery. What do you want to order sir/maam?");
order = order.toLowerCase();

if(items.indexOf(order) === -1){
    alert(`We are sorry. ${order} is not availaible in our bakery`)
}else{
    alert(`${order} is availaible at index ${items.indexOf(order)} in our bakery`);
}

// QUESTION # 16 

var university = "University of Karachi";
var arr = university.split(" ");
for(var i = 0; i< arr.length; i++){
    for(j= 0; j < arr[i].length; j++){
        console.log(arr[i][j])
    }
} 

// QUESTION # 17 

var userInput = prompt("Enter your word");
var lastChar = userInput.charAt(userInput.length - 1);
console.log(`User input: ${userInput} Last character of input: ${lastChar}`);

// QUESTION # 18 

var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
// console.log((str.match(/the/g)).length);
var count = (str.match(/the/g)).length;
console.log(`Text: ${str} There are ${count} occurrence(s) of word "the"`)