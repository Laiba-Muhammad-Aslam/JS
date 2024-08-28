// function validation(event){
//     console.log("Test", event);
//     var val = event.target.value;
//     console.log(val);

//     if(val){
//         event.target.style.border = '';
//     }else{
//         event.target.style.border = '2px solid red';
//     }
// }


// function abc(){
//     alert("TTT")
// }
// var main = document.getElementById("main");
// main.innerHTML = '<button onclick= "abc()">Click Now<button>';



// function updateBtn(){
//     var main = document.getElementById("main");
//     main.className += " bgGreen"
// }

var count = 0;

function abc(){
    var btn = document.getElementById("btn");
    count+=5;
    // console.log(count);
    btn.style.left = count + "px";
}
var ref = setInterval(abc, 1000);

function stopCar(){
    clearInterval(ref);
}
