// var student = {
//     name: "Laiba",
//     id: 78900,
//     email: "laiba@google.com",
//     classDays: ["Monday", "Thursday", "Sunday"],
//     active: null,
//     school: {
//         name: "XYZ"
//     }
// }

// delete student.school;
// console.log(student);

// var obj = {
//     name: "Laiba",
//     details: {
//         classes: [
//             {
//                 school: {
//                     name: "XYZ"
//                 }
//             }
//         ]
//     }
// }

var obj = {
    name: "Ahmed",
    getName: function(){
        return `Mr. ${this.name}`;
    }
}

// console.log(obj.getName());


// OBJECT CONSTRUCTOR 

// function Student(){
//     console.log(this);
//     this.name = "Laiba",
//     this.id = 3893;
// }

// console.log(new Student())


// function Student(name, id, email, phone){
//     // console.log(this);
//     this.name = name,
//     this.id = id;
//     this.email = email,
//     this.phone = phone
// }

// console.log(new Student("Laiba", 878676, "laiba@google.com", 5677))

// var arr = [
//     new Student("Laiba", 878676, "laiba@google.com", 5677),
//     new Student("Laiba", 878676, "laiba@google.com", 5677),
//     new Student("Laiba", 878676, "laiba@google.com", 5677),
//     new Student("Laiba", 878676, "laiba@google.com", 5677)
// ]

// console.log(arr);


// FACTORY FUNCTION IN JS 
// factory function mai key bar bar generate hogi

function student(name, id, phone){
    return{
        name: name,
        id: id,
        phone: phone
    }
}

console.log(student("Laiba", 9887, 28787));


// METHODS IN CONSTRUCTOR FUNCTION 

// function Student(name, id, email, phone){
//     // console.log(this);
//     this.name = name,
//     this.id = id;
//     this.email = email,
//     this.phone = phone
//     this.details = function(){
//         return this.name;
//     }
// }

// var arr = [
//     new Student("Laiba", 878676, "laiba@google.com", 5677),
//     new Student("Laiba", 878676, "laiba@google.com", 5677),
//     new Student("Laiba", 878676, "laiba@google.com", 5677),
//     new Student("Laiba", 878676, "laiba@google.com", 5677)
// ]

// console.log(arr);


// PROTOTYPE 

function Student(name, id, email, phone){
    // console.log(this);
    this.name = name,
    this.id = id;
    this.email = email,
    this.phone = phone
}

Student.prototype.details = function(){
    return this.name;
}

var arr = [
    new Student("Laiba", 878676, "laiba@google.com", 5677),
    new Student("Laiba", 878676, "laiba@google.com", 5677),
    new Student("Laiba", 878676, "laiba@google.com", 5677),
    new Student("Laiba", 878676, "laiba@google.com", 5677)
]

console.log(arr);


// Practice queastions 

var comapny = prompt("Company ");
var model = prompt("Model ");

var cars = {
    honda: {
        civic: {
            name: "Honda Civic",
            model: 2024,
            colors: ["black", "red", "white"]
        }
    }
}

console.log(cars[comapny][model].model);