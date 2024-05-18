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