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

var fullName = "laiba aslam";
var result = "";

for (var i = 0; i < fullName.length; i++){
    console.log(fullName[i]);
    if (i === 0){
        result += fullName[i].toUpperCase;
    }
    console.log(result)
}