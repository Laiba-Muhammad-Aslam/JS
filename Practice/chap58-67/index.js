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