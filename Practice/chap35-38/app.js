// CHAP SET 35 - 38 
// QUESTION # 1 

function tellTime(){
    var date = new Date();
    console.log(date)
}
tellTime();

// QUESTION # 2 

function greet(firstName, lastName){
    alert("Hello " + firstName + " " + lastName);
}
// var firstName = prompt("Enter your First Name: ");
// var lastName = prompt("Enter your Last Name: ");
// greet(firstName, lastName);

// QUESTION # 3 

function add(num1, num2){
    return num1 + num2;
}
// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// alert(add(num1, num2));

// QUESTION # 4 

function calculator(num1, numb2, operator){
    if(operator === "+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;
    }
    else if(operator === "*"){
        return num1 * num2;
    }
    else if(operator === "/"){
        return num1 / num2;
    }
    else if(operator === "%"){
        return num1 % num2;
    }
    else{
        return "Invalid Operation"
    }
}
// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// var operator = prompt("Enter Operator: ");
// alert(calculator(num1, num2, operator));

// QUESTION # 5 

function squares(num){
    return num * num;
}
// var num = +prompt("Enter a Number: ")
// alert(squares(num));

// QUESTION # 6 

function calculateFactorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) { 
        fact *= i;  
    }
    return fact;
}
// var num = +prompt("Enter a Number: ");
// alert(calculateFactorial(num));

// QUESTION # 7 

function counting(start, end){
    for(var i = start; i <= end; i++){
        console.log(i);
    }
}
// var start = +prompt("Enter the digit you want to start the Counting");
// var end = +prompt("Enter the digit you want to end the Counting");
// counting(start, end);

// QUESTION # 8 

function  calculateHypotenuse(base, perpendicular){
    function calculateSquare() {
        var square = ( base * base ) + ( perpendicular * perpendicular );
        var hypotenuse = square * square;
        console.log(hypotenuse)
    }
    calculateSquare()
}
// var base = +prompt("Enter the value of Base: ");
// var perpendicular = +prompt("Enter the value of Perpendicular: ");
// calculateHypotenuse(base, perpendicular);

// QUESTION # 9 

function areaOfRectangle(width, height){
    return area = width * height;
}
console.log(areaOfRectangle(12, 12));
