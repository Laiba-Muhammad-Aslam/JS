// Question # 1
let discountLink = document.getElementById("discount");
function  discountAlert() {
    alert("Congratulations...")
}
discountLink.addEventListener("click", discountAlert);

// Question # 2
let shopNow = document.getElementsByClassName("shopNow");
for(let i = 0; i < shopNow.length; i++){
    shopNow[i].addEventListener("click", () => {
        alert("Thanks for purchasing a phone from us");
    });
}

// Question # 3 

let deleteBtn = document.getElementsByClassName("deleteBtn");
// console.log(deleteBtn);
for(let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click", () => {
        if(deleteBtn[i] == 0){
            let deleteElement = deleteBtn[i].isSameNode;
            console.log(deleteBtn[i].parentNode.parentNode);
            deleteElement.remove();
        }else{
            let deleteElement = deleteBtn[i].parentNode.parentNode;
            console.log(deleteBtn[i].parentNode.parentNode);
            deleteElement.remove();
        }
      
})
}
