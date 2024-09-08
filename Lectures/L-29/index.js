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