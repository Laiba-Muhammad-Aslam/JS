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
var firstName = prompt("Enter your First Name: ");
var lastName = prompt("Enter your Last Name: ");
greet(firstName, lastName);