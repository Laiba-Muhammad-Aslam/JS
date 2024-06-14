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

function swapImage(event){
//    console.log(event.type)
   if(event.type === "mouseover"){
    event.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C._Ronaldo_-_Ballon_d%27Or_2014.jpg/800px-C._Ronaldo_-_Ballon_d%27Or_2014.jpg";
   }else{
    event.target.src = "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg";
   }
   
}