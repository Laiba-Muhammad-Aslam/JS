// QUESTION # 1

function power(a, b){
    return a ** b;
}
// console.log(power(5, 2));
// console.log(power(3, 2));

// QUESTION # 2

function leapYear(year){
    let leap = year % 4;
    if(leap === 0){
        console.log(`Year ${year} is a leap Year`);
    }else{
        console.log(`Year ${year} is not a leap Year`);
    }
}
// leapYear(2012);
// leapYear(1997);
// leapYear(2016);
// leapYear(2020);
// leapYear(2003);
// leapYear(2000);
// leapYear(2004);

// QUESTION # 3 

function areaOfTriangle(a,b,c){
    // calculate S 
    let s = (a + b + c) / 2;

    // calculate area of Triangle 
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return `Area of Triangle is ${area}cm2`;
}
// console.log(areaOfTriangle(5, 12, 13));

// QUESTION # 4 

var avg;
var studentAvg;

function average(subj1, subj2, subj3){
    avg = (subj1 + subj2 + subj3) / 3; 
    return avg;  
}

function percentage(averageMarks, totalMarks){
    let percentage = (averageMarks / totalMarks) * 100;
    return percentage;
}

function studentResult(subj1, subj2, subj3){
    let avgMarks = average(subj1, subj2, subj3); 
    let percent = percentage(avgMarks, 100).toFixed(2); 
    return `Average is ${avgMarks} and your percentage is ${percent}%`;
}

// console.log(studentResult(78, 98, 90));

// QUESTION # 5 

function indexOf(char){
    let str = "You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now."
    for(let i = 0; i <= str.length; i++){
        if(char === str[i]){
            console.log(`Index of ${char} is ${i}`);
            return;
        }
    }
    console.log(`Character ${char} not found in the string`);
}
indexOf("Y");
indexOf("h");
indexOf("f");
