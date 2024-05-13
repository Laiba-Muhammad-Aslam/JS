// QUESTION # 2

// var int1 = +prompt("Enter your first number: ");
// var int2 = +prompt("Enter your second number: ");

// if(int1 > int2){
//     // alert(int1 + "is greater");
//     console.log(int1 + "is greater");
// }
// else if(int1 === int2){
//     // alert(`${int1} and ${int2} are equal`);
//     console.log(`${int1} and ${int2} are equal`);
// }else{
//     // alert(`${int2} is greater`);
//     console.log(`${int2} is greater`);
// }


// QUESTION # 3

// var num = +prompt("Enter your number: ");

// if (num > 0){
//     console.log("Number is positive");
// }else if (num == 0){
//     console.log("Number is equal to Zero");
// }else{
//     console.log("Number is negative");
// }


// QUESTION # 5

var correctPassword = "ravi476";
var password = prompt("Enter your password: ");

if (password == ""){
    // console.log("Please enter your password");
    alert("Please enter your password");
}else if (password == correctPassword){
    // console.log("“Correct! The password you entered matches the original password");
    alert("“Correct! The password you entered matches the original password");
}else {
    // console.log("Incorrect password");
    alert("Incorrect password");
}