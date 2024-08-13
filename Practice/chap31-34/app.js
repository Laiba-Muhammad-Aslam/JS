// DATE METHOD

// QUESTION # 1

var date = new Date();
console.log(date);

// QUESTION # 2

// var date = new Date();
// console.log(date.getMonth());

switch(new Date().getMonth()){
    case 0:
        month = "Jan";
        console.log(month);
        break;
    case 1:
        month = "Feb";
        console.log(month);
        break;
    case 2:
        month = "March";
        console.log(month);
        break;
    case 3:
        month = "April";
        console.log(month);
        break;
    case 4:
        month = "May";
        console.log(month);
        break;
    case 5:
        month = "June";
        console.log(month);
        break;
    case 6:
        month = "July";
        console.log(month);
        break;
    case 7:
        month = "August";
        console.log(month);
        break;
    case 8:
        month = "September";
        console.log(month);
        break;
    case 9:
        month = "Oct";
        break;
    case 10:
        month = "Nov";
        break;
    case 11:
        month = "Dec";
        break;
}

// QUESTION # 3 

// var date = new Date();
var day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        console.log("Today is " + day.substring(0,3));
        break;
    case 1:
        day = "Monday";
        console.log("Today is " + day.substring(0,3));
        break;
    case 2:
        day = "Tuesday";
        console.log("Today is " + day.substring(0,3));
        break;
    case 3:
        day = "Wednesday";
        console.log("Today is " + day.substring(0,3));
        break;
    case 4:
        day = "Thursday";
        console.log("Today is " + day.substring(0,3));
        break;
    case 5:
        day = "Friday";
        console.log("Today is " + day.substring(0,3));
        break;
    case 6:
        day = "Saturday";
        console.log("Today is " + day.substring(0,3));
        break;
}

// QUESTION # 4 

var day = new Date().getDay();
// console.log(day)

if(day === 0 | day === 6){
    console.log("It's a Fun day...")
}

// QUESTION # 5 

var date = new Date().getDate();
console.log(date);

if(date > 0 && date < 16){
    console.log("First fifteen days of the month");
}else if(date >= 16 && date <=31){
    console.log("Last fisteen days of the month")
}


// var date = new Date().getHours();
// console.log(date);

// QUESTION # 6 

var now = new Date();
console.log("Current Date: " + now);
var epoch = new Date('1970-01-01T00:00:00Z');
var differenceInMilliseconds = now - epoch;
console.log("Elapsed milliseconds since January 1, 1970: " + differenceInMilliseconds);
var minutesSinceEpoch = Math.floor(differenceInMilliseconds / (1000 * 60));
console.log("Elapsed minutes since January 1, 1970: " + minutesSinceEpoch);

// QUESTION # 7 

var time = new Date().getHours();
// console.log(time);
if(time > 0 && time < 12){
    console.log("It's AM");
}else{
    console.log("It's PM")
}

// QUESTION # 8

var date = new Date(2020, 11, 31);
console.log(date);


// var date = new Date().getMonth;


// QUESTION # 9

var today = new Date().getTime();
// console.log(today)
var ramzanDay1 = new Date("11 March 2024").getTime();
// console.log(ramzanDay1);
var difference = Math.round((today - ramzanDay1) / (1000 * 3600 * 24));
console.log(`${difference} days have passed since Ramadan 2024`);

// QUESTION # 10 

// var today = new Date().getTime();
// var date = new Date("05 December 2015").getTime();
// console.log(today);
// console.log(date);


var referenceDate = new Date("2024-08-13T00:00:00Z");
// var beginningOf2015 = new Date("2015-01-01T00:00:00Z");
var beginningOf2015 = new Date("05 December 2015");

var differenceInMilliseconds = referenceDate - beginningOf2015;

var differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

console.log(`On refrence date Sat Dec 05 2015 ${differenceInSeconds} seconds had passed since beginning of 2015`)