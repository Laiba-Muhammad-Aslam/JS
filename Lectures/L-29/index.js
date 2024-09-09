// Var is function scope 

var a = "Laiba";
console.log(a);

// let and const are block scope 

if(true){
    let b = 9;
}
// Cannot access outside the block 
// console.log(b); 


// THIS IS POSSIBLE 

const arr = [];
arr[0] = "XXYZ";
console.log(arr);


const obj = {};
obj.name = "Laiba";
console.log(obj);

// THIS IS NOT POSSIBLE 

// const ob = {};
// ob = {name: "Laiba"};
// console.log(ob);


// HERE COMES THE HOISTING. var hoist hota hai jabky const and let hoist nhi hoty.

// console.log(myName); // Undefined
// var myName = "Laiba"; 


// console.log(myName);
// let myName = "Laiba";


// console.log(myName);
// const myName = "Laiba";


// for(var i = 0; i< 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }

// IN JS Fetch and Promises have higher  priority than setTimeout, setInterval 

// FOR LOOP RUNS FIRST AS IT IS A SYNCHRONOUS ANS SET TIME IS ASYNCHRONOUS SO FOR RUNS FIRST AND THEN SET TIME OUT RUNS
for(var i = 0; i< 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}


for(let i = 0; i< 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

// CLOUSURE 

function abc(){
    // abc have these things
    // window 
    // abc scope 
    var a = 2;

    function xyz(){
    // xyz have these things
    // window 
    // abc scope
    // xyz scope 

       function foo(){
        // foo have these things
        // window 
        // abc scope
        // xyz scope
        // foo scope 
       }

    }
    xyz();
}
abc();

// DESTRUCTURING 

// let student = {
//     name: "Laiba",
//     email: "laiba@google.com",
//     classDetails:{
//         time: "9-11"
//     }
// }

// Traditional way 
// console.log(student.name);
// console.log(student.email);

// MODERN WAY TO DO THE SAME THING 
// let {name the things you want to retrieve} = student;

// let {classDetails, name, email} = student;
// console.log(name);
// console.log(email); 
// console.log(classDetails); 
// By doing this your are not repeating the "student." again and again 

// You can also do destructuring to a classDetails object 
// let {time} = classDetails;
// console.log(time);

// If name conflicts comes then we will do this we call it (ALIAS)

// let time = "9";
// let {time: classTime} = classDetails;
// console.log(classTime)

// Default value time uper na ho tou You can pass a default value 

// let {time = "9-11"} = classDetails;

// WE CAN ACHIEVE THE SAME THING BY DEEP PROPERTY 

// let {time} = classDetails;
// console.log(time);

// BY DEEP PROPERTY 

// let {email, name, classDetails: {time}} = student;
// console.log(email, name, time);

// DYNAMIC NAME PROPERTY 

let student = {
    name: "Laiba",
    email: "laiba@google.com"
}

let search = "email";
let {[search]: iden} = student;
console.log(iden);

// ARRAY DESTRUCTURING 

let arr1 = ["Ahmed", "Saad", 900];
let [student1, student2, student3] = arr1;
console.log(student1, student2, student3);

// DEFAULT PARAMETER

function foo(a = "Not availaible"){
    console.log(a);
}
foo();

// function foo(a = "Not availaible"){
//     console.log(a);
// }
// foo("Hello");

// REST PARAMETER

// First ko chor ky sary array mai ajayen gy 

function foo(a = "Not availaible", ...rest){
    console.log(rest);
}
foo("Laiba", "Hoorain", "Maaz", "Saad", "Yusha", "Yumna");

// SPREAD OPERATOR (Used to make a copy of an array or an object)

let arr2 = ["Saad", "Noman"];
let arr3 = ["Saad", "Noman"];
let merge = [...arr2, ...arr3];
console.log(merge);

// on Object

let stu = {
    name: "Laiba",
    email: "laiba@google.com"
}

let school = {
    schoolName: "XYZ"
}

console.log({...stu, ...school});