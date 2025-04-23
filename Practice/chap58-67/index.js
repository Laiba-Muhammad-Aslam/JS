// QUESTION # 1 

// Part i 
let mainContent = document.getElementById("main-content");

// Part ii
console.log(mainContent);

// Part iii 
let elementsOfClassRender = document.getElementsByClassName("render");
// console.log(elementsOfClassRender);
// Array.from() is used to convert HTML collection into Array.
Array.from(elementsOfClassRender).forEach(elem => {
    console.log(elem.innerHTML);
});

// Part iv 

let firstName = document.getElementById("first-name");
firstName.value = "Laiba Aslam";
console.log(firstName)

// Question 2 
// Part iv 

let firstChild = mainContent.firstElementChild;
console.log(firstChild.textContent);
let lastChild = mainContent.lastElementChild;
console.log(lastChild.textContent);