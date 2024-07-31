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