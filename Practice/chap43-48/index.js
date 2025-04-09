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

