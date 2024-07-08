document.getElementById('title');
document.getElementById('title').id;

// document.getElementById('title').class;

document.getElementById('title').className;
document.getElementById('title').getAttribute('id');
document.getElementById('title').getAttribute('class');
document.getElementById('title').setAttribute('class', 'test');

const title = document.getElementById('title');
title.style.backgroundColor = "green";
title.textContent;
title.innerHTML;
title.innerText;

document.getElementsByClassName('heading');
document.querySelector('h2');
document.querySelector("#title");
document.querySelector(".heading");
document.querySelector('input[type= "password"]');
document.querySelector('p:first-child');

const myul = document.querySelector('ul');
const turnGreen = myul.querySelector("li");
turnGreen.style.color = "red";

const tempList = document.querySelectorAll("li");
tempList[0].style.color = 'green';

tempList.forEach(function(li){
    li.style.backgroundColor = "yellow";
})


const classItems = document.getElementsByClassName("list-item");

// THis is not allowed
// classItems.forEach(function(li){
//     tempList.style.backgroundColor = "orange";
// })

// Fisrt we have to convert it into an Array 

const myConvertedArray = Array.from(classItems);
myConvertedArray.forEach(function(li){
    li.style.backgroundColor = "orange";
})

