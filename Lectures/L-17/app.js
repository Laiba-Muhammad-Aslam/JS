// WHILE LOOP 

// var i = 0;

// while(i < 5){
//     console.log(i);
//     i++;
// }

// var flag = true;
// var count = 0;

// while(flag){
//     count+=5;
//     console.log(count)
//     if(count>100){
//         flag = false;
//     }
// }

// DO WHILE LOOP 

// var i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i < 10)


var i = 0;
do{
    console.log(i);
    i++;
}while(false)

// FOR OF LOOP 

var arr = ["Laiba", "Amna", "Sara", "Zara"];
for(var v of arr){
    console.log(v);
}

// function submit(){
//     /*var file = document.getElementById("file");
//     var image = document.getElementById("image");
//     // console.log(file.files[0]);
//     //  console.log(URL.createObjectURL(file.files[0]));
//     image.src = URL.createObjectURL(file.files[0]);
//     image.style.display = "block";*/

    
// }


function submit(){
    var cities = document.getElementsByName("city");
    for(var city of cities){
        if(city.checked){
            console.log(city.value);
        }
    }

    
}
