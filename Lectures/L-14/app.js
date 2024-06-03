// Date Object | Functions

var date = new Date(); // Date Object
console.log(date); 

// Changing Date object to String 


var date = new Date(); 
console.log(date.toString()); 

// GET DAY 

var date = new Date(); 
console.log(date.getDay()); // it returns the index no of day Sunday -- 0 

var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
var date = new Date(); 
console.log(days[date.getDay()]);

// GET MONTH 

var date = new Date(); 
console.log(date.getMonth());

var date = new Date(); 
console.log(date.getDate()); 

var date = new Date(); 
console.log(date.getFullYear()); 

var date = new Date(); 
console.log(date.getHours()); 

var date = new Date(); 
console.log(date.getMinutes());

var date = new Date(); 
console.log(date.getSeconds());

var date = new Date(); 
console.log(date.getMilliseconds()); 

var date = new Date(); 
console.log(date.getTime());

// SET A DATE 

var date = new Date("June 30, 2035");
console.log(date);

var date = new Date("17 October 2003");
console.log(date);

var date = new Date("2002 October 26");
console.log(date);

var date = new Date("17-October-2002");
console.log(date);

