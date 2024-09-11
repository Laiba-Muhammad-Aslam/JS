// let obj = {
//     name: "Laiba",
//     school: {
//         name: "XYZ"
//     }
// };

// let obj1 = obj;
// let obj2 = {...obj1}; // Shallow copy
// obj2.name = "Maha";
// HERE WHEN WE DO THIS IT WILL CHANGE IN ALL OBJECT BECAUSE THEY SHARE THE SAME REFRENCE SO IN THIS CASE WE NEED TO CREATE A DEEP COPY INSTEAD OF SHALLOW COPY 
// obj2.school.name = "ABC"

// DEEP COPY 

// INSTEAD OF DOING THIS 

// let obj2 = {
//     ...obj1,
//     school: {...obj.school}
// };
// obj2.school.name = "ABC";
// console.log(obj, obj1, obj2);

// DO THIS (BEST WAY IN JS TO CREATE A DEEP COPY)

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.school.name = "ABC";
// console.log(obj, obj1, obj2);

// ENHANCED OBJECT LITERALS 

let student = "Maaz";
let school = "SM Public";

// INSTEAD OF DOING THIS 
// let obj = {
//     student: student,
//     school: school
// }

// let obj = {
//     student,
//     school
// }
// console.log(obj);


// OPTIONAL CHAINING 

let obj = {
    name: "Laiba",
    school: {
        name: "XYZ"
    }
};
// JAHAN JAHAN LAGTA HO KY WO CHHEZ NHI HO WAHAN WAHAN ? USE KRLO 
// console.log(obj.school.detail.name); //THIS WILL THROW AN ERROR NOW YPU CAN DO THIS
console.log(obj?.school?.detail?.name);
console.log(obj.name);

// WE CAN USE OPTIONAL CHAINING ON ARRAYS TOO. 
// console.log(obj?.schools?.[1]?.name);

let dragBtn = document.getElementById("dragBtn");

function dragStart(event){
    console.log(event);
}
dragBtn.addEventListener("dragstart", dragStart);


// CALLBACK 
// CALLBACK IS USED FOR ASYNCHRONOUS 

function abc(cb){
    setTimeout(function(){
        console.log("Done");
        cb();
    }, 5000);
}

function myCallBack(){
    console.log("ABC Free hogaya..");
}
abc(myCallBack);

// set time out is also a call back function.


// ARRAY 

let cities = ["Karachi", "Lahore", "Islamabad"];

// for Each returns nothing it always returns undefined 
cities.forEach(function(elem, ind, arr){
    console.log(elem, ind, arr);
})

// array .map is also a call back function 
// you can transform an arrray through map function 
// map returns an array 
// map iteration plus new array bana raha hai. 

// cities.map(function(elem, ind){
//     console.log(elem, ind);
// })

// let result = cities.map(function(elem, ind){
//     return `${elem}, Pakistan`;
// });
// console.log(result);


// FILTER

// return true py same array mily ga 

// let result = cities.filter(function(elem, ind){
//     return true;
// });
// console.log(result);


// return false py [] mily ga. 

// let result = cities.filter(function(elem, ind){
//     return true;
// });
// console.log(result);

let result = cities.filter(function(elem){
    return elem === "Lahore";
});
console.log(result);

let newarr = [{name: "Karachi", population: 1000}, {name: "Lahore", population: 500}];

let populationResult = newarr.filter(function(elem, i){
    return elem.population > 500;
});
console.log(populationResult);

// ASSIGNMENT 

// A Login page:
// Dashboard: Displays the number of students we have and their details.
// Students page: Allows students to add themselves.
// Attendance page: Includes an input field where, upon entering a student's roll number, their attendance will be marked.
// A page to view the attendance, showing all present students.
// Add a feature to extract data from an Excel sheet.
