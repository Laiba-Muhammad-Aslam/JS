for (var i = 0; i < 5; i++){
    console.log(i);
    if (i == 2){
        break;
    }
}
console.log("Testing!!!");

for (var i = 0; i < 5; i++){
    console.log(i);
    for (var j = 1; j < 5; j++){
        console.log(j);
    }
}

for (var i = 0; i < 5; i++){
    for (var j = 1; j < 5; j++){
        console.log(i, j);
    }
}

// var fullName = "laiba aslam";
// fullName = fullName.slice(0,1).toUpperCase + fullName.slice(1);
// console.log(fullName); 

// MY SOLUTION 

var fullName = "laiba aslam";
var result = "";
var temp = "";

for (var i = 0; i < fullName.length; i++){
    // console.log(fullName[i]);
    if (i === 0){
        result += fullName[i].toUpperCase();
    }else if (fullName[i] === " "){
        temp = fullName[i + 1].toUpperCase();
        // console.log(temp);
        // console.log(result)
    }
    else{
        console.log(temp);
        if (temp){
            result += " " +  temp;
        }
        else{
            result += fullName[i];
        }
        temp = "";
    }
}
console.log(result);

// SOLUTION 

// var fullName = "laiba khan yousufzai";
// var result = "";
// var temp = "";

// for (var i = 0; i < fullName.length; i++){
//     if (i === 0){
//         result += fullName[i].toUpperCase();
//     }else if (fullName[i] === " "){
//         temp = fullName[i + 1].toUpperCase();
//     }
//     else{
//         // console.log(temp);
//         if (temp){
//             result += " " +  temp;
//             temp = "";
//         }
//         else{
//             result += fullName[i];
//         }
//     }
// }
// console.log(result);


var fullName = "laiba khan yousufzai";
var result = "";
var temp = "";

for (var i = 0; i < fullName.length; i++){
    if (i === 0){
        result += fullName[i].toUpperCase();
    }else if (fullName[i] === " "){
        temp = fullName[i + 1].toUpperCase();
        result += fullName[i];
    }
    else{
        if (temp){
            result += temp;
            temp = "";
        }
        else{
            result += fullName[i];
        }
    }
}
console.log(result);

// NESTED FOR LOOP PRACTICE QUESTION 

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullName = [];

for(var i = 0; i < firstNames.length; i++){
    for(var j = 0; j < lastNames.length; j++){
        fullName.push(firstNames[i] + " " + lastNames[j])
    }
}
console.log(fullName);

// CHECK FOR DOUBLE SPACES 

var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
   if (str.slice(i, i + 2) === " "){    
   alert("No double spaces!");   
   break;
   }
}