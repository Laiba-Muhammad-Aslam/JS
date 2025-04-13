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

for(let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click", function() { 
        let rowToDelete = this.parentNode.parentNode; 
        rowToDelete.remove();
    });
}

// Question # 4 

let changeImg = document.getElementById("changeImg");
changeImg.addEventListener("mouseover" , ()=> {
    changeImg.src = "assests/samsung.png"
})
changeImg.addEventListener("mouseout" , ()=> {
    changeImg.src = "assests/iphone.jpg"
})

// Question # 5 

let counterValue = document.getElementById("counter-value");
let incrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");
let resetBtn = document.getElementById("resetBtn");
let count = 0;

function increment(){
    count++;
    counterValue.innerText = `Count: ${count}`;
}
function decrement(){
    count--;
    counterValue.innerText = `Count: ${count}`;
}
function reset(){
    count = 0;
    counterValue.innerText = `Count: ${count}`;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);
