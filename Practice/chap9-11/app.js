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