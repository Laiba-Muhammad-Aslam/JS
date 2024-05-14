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


// Palindrome 

// MY SOLUTION 

// var word = prompt("Enter your word: ").toLowerCase();

// var palindrome = word.split("").reverse().join("");

// if(word == palindrome){
//     alert("Yes it is a Palindrome");
// }else{
//     alert("No it is not a Palindrome");
// }

// SOLUTION 

// var word = prompt("Enter your word: ").toLowerCase();
// var reverse = "";

// for (var i = word.length -1; i>=0; i--){
//     // console.log(word[i]);
//     reverse+= word[i];
//     // console.log(reverse);
// }
// if (reverse === word){
//     alert("Yes it is a Palindrome");
// }else{
//     alert("No it is not a Palindrome");
// }

// MIN MAX IN ARRAY 

// var arr = [11, 23, 34, 35, 12, 77, 10];
// var min = arr[0];

// for (var i = 0; i < arr.length; i++){
//     if (min > arr[i]){
//         min = arr[i]
//     }
// }

// console.log(`min ${min}`);

var arr = [11, 23, 34, 35, 12, 77, 10];
var max = arr[0];

for (var i = 0; i < arr.length; i++){
    if (max < arr[i]){
        max = arr[i]
    }
}

console.log(`max ${max}`);
