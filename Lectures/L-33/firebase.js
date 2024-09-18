 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
 import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  signOut, 
  sendEmailVerification
  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBvoiBpEL-hGSy3eLiKa48su7lKNePjKUg",
   authDomain: "project-1-b2461.firebaseapp.com",
   projectId: "project-1-b2461",
   storageBucket: "project-1-b2461.appspot.com",
   messagingSenderId: "686909921882",
   appId: "1:686909921882:web:999b35365f0fbc8a435663"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 export{
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification
 }