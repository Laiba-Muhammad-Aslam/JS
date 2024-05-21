// var str = "UBIT";
// str+= "Karachi";
// console.log(str);

var str;
str+= "Karachi";
console.log(str); //undefinedKarachi

var str = "";
str+= "Karachi";
console.log(str); //Karachi

var str = null;
str+= "Karachi";
console.log(str); //nullKarachi


// var arr = [11, 13, 15, 18, 20];
// var missing = [];

// for(var i= 0; i<arr.length; i++){
//     var diff = arr[i + 1] - arr[i];
//     if (diff > 1 ){
//         for (var j = 1; j < diff; j++){
//             missing.push(arr[i] + j);
//         }
//     }
// }
// console.log(arr);
// console.log(missing);


// FINDING THE MISSING VALUES AND PLACE IT IN THE SAME ARRAY 

var arr = [11, 13, 15, 18, 20];

for(var i= 0; i<arr.length; i++){
    var diff = arr[i + 1] - arr[i];
    if (diff > 1 ){
        for (var j = 1; j < diff; j++){
            arr.splice(i + j , 0 , arr[i] + j);
        }
    }
}
console.log(arr);

// SPLICE METHOD 

var pets = ["dog","cat", "fly", "bug", "ox"];
console.log(pets)
// pets.splice(2, 2);
// console.log(pets)

var noPets = pets.slice(2, 4);
console.log(noPets)
