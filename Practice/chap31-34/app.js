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