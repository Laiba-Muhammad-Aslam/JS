// FIREBASE 
 
 import {
   auth, 
   createUserWithEmailAndPassword, 
   onAuthStateChanged, 
   signInWithEmailAndPassword, 
   signOut,
   sendEmailVerification,
   RecaptchaVerifier,
   googleProvider,
   signInWithPopup,
   GoogleAuthProvider,
   signInWithPhoneNumber
 } from "./firebase.js";
 
 onAuthStateChanged(auth, (user) => {
     if (user) {
         console.log("user", user)
     } else {
         console.log("user not exist")
     }
   });


//  TODO 

let list = document.getElementById("list");

let add = () => {
    let todo = document.getElementById("todo");
    console.log(todo.value);
    list.innerHTML += `<li> ${todo.value} </li>`
} 

let addTodo = document.getElementById("addTodo");
addTodo.addEventListener("click", add);