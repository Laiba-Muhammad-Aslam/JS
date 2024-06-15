// function swapImage(){
//     console.log(event);
// }
// swapImage();

// function swapImage(){
//     console.log(event.target);
// }
// swapImage();


// function swapImage(){
//     console.log(event.target);
// }

// function swapImage(){
//     event.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C._Ronaldo_-_Ballon_d%27Or_2014.jpg/800px-C._Ronaldo_-_Ballon_d%27Or_2014.jpg";
// }

// function swapImage(event){
//     event.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C._Ronaldo_-_Ballon_d%27Or_2014.jpg/800px-C._Ronaldo_-_Ballon_d%27Or_2014.jpg";
//     console.log(event);
// }

// 1) SWAP AN IMAGE 
// function swapImage(event, type){
//     if(type === "over"){
//         event.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C._Ronaldo_-_Ballon_d%27Or_2014.jpg/800px-C._Ronaldo_-_Ballon_d%27Or_2014.jpg";
//         console.log(event);
//     }else{
//         event.target.src = "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg";
//         console.log(event);
//     }
   
// }

// 2) SWAP AN IMAGE SECOND WAY 

// var count = 0;

// function swapImage(event){
//     if(count === 0){
//         event.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C._Ronaldo_-_Ballon_d%27Or_2014.jpg/800px-C._Ronaldo_-_Ballon_d%27Or_2014.jpg";
//         count = 1;
//     }else{
//         event.target.src = "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg";
//         count = 0;
//     }
   
// }

// 3) SWAP AN IMAGE THIRD WAY 

// function swapImage(event){
// //    console.log(event.type)
//    if(event.type === "mouseover"){
//     event.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C._Ronaldo_-_Ballon_d%27Or_2014.jpg/800px-C._Ronaldo_-_Ballon_d%27Or_2014.jpg";
//    }else{
//     event.target.src = "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg";
//    }
   
// }

// EXPANDING A TEXT 

var p = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

// console.log(p.slice(0,50) + "....")

// ONE WAY 

// var text = document.getElementById("text");
// text.innerHTML = p.slice(0,50) + "....";

// function expand(){
//    text.innerHTML = p;
// }

// EXPAND A PARAGRAPH

// var text = document.getElementById("text");
// text.innerHTML = p.slice(0,50) + "....";


// function expand(){
//    if(event.type === "mouseover"){
//       text.innerHTML = p;
//    }else{
//       text.innerHTML = p.slice(0,50) + "....";
//    }
   
// }

// CHANGING THE BACKGROUND ON HOVER 

// var text = document.getElementById("text");
// text.innerHTML = p.slice(0,50) + "....";


// function expand(){
//    if(event.type === "mouseover"){
//       text.innerHTML = p;
//       text.style.backgroundColor = "red";
//    }else{
//       text.innerHTML = p.slice(0,50) + "....";
//    }
   
// }

// FILL CITY 

function fillCity(){
   var zip = document.getElementById("zip");
   var city = document.getElementById("city");
   switch(Number(zip.value)){
      case 1:
         city.value = "Karachi";
         break;
      case 2:
         city.value = "Lahore";
         break;
      case 3:
         city.value = "Islamabad";
         break;
      default:
         console.log("No City")

   }
}

// TO CLEAR THE INPUT FIELD ON MESSAGE 

// var message = document.getElementById("message");

// function sendMessage(){
//    console.log(event.keyCode);
//    if(event.keyCode === 13){
//       // console.log("Hello")
//       message.value = "";

//    }
// }


// var message = document.getElementById("message");

// function sendMessage(){
//    console.log(event.keyCode);
//    if(event.keyCode === 13){
//       // console.log("Hello")

//    }
// }


// var list = document.getElementById("list");

// function sendMessage(){
//    console.log(event.keyCode);
//    if(event.keyCode === 13){
//       var value = event.target.value;
//       list.innerHTML += "<li>" + value + "</li>";
//       event.target.value = "";

//    }
// }


// var list = document.getElementById("list");

// function sendMessage(){
//    console.log(event.keyCode);
//    if(event.keyCode === 13){
//       var elem = event.target;
//       list.innerHTML += "<li>" + elem.value + "</li>";
//       elem.value = "";

//    }
// }

// CHAT BOT 

// var list = document.getElementById("list");

// function sendMessage(){
//    console.log(event.keyCode);
//    if(event.keyCode === 13){
//       var elem = event.target;
//       list.innerHTML += "<li>" + elem.value + "</li>";
//       if(elem.value.toLowerCase() === 'hi'){
//          list.innerHTML += "<li> Hello </li>"
//       }
//       elem.value = "";

//    }
// }

// function abc(){
//    console.log("Time hogaya");
// }
// setTimeout(abc, 2000);


// var list = document.getElementById("list");

// function sendMessage(){
//    console.log(event.keyCode);
//    if(event.keyCode === 13){
//       var elem = event.target;
//       list.innerHTML += "<li>" + elem.value + "</li>";
//       if(elem.value.toLowerCase() === 'hi'){
//          setTimeout(function(){
//             list.innerHTML += "<li> Hello </li>"
//          }, 2000)
//       }
//       elem.value = "";

//    }
// }

var list = document.getElementById("list");
var typing = document.getElementById("typing");

function sendMessage(){
   console.log(event.keyCode);
   if(event.keyCode === 13){
      var elem = event.target;
      list.innerHTML += "<li class='right-side'>" + elem.value + "</li>";
      typing.style.display = "block";
      if(["hi", "hello", "oye" , "moye"].indexOf(elem.value.toLowerCase()) !== -1){
         setTimeout(function(){
            list.innerHTML += "<li class='left-side'> Hello </li>"
         }, 2000)
         setTimeout(function(){
            list.innerHTML += "<li class='left-side'> How are you? </li>"
            typing.style.display = "none";
         }, 4000)
         
      }else if(["theek", "Alhamdulillah",  "thk", "set" , "mast"].indexOf(elem.value.toLowerCase()) !== -1){
         setTimeout(function(){
            list.innerHTML += "<li class='left-side'> How can I help you? </li>";
            typing.style.display = "none";
         }, 2000)
         
      }else{
         setTimeout(function(){
            list.innerHTML += "<li class='left-side'> Mai samjh nhi saka apko </li>";
            typing.style.display = "none";
         }, 2000)
         
      }
      elem.value = "";

   }
}