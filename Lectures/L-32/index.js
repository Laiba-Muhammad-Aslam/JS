// HIGHER ORDER FUNCTION OR (HOF)

let foo = (cb) => {
    return () =>{
        cb();
    }
}

let cb = () => {

}

let result = foo(cb);
console.log(result);

// TERNARY OPERATOR 

// let age = 20;

// let type = age >= 20 ? "Eligible": "Not Eligible";
// console.log(type);


// if age is true then age store in age variable otherwise it will return Not availaible 
let age = 0;
let ageResult = age || "Not availaible";
console.log(ageResult);