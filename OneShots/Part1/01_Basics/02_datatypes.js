"use strict"; // treat all JS code as a newer version.

let name = "Laiba";
let age = 19;
let isLogged = true;

// OBJECT 

console.log(typeof "Laiba");
console.log(typeof age);
console.log(typeof null);
console.log(typeof undefined);

// DATATYPE CONVERSION

let score = 33;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

let isLoggedin = true;

let booleanIsLoggeedIn = Boolean(isLoggedin);
// console.log(booleanIsLoggeedIn);

// Conversion in Boolean 

// 1 => true ; 0=> false 
// '' => false
// "laiba" => true

// CONVERSION INTO STRING 

let someNumber = "33";
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// OPERATIONS 

let value = 3;
let negValue = -value;
// console.log(negValue);

// CONVERSIONS 

// console.log( "2" > 1);
// console.log( "02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);

// Premtive data type 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
const bigNumber = 34674894940303033763736n;

// Refrence Type (Non Premptive)

// Array, Objects, Functions 

const heros = ["Shaktiman", "Spiderman"];
let myObj = {
    myName: "Laiba",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
}
/* JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. */


// +++++++++++++++++++++++++++++++++


// STACK AND HEAP 

// Stack => Premptive
// Heap => Non Premptive

let myYoutubeChannel = "Laiba Khan";

let anotherChannel = myYoutubeChannel;
anotherChannel = "Cooking with me";

console.log(myYoutubeChannel);
console.log(anotherChannel);

let userOne = {
    email: "user@google.com",
    upi: "userybl78"
}

let userTwo = userOne;
userTwo.email = "laiba@google.com";

console.log(userOne);
console.log(userTwo);

// STRING 

const myName = "laiba"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('laiba-lk-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   laiba    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://laiba.com/laiba%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));