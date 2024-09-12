let students = [
    {
        name: "Laiba",
        age: 20
    },
    {
        name: "Maaz",
        age: 20
    },
    {
        name: "Zoha",
        age: 21
    }
];

// .find is also a callback function 

let result = students.find(function(v){
    return v.age === 20;
});
console.log(result);