var str = "UBIT Karachi";
console.log(str.length);

var str = "UBIT Karachi";
console.log(str.toUpperCase());

var str = "UBIT Karachi";
console.log(str.toLowerCase());

var str = "UBIT Karachi";
console.log(str.slice(0,4));

var str = "UBIT Karachi";
console.log(str.indexOf("Karachi"));

var str = "UBIT Karachi";
console.log(str.lastIndexOf("a"));

var str = "UBIT Karachi";
console.log(str.lastIndexOf("x"));

var str = "UBIT Karachi";
console.log(str.indexOf("x"));

var names = ["Laiba", "Maha", "Muniza"];
console.log(names.indexOf("Muniza"));

var names = ["Laiba", "Maha", "Muniza"];
console.log(names.lastIndexOf("Muniza"));

var str = "UBIT Karachi";
console.log(str.slice(0,1));

// OR 

var str = "UBIT Karachi";
console.log(str.charAt("U"));
console.log(str.charAt(2));

// OR 

var str = "UBIT Karachi";
console.log(str[0]);


var text = "This paragraph is about World War II";
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {     
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
        console.log(text);
   }
}

// var str = "UBIT Karachi avvv Karachi hello Karachi";
// console.log(str.replace("Karachi", "UOK"));
// console.log(str.replaceAll("Karachi", "UOK"));


var str = "Karachi UBIT UBIT Sas UBIT ada UBIT";
var word = "UBIT";
var rep = "Karachi";
var count = 0;

for (var i = 0; i < str.length; i++){
    var find = str.slice(i, i + word.length);
    if (find == word){
        count++;
        console.log(count);
        console.log(find);
        if(count == 3){
            str = str.slice(0, i) + rep + str.slice(i + word.length);
        }
    }
}
console.log(str);

var number = Math.round(221.2);
console.log(number);
var number = Math.round(221.7);
console.log(number);

var number = Math.ceil(221.7);
console.log(number);

var number = Math.ceil(221.0);
console.log(number);

var number = Math.ceil(221.01);
console.log(number);

var number = Math.floor(27.1);
console.log(number);

var number = Math.floor(27.9);
console.log(number);

var ranNumber = Math.random();
console.log(ranNumber);

var ranNumber = Math.random() * 100;
console.log(ranNumber);

// Generate Numbers between 1 till 6 

// DIICE 

var ranNumber = Math.ceil(Math.random() * 6);
console.log(ranNumber);

// Generate Numbers 1 & 2 

var ranNumber = Math.ceil(Math.random() * 2);
console.log(ranNumber);


var number = parseInt("23");
console.log(number);

var number = parseInt("23.4");
console.log(number);

var number = +"30.4";
console.log(number);

var number = parseFloat ("23.4");
console.log(number);

var number = Number("87.4");
console.log(number);

// Number to String 

var num = 2345;
var numToString = num.toString();
console.log(numToString);

var numToString = (323).toString()
console.log(numToString);


// CONTROLLING THE LENGTH OF STRING 

var num = 10.63773688373;
var newNum = num.toFixed();
console.log(newNum);

var num = 10.63773688373;
var newNum = num.toFixed(3);
console.log(newNum);

var num = 10.732323;
var newNum = num.toFixed(10);
console.log(newNum);