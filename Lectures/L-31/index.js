let students = [
    {
        name: "Laiba",
        age: 20,
        fee: 1025
    },
    {
        name: "Maaz",
        age: 20,
        fee: 800
    },
    {
        name: "Zoha",
        age: 21,
        fee: 789
    }
];

// .find is also a callback function agar aik find krna ho tou find or agar aik value ky kafi sary chahiye hon tou filter

// let result = students.find(function(v){
//     return v.age === 20;
// });
// console.log(result);

// FILTER 

// let result = students.filter(function(v){
//     return v.age === 20;
// });
// console.log(result);


// FIND INDEX 

// let result = students.findIndex(function(v){
//     return v.age === 20;
// });
// console.log(result);

// SOME (check if it exist in an array or not)

// let result = students.some(function(v){
//     return v.age === 20;
// });
// console.log(result);

// REDUCE METHOD 

// reduce take 4 values previous value (a), current value (v), current index (i) and full array
// reduce takes callback function + default value  
// first time the value of a is first value of object after that iteration it will add in a 

// let result = students.reduce(function(a, v, i){
//     return a + v.fee;
// }, 0);
// console.log("Result " , result);

// ARROW FUNCTION 

// arrow function hamesha function expression hota hai 

// let myFunction = (a, b) => a * b;
// let myFunction = a => a;
// console.log(myFunction(6));
// arrow function ka khud ka this nhi hota yeh parent ko dekta hai.

let abc = (a,b) => {
    return a * b;
}

console.log(abc(6,8));

let obj = {
    name: "Laiba",
    age: 19,
    getName: ()=>{
        console.log(this);
    }
}
obj.getName();


function ab(){
    console.log(arguments);
}
ab(6,8);

// there is no arguments like feature in arrow function 

// let ab = () => {
//     console.log(arguments);
// }
// ab(6,8);

// const ob = {
//     name: "Zaviyar",
//     age: 9000,
//     print: function(){
//         console.log(this);
//         const print2 = () => {
//             console.log(this);
//         }
//         print2();
//     }
// }
// ob.print();


const ob = {
    name: "Zaviyar",
    age: 9000,
    print: function(){
        console.log(this);
        function print2() {
            console.log(this);
        }
        print2();
    }
}
ob.print();

// EXPONENT 

console.log(2 ** 6);
Math.pow(2, 6);
console.log(10_00_00_00_00);