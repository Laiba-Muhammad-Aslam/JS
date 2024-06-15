// ARRAYS AND LOOP

// QUESTION # 1 

var multiarr = [[], [], []];

// QUESTION # 2

multiarr[0][0] = 0;
multiarr[0][1] = 1;
multiarr[0][2] = 2;
multiarr[0][3] = 3;
multiarr[1][0] = 1;
multiarr[1][1] = 0;
multiarr[1][2] = 1;
multiarr[1][3] = 2;
multiarr[2][0] = 2;
multiarr[2][1] = 1;
multiarr[2][2] = 0;
multiarr[2][3] = 1;

for(var i = 0; i< multiarr.length; i++){
    console.log(multiarr[i]);
}

// QUESTION # 3 

for(var i=1; i<=10; i++){
    console.log(i);
}

// QUESTION # 4 

var table = +prompt("Enter a number to show its multiplication table: ");
var tableLength = +prompt("Enter length of multiplication table: ");
console.log(`Multiplication table of ${table} Length ${tableLength}`);

for(var i=1; i<=tableLength; i++){
    console.log(`${table} x ${i} = ` + table * i);
}

// QUESTION # 5 

fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(var i = 0; i<fruits.length; i++){
    // console.log(fruits[i]);
    console.log(`Element at index ${i} is ${fruits[i]}`);
}

// QUESTION # 6 

// PART A 

// COUNTING 

document.write("COUNTING <br>")
for(var i =1; i<=15; i++){
    console.log(i);
    document.write(i + " ");
}

// PART B 

// REVERSE COUNTING 

document.write("<br><br> REVERSE COUNTING <br>")
for(var i =10; i>=1; i--){
    console.log(i);
    document.write(i + " ");
}

// PART C 

// EVEN NUMBER 

console.log("Even Number");
document.write("<br><br> Even Number <br>");
for(var i = 0; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
        document.write(i + " ");
    }
}

// PART D 

// ODD NUMBER 

document.write("<br><br> Odd Number <br>");
for(var i = 0; i<=20; i++){
    if(i % 2 != 0){
        console.log(i);
        document.write(i + " ");
    }
}

// PART E 

// Series

document.write("<br><br> SERIES <br>");
for(var i = 2; i<=20; i++){
    if(i % 2 === 0){
        document.write(i +"K" + " ");
    }
}

// QUESTION # 7 

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery. What do you want to order sir/maam?");
order = order.toLocaleLowerCase();

if(items.indexOf(order) === -1){
    alert(`We are sorry. ${order} is not availaible in our bakery`)
}else{
    alert(`${order} is availaible at index ${items.indexOf(order)} in our bakery`);
}

// QUESTION # 10 

// for(var i = 5; i<=100; i+5){
//     console.log(5 * i);
// }