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
console.log(areaOfTriangle(5, 12, 13));