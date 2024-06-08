var count = 0;

function abc(){
    for(var i = 0; i< 5; i++){
        count++;
        console.log(count);
    }
}
abc();
abc();
abc();


function abc(){
    var count = 0;
    for(var i = 0; i< 5; i++){
        count++;
        console.log(count);
    }
}
abc();
abc();
abc();

function addition(a, b){ // parameters
    console.log(a,b);
}
addition(5, 6); // Arguments 

function foo(notify){
    notify("Hello World");
}

foo(alert);

var log = console.log;
log("Hello");
log("Hello Computer");

function abc(a){
    console.log(a);
}
var arr = ["UBIT"];
abc(arr);
abc(arr[0]);

function checkAttendance(student){
    var lastClass = [1122, 2233, 3344, 4455];
    for(var i = 0; i < lastClass.length; i++){
        if (lastClass[i] == student){
            return true;
        }else{
            return false
        }
    }
}

console.log(checkAttendance(101));
console.log(checkAttendance(181));
console.log(checkAttendance(1122));


function checkAttendance(student){
    var lastClass = [1122, 2233, 3344, 4455];
        if (lastClass.indexOf(student) !== -1){
            return "Aya tha";
        }else{
            return "Nhi aya tha"
        }
}

console.log(checkAttendance(101));
console.log(checkAttendance(181));
console.log(checkAttendance(1122));
