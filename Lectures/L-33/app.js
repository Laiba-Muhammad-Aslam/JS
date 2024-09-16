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


let data = new Promise((resolve, reject) => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> resolve(json))
            .catch(err => reject(err));
})

// data.then(res => console.log(res))
// .catch(err => console.log(err));

// SHORT HAND OF THE ABOVE TWO LINES 

let getData = async () => {
    try{
        let products = await data;
        console.log(products);
    }catch(err){
        console.error(err);
    }
}
getData();