var student = {
    name: "Laiba",
    id: 78900,
    email: "laiba@google.com",
    classDays: ["Monday", "Thursday", "Sunday"],
    active: null,
    school: {
        name: "XYZ"
    },
    // getData: function(){
    //     console.log("I'm a function")
    // }

    getData: function(){
        return `${student.name} (${student.school.name})`
    }
}

// console.log(student.id);
// console.log(student.xyx.school);
// console.log(student.classDays[student.classDays.length - 1])

student.rollNo = 7688;
// console.log(student);

student.classDays.push("Tuesday");
// console.log(student);

student.school.location = "City Road";
// console.log(student);

// student.school.location.address = "City Road"; 
// Above line throws an error

// for deletion 

// delete student.school;
// console.log(student);

// console.log("email" in student);
student.getData();
console.log(student.getData());

function abc(){
    console.log(this);
}
abc();

// This SUBSTITUTION 

var obj = {
    name: "Laraib",
    getName: function(){
        console.log(this);
    } 
}
// obj.getName();

// var a = obj.getName();
// a();

// TASK 

var cars = {
    honda: {
        civic: {
            name: "Civic 2024",
            price: 9003673829,
            colors: ["Black", "Red", "White"],
            gates: 4,
            company: {
                name: "Honda",
                
            }
        }
    }
}