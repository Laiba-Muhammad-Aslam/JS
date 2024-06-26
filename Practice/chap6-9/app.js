// MATH EXPRESSIONS

// QUESTION # 1

var a = 10;
console.log("Result");
console.log("The value of a is: " + a);

++a;
console.log(`The value of ++a is: ${a}`);
console.log(`Now the value of a is: ${a}`);

a++;
console.log(`The value of a++ is: ${a}`);
console.log(`Now the value of a is: ${a}`);

--a;
console.log(`The value of --a is: ${a}`);
console.log(`Now the value of a is: ${a}`);

a--;
console.log(`The value of a-- is: ${a}`);
console.log(`Now the value of a is: ${a}`);

// QUESTION # 2

var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
            //  1 - 0 + 1 + 1 = 3
console.log(result);

// QUESTION # 3

var userName = prompt("Enter your Name: ");
alert(`Hello ${userName}`);
