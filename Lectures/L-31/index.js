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