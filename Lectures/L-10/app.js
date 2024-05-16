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


var arr = [11, 13, 15, 18, 20];
var missing = [];
// var newarr2 = [];

for(var i= 0; i<arr.length; i++){
    var diff = arr[i + 1] - arr[i];
    if (diff > 1 ){
        for (var j = 1; j < diff; j++){
            missing.push(arr[i] + j);
        }
    }
}
console.log(arr);
console.log(missing);
// var newarr1 = arr + missing;
// newarr2.push(newarr1);
// console.log(typeof newarr2);
