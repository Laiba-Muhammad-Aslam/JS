// Class 16 | Switch Statement

// var day = prompt("Enter the name of Day.")
// day = day.toLowerCase();

// switch(day){
//     case "Tues":
//         console.log("Theory");
//         break
//     case "Thurs":
//         console.log("Theory");
//         break
//     case "Sat":
//         console.log("Practical");
//         break
//     default:
//         console.log("Kuch bhi nhi");
// }

// switch(day){
//     case "tues":
//     case "thurs":
//         console.log("Theory");
//         break
//     case "sat":
//         console.log("Practical");
//         break
//     default:
//         console.log("Kuch bhi nhi");
// }

// DOM 

// console.log(document.getElementById("main"));
// console.log(document.getElementsByClassName("container"));
// console.log(document.querySelector("#main"));
// console.log(document.querySelectorAll("#main"));

// document.getElementById("main").innerText = "<h1>Laiba Aslam</h1>";
// document.getElementById("main").innerHTML = "<h1>Laiba Aslam</h1>";


// var div = document.getElementById("main");
// div.innerHTML = "<h1>Laiba Aslam</h1>";
// console.log(div.className);
// console.log(div.id);
// console.log(div.getAttribute("name"));

// function submit(){
//     var inputValue = document.getElementById("text-input");
//     console.log(inputValue.value);
// }

var inputValue = document.getElementById("text-input");
inputValue.value = "Laiba Khan";

function submit(){
    console.log(inputValue.value);
}

