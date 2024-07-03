// Sinleton 
// Object.create 

// OBJECT LITERALS 

const mySym = Symbol("Key1");

const JsUser = {
    name : "Laiba",
    age: 18,
    "full name": "Laiba Aslam",
    [mySym] : "Key1",
    location: "Karachi",
    email: "laiba@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Thursday"]
}

console.log(JsUser.email);
// console.log(JsUser[email]); // this is incorrect because email is string & you can't access it like this.
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email = "laiba@chat.com";
// Object.freeze(JsUser);
JsUser.email = "laiba@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

