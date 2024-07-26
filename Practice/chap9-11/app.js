// USER INPUT & CONDITIONAL STATEMENT

// QUESTION # 1

var askUser = prompt("Enter city name: ");
if(askUser === "Karachi"){
    alert("Welcome to city of lights");
}

// QUESTION # 2

var gender = prompt("Enter your Gender");
if(gender === "Male"){
    alert("Good Morning Sir");
}else if(gender === "Female"){
    alert("Good Morning Ma’am");
}
else{
    alert("Good Morning")
}

// QUESTION # 3

var signalColor = prompt("Enter Signal Color");
if(signalColor === "Red"){
    alert("Must Stop");
}else if(signalColor === "Yellow"){
    alert("Ready to move");
}else if(signalColor === "Green"){
    alert("Move now")
}else{
    alert("Invalid Siganl color")
}

// QUESTION # 4

var fuel = +prompt("Enter fuel value in litres");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}

// QUESTION # 5 

// PART A 

var a = 4;
if(++a === 5){
    alert("Given condition for variable a is true");
}

// PART B

var b = 82;
if(b++ === 83){
    alert("Given condition for variable b is true");
}

// PART C

var c = 12;
if(c++ === 13){
    alert("Given condition for variable c is true");
}

if(c === 13){
    alert("Condition 2 is true");
}

if(++c < 14){
    alert("Condition 3 is true");
}

if(c === 14){
    alert("Condition 4 is true");
}

// PART D 

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// PART E 

if(true){
    alert("True");
}
if(false){
    alert("False");
}

// PART F 

if("car" < "cat"){
    alert("car is smaller than cat");
}

// QUESTION # 6 

var subj1 = +prompt("Enter marks of subject 1");
var subj2 = +prompt("Enter marks of subject 2");
var subj3 = +prompt("Enter marks of subject 3");
var totalMarks = +prompt("Enter total marks of these subjects");
var percentage = ((subj1 + subj2 + subj3) * 100) / totalMarks;
var grade;
var remarks;

if(percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}else if(percentage >= 70){
    grade = "A";
    remarks = "Good";
}else if(percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}else if(percentage < 60){
    grade = "Fail";
    remarks = "Sorry";
}else{
    console.log("Invalid Input....")
}

// QUESTION # 8

var num = +prompt("Enter a number: ");
var divisible = num%3;
if(divisible === 0){
    alert("Number is divisible by 3")
}else{
    alert("Number is not divisible by 3");
}
