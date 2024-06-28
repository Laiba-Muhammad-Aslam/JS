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

// QUESTION # 5

var multiplicationTable = +prompt("Enter a number: ");
if(isNaN(multiplicationTable)){
    for(var i = 1; i<=10; i++){
        console.log(`5 * ${i} = ` + 5 * i);
    }
}else{
    for(var i = 1; i<=10; i++){
        console.log(`${multiplicationTable} * ${i} = `+multiplicationTable * i);
    }
}

// QUESTION # 6

var subject1 = prompt("Enter first subject Name: ");
var obtainedMarks1 = +prompt("Enter first subject Marks: ");
var subject2 = prompt("Enter second subject Name: ");
var obtainedMarks2 = +prompt("Enter second subject Marks: ");
var subject3 = prompt("Enter third subject Name: ");
var obtainedMarks3 = +prompt("Enter third subject Marks: ");

var totalMarks = 100;

var percentage1 = (obtainedMarks1 * 100) / totalMarks;
var percentage2 = (obtainedMarks2 * 100) / totalMarks;
var percentage3 = (obtainedMarks3 * 100) / totalMarks;

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = Math.ceil(((percentage1 + percentage2 + percentage3) * 100) / 300);

var totalObtained = document.getElementById("totalobtained");
totalObtained.innerText = totalObtainedMarks;
var totalpercentage = document.getElementById("totalpercentage");
totalpercentage.innerText = totalPercentage + "%";

var sub1 = document.getElementById("sub1");
sub1.innerText = subject1;

var sub2 = document.getElementById("sub2");
sub2.innerText = subject2;

var sub3 = document.getElementById("sub3");
sub3.innerText = subject3;

var marks1 = document.getElementById("marks1");
marks1.innerText = obtainedMarks1;
var marks2 = document.getElementById("marks2");
marks2.innerText = obtainedMarks2;
var marks3 = document.getElementById("marks3");
marks3.innerText = obtainedMarks3;

var p1 = document.getElementById("p1");
p1.innerText = percentage1 + "%";
var p2 = document.getElementById("p2");
p2.innerText = percentage2 + "%";
var p3 = document.getElementById("p3");
p3.innerText = percentage3 + "%";