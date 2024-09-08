// If the following code returns null then it means that the popups are blocked

// var a = window.open();
// console.log(a);

// EXAMPLE CODE 

// var monkeyWindow = window.open();
// var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from agroup of friars<br>named the Order of Friars Minor Capuchin who wear<br>brownrobes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent);
// monkeyWindow.close();

// EXAMPLE 2 

// var a = window.open('quiz.html');
// console.log(a);

// GETTING AN ID 

// a.document.getElementById("q-heading");


// CONTROLLING THE WINNDOW'S SIZE AND LOCATION 

// Just giving a name to a window 
// var monkeyWindow = window.open("", "win1"); 

// SPECIFYING A SZIE OF WINDOW

// var monkeyWindow = window.open("quiz.html", "quizApp", "width=420,height=380");
// var monkeyWindow = window.open("quiz.html", "quizApp", "width=420,height=3800,left=200,top=100");

// REGEX 

console.log(/^\s+$|^$/gi.test(' '));

// EXCEPTION TRY AND CATCH 


// console.log("Hello");

// try{
//     consoe.log("Hiii");
// }catch(err){
//     console.log(err);
// }

// console.log("Hi Js")

var name = "";

try{
    if(name === ""){
        throw "Please enter your name";
    }
}catch(err){
    console.log(err);
}
