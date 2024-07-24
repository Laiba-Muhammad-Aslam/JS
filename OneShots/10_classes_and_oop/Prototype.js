// let myName = "Laiba    ";
// let myTea = "chai       ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.laiba = function(){
    console.log(`Laiba is present in all Objects`);
}

Array.prototype.helloLaiba = function(){
    console.log(`Laiba says Hello`);
}

// heroPower.laiba()
// myHeros.laiba()
// myHeros.helloLaiba()
// heroPower.helloLaiba()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Prototype ineritance
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurMai     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Isha             ".trueLength()
"       Zoha         Rehan       ".trueLength()