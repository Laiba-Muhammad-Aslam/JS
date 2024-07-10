const body = document.querySelector("body");
const box = document.querySelectorAll(".box");

// console.log(box);

box.forEach(function(box){
    // console.log(box);
    box.addEventListener("click", function(event){
        const value = event.target.id;
        switch(value){
            case "grey":
                body.style.backgroundColor = event.target.id;
                break;
            case "white":
                body.style.backgroundColor = event.target.id;
                break;
            case "blue":
                body.style.backgroundColor = event.target.id;
                break;
            case "purple":
                body.style.backgroundColor = event.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = event.target.id;
                break;
            
        }
    })
})