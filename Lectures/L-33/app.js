// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


// PROMISES 


// let data = new Promise((resolve, reject) => {
//    resolve("Resolved");
// })

// // console.log(data);
// data.then(res => console.log(res))
// .catch(err => console.log("err: " + err));

// WE CAN SHORT THIS CODE  USING ASYN AWAIT 
// let data = new Promise((resolve, reject) => {
//     fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=> resolve(json))
//             .catch(err => reject(err));
// })

// data.then(res => console.log(res))
// .catch(err => console.log(err));

// SHORT HAND OF THE ABOVE TWO LINES 

// let getData = async () => {
//     try{
//         let products = await data;
//         console.log(products);
//     }catch(err){
//         console.error(err);
//     }
// }
// getData();

// SHORT CODE USING ASYN AWAIT 

let getProducts = () => {
   return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
                .then(async (res)=> resolve(await res.json()))
                .catch(err => reject(err));
    })
}
   
let getCategories = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/categories')
                .then(async (res)=> resolve(await res.json()))
                .catch(err => reject(err));
    })
}

// let getData = async () => {
//     try{
//         let products = await getProducts();
//         console.log(products);
//     }catch(err){
//         console.error(err);
//     }
// }
// getData();

// Multiple promises

// let getData = async () => {
//     try{
//         let promises = [];
//         promises.push(getProducts(), getCategories());
//         let final = await Promise.all(promises);
//         console.log("final ", final);
//     }catch(err){
//         console.error(err);
//     }
// }
// getData();

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
  GoogleAuthProvider
} from "./firebase.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user", user)
    } else {
        console.log("user not exist")
    }
  });
  
// SIGN UP 

/*
let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
    // Signed up 
    // const user = userCredential.user;
    console.log("user", res.user);

  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // console.log(error);
    // OR 
    console.log(error.message);

  });
}

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup);

*/

// SIGN IN 

let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
    // Signed up 
    // const user = userCredential.user;
    console.log("user", res.user);

  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // console.log(error);
    // OR 
    console.log(error.message);

  });
}

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup);

// LOGOUT 


let logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Sign Out successful")
      }).catch((error) => {
        // An error happened.
      });
}


let logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", logout)

// EMAIL VERIFICATION 


// let verifyBtn = document.getElementById("verifyBtn");
// verifyBtn.addEventListener("click", ()=>{
//   sendEmailVerification(auth.currentUser)
//   .then(() => {
//     console.log("sent")
//   });
// })


// RECAPTCHA 

// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// });

// firebase phone Node. format
// 923245678908


// LOGIN WITH GOOGLE 

let loginWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("token", token);
    console.log("user", user);
  }).catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    // const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("error", errorCode, credential);

  });
}

let googleBtn = document.getElementById("googleBtn");
googleBtn.addEventListener("click", loginWithGoogle);