const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const randomColorGenerator = function(){
    const hex = "0123456789ABCDEF";
    let color = "#"
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalId;

const changeBackgroundcolor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBg, 1000);
    }
      
    function changeBg(){
        document.body.style.backgroundColor = randomColorGenerator();
        document.querySelector("#colorCode").innerText = randomColorGenerator();
    }
   
}

const stopChangingBackgroundcolor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
start.addEventListener("click", changeBackgroundcolor);
stop.addEventListener("click", stopChangingBackgroundcolor);