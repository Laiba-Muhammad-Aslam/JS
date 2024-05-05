var userName = prompt("Enter your Name: ");

if(userName){
    console.log("User Name", userName);
}else{
    alert("Please Enter your Name")
}

var skillsName = prompt("Enter a skill Name: ")

if(skillsName == "HTML"){
    console.log("Salary: 10000");
}else if(skillsName == "CSS"){
    console.log("Salary: 20000");
}else if(skillsName == "JS"){
    console.log("Salary: 30000");
}
else{
    console.log("Salary: 0");
}

var skills = prompt("Enter your skills: ");
var exp = +prompt("Enter your exp: ");
var city = prompt("Enter your city: ");

if((skills === "javascript" || exp > 2) && city === "karachi"){
    console.log("Hired");
}

// ARRAY 

var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
console.log(cities[0]);
console.log(cities.length);

var studentNames = ["Laiba", "Tahira", "Maheen", "Maaz"];
studentNames[4] = "Laraib";
console.log(studentNames[5]); //undefined

// var arr;
// console.log(arr[5]); //error


var studentNames = ["Laiba", "Tahira", "Maheen", "Maaz"];
studentNames = "Zaviyar";
console.log(studentNames[5]); 

// ARRAY METHODS

studentNames.pop();
studentNames.pop();
console.log(studentNames);

studentNames.push("Meera", "Minha", "Malaika");
console.log(studentNames);

studentNames.shift();
console.log(studentNames);
studentNames.shift();
console.log(studentNames);
skillsName.unshift();
console.log(studentNames);