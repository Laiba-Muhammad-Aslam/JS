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