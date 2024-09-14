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
// console.log(ageResult);

// MODULES 

let getDate = () =>{
    return new Date().toDateString();
}

let getTime = () =>{
    return new Date().getTime();
}

const appName = "Quiz";

// This is called multi export 

export{getDate, appName};

// Default export (default sirf aik hi hoga) 

export default getTime;

// You can do it like this too

// export let getDate = () =>{
//     return new Date().toDateString();
// }

// export let getTime = () =>{
//     return new Date().getTime();
// }

// export const appName = "Quiz";

// default ko export krty waqt usko name ki bhi need nhi hai. 

// export default () =>{
//     return new Date().toDateString();
// }

// BEFORE ES6 

// module.export = getDate;