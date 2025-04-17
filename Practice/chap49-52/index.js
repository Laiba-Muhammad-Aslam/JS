// Question # 1 

function signupForm(){
    event.preventDefault()
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email, password);
}

// Question # 2

let paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda animi illo saepe voluptates. Ipsam, nostrum asperiores eligendi ea eius atque nesat, eum suscipit? Ratione illo doloribus quo ducimus doloremque numquam maiores ad modi.";
let lessPara = paragraph.slice(0, 20);
let isExpanded = false;
let readMoreBtn = document.getElementById("readMoreBtn");

function readMore(){
    let content = document.getElementById("readMore");
    if (!isExpanded) {
        content.innerHTML = lessPara + '...'; 
        readMoreBtn.innerHTML = "Read More"; 
    } else {
        content.innerHTML = paragraph; 
        readMoreBtn.innerHTML = "Read Less"; 
    }
    
    isExpanded = !isExpanded; 
}
readMore();

readMoreBtn.addEventListener("click", readMore);