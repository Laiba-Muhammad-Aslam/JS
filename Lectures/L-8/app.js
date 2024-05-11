var students = ["Ahmed", "Ali", "Zain"];

students.splice(1,1);
console.log(students);

var students = ["Ahmed", "Ali", "Zain"];

students.splice(1,2); //Remove 2 elements
console.log(students);

var students = ["Ahmed", "Ali", "Zain"];

students.splice(1,3); //Remove 2 elements
console.log(students);

var students = ["Ahmed", "Ali", "Zain"];

students.splice(1,1, "Saud"); // Remove Ali and replace it with Saud
console.log(students);

var students = ["Ahmed", "Ali", "Zain"];

students.splice(1,1, "Saud" , "Haris"); //Remove Ali and replace it with Saud and Haris.
console.log(students);

var students = ["Ahmed", "Ali", "Zain"];

students.splice(1,0, "Hassan" , "Raza"); // 0 refers nothing to be deleted and insert the following values
console.log(students);

// SLICE 

var students = ["Ahmed", "Ali", "Zain", "Hassan"];

console.log(students.slice(0,2));
console.log(students.slice(2));
    //  OR 
console.log(students.slice(2,4));
console.log(students);

var school = "UBIT";
console.log(school.slice(1,1));

var school = "UBIT";
console.log(school.slice(1,2));

var school = "UBIT Karachi";
console.log(school.slice(1));

// FOR LOOPS 

for(var i =0; i<5; i++){
    console.log(i);
}
console.log(i);

for(var i =0; i<2; i++){
    console.log(i);
    break
}
console.log(i);
