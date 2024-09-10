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