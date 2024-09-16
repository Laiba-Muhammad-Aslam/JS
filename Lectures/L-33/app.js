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

let getData = async () => {
    try{
        let promises = [];
        promises.push(getProducts(), getCategories());
        let final = await Promise.all(promises);
        console.log("final ", final);
    }catch(err){
        console.error(err);
    }
}
getData();

// FIREBASE 

import {auth, createUserWithEmailAndPassword} from "./firebase.js"

let signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}