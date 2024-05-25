// QUESTION # 1

var students = [];

// QUESTION # 2

var students = {};

// QUESTION # 3

var stringArray = [];
stringArray[0] = "Laiba";
stringArray[1] = "Maaz";
stringArray[2] = "Yush";

// QUESTION # 4

var numbarArray = [];
numbarArray[0] = 17;
numbarArray[2] = 177;
numbarArray[3] = 19;
numbarArray[4] = 10;

// QUESTION # 5

var booleanArray = [];
booleanArray[0] = true;
booleanArray[1] = false;
booleanArray[2] = false;
booleanArray[3] = true;

// QUESTION # 6 

var arr = [];
arr[0] = 100;
arr[1] = "Laiba Aslam";
arr[2] = true;
arr[3] = 4500000;

// QUESTION # 7 

var qualifications = [];
var qualification;
qualifications[0] = "SSC";
qualifications[1] = "HSC";
qualifications[2] = "BSC";
qualifications[3] = "BS";
qualifications[4] = "BCOM";
qualifications[5] = "MS";
qualifications[6] = "M.Phil";
qualifications[7] = "PhD";

for (qualification in qualifications){
    console.log(qualifications[qualification]);
}

// QUESTION # 8 

var students = ["Laiba", "Yumna", "Maaz", "Huzaifa"];
var studentMarks = [490, 400, 350, 370];
var totalMarks = 500;

for (i=0; i < studentMarks.length; i++){
    var percenteage = (studentMarks[i] * 100) / 500;
    console.log(`Score of ${students[i]} is ${studentMarks[i]}. Percentage: ${percenteage}`);
}


// QUESTION # 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.splice(2,2);
console.log(selectedCities);

// QUESTION # 12

var arr = ["This", "is", "my", "cat"];
console.log(arr.join(" "));

// QUESTION # 13 

console.log("Access the values in the order in which they were stored. (FIFO-First In First Out) ");

var obj = ["keyboard", "mouse", "printer", "monitor"];

for (var i = 0; i < obj.length; i++){
    console.log("Out: " + obj[i]);
}

// QUESTION # 14 

console.log("Access the values in reverse order. Last In First Out");

var obj = ["keyboard", "mouse", "printer", "monitor"];

for (var i = obj.length - 1; i >= 0 ; i--){
    console.log("Out: " + obj[i]);
}