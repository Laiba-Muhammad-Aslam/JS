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
var num = +prompt("Enter a Number: ")
alert(squares(num));