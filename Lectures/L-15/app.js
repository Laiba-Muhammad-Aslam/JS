var count = 0;

function abc() {
  for (var i = 0; i < 5; i++) {
    count++;
    console.log(count);
  }
}
abc();
abc();
abc();

function abc() {
  var count = 0;
  for (var i = 0; i < 5; i++) {
    count++;
    console.log(count);
  }
}
abc();
abc();
abc();

function addition(a, b) {
  // parameters
  console.log(a, b);
}
addition(5, 6); // Arguments

function foo(notify) {
  notify("Hello World");
}

foo(alert);

var log = console.log;
log("Hello");
log("Hello Computer");

function abc(a) {
  console.log(a);
}
var arr = ["UBIT"];
abc(arr);
abc(arr[0]);

function checkAttendance(student) {
  var lastClass = [1122, 2233, 3344, 4455];
  for (var i = 0; i < lastClass.length; i++) {
    if (lastClass[i] == student) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkAttendance(101));
console.log(checkAttendance(181));
console.log(checkAttendance(1122));

function checkAttendance(student) {
  var lastClass = [1122, 2233, 3344, 4455];
  if (lastClass.indexOf(student) !== -1) {
    return "Aya tha";
  } else {
    return "Nhi aya tha";
  }
}

console.log(checkAttendance(101));
console.log(checkAttendance(181));
console.log(checkAttendance(1122));

var count = 1;
function foo() {
  for (var i = 0; i < 3; i++) {
    count++;
    console.log(count);
    return count;
  }
}
console.log(foo());

function abc() {
  console.log("test");
  return "test 2";
  console.log("test1");
}
console.log(abc());

function multiply(a, b) {
  return a * b; // 1 * undefined = NAN
}
console.log(multiply(1));

// function multiply(a, b){
//     return a * b; // ERROR
// }
// console.log(multiply(,1));

// function multiply(a, b){
//     return a * b;
// }
// console.log(multiply(_, 1));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(null, 1));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(undefined, 1));

// function multiply(a, b){
//     return a * b;
// }
// console.log(multiply(_));

// LOCAL VARIABLE 

// function availaible() {
//   var a = 25;
// }
// availaible();
// console.log(a);

// function availaible() {
//   var a = 25;
//   console.log(a);
// }
// availaible();
// console.log(a);

// var a = 25;
// function availaible() {
// }
// availaible();
// console.log(a);


// GLOBAL VARIABLE 

var a = 25;
function availaible() {
    console.log(a);
}
availaible();
console.log(a);

// HOISTING 

var a = "UBIT";

function foo(){
    console.log(a);
    var a = "Karachi";
}
foo();