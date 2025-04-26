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
console.log(firstName);

// Part v 

let lastName = document.getElementById("last-name");
lastName.value = "Muhammad Aslam";
console.log(lastName);

let email = document.getElementById("email");
email.value = "laiba@google.com";
console.log(email);

// Question 2 

// Part i 

let nodeType = document.getElementById("form-content").nodeType;
console.log(nodeType);

// Part ii 

let nodeTypeOfElem = document.getElementById("lastName");
let lastNameNodeType = nodeTypeOfElem.nodeType;
let lastNameChildsNodeType = Array.from(nodeTypeOfElem.childNodes).map(child => child.nodeType);
console.log(lastNameNodeType, lastNameChildsNodeType);

// Part iv 

let firstChild = mainContent.firstElementChild;
console.log(firstChild.textContent);
let lastChild = mainContent.lastElementChild;
console.log(lastChild.textContent);