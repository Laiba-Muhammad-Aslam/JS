// var obj = {
//     studentName: "Laiba",
//     rollNumber: 536,
//     email: "laiba@gmail.com"
// }

// for(var key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }


// const car = {
//     models: [
//       {
//         name: "Tesla Model S",
//         manufacturer: "Tesla",
//         year: 2023,
//         specifications: {
//           horsepower: 1020,
//           range: "396 miles",
//           topSpeed: "200 mph",
//           price: "$89,990",
//           fuelType: "Electric"
//         }
//       },
//       {
//         name: "Ford Mustang GT",
//         manufacturer: "Ford",
//         year: 2023,
//         specifications: {
//           horsepower: 450,
//           range: "300 miles",
//           topSpeed: "155 mph",
//           price: "$55,300",
//           fuelType: "Gasoline"
//         }
//       },
//       {
//         name: "Toyota Corolla",
//         manufacturer: "Toyota",
//         year: 2023,
//         specifications: {
//           horsepower: 169,
//           range: "420 miles",
//           topSpeed: "112 mph",
//           price: "$21,550",
//           fuelType: "Gasoline"
//         }
//       }
//     ],
  
// }

// var company = document.getElementById("company");
// var model = document.getElementById("model");

// for(var key in car){
//     company.innerHTML += `<option value="${key}"> ${key} </option>`
// }

// function selectCompany(){
//     // console.log(company.value);
//     model.innerHTML = `<option value="">Select Model</option>`;
//     for(var key in car[company.value]){
//         model.innerHTML += `<option value="${key}"> ${key} </option>`; 
//     }
// }

// console.log(Object.keys(car));
// console.log(Object.keys(car).length);


// var obj = {
//   name: "Laiba"
// }

// var obj1 = obj;
// var obj2 = obj1;

// obj2.name = "Zobia";

// console.log(obj, obj1, obj2);


// OBJECT SHARE THE SAME REFRENECE SO THE VALUE BECOMES ZOHA IN ALL OBJ 

// function updateArr(arr){
//   arr[1].name = "Zoha";

//   return arr;
// }

// var obj = {
//   name: "Ahmed"
// };
// var result = updateArr([obj, obj , obj]);
// console.log(result);

// LOCAL STORAGE 

// localStorage.setItem("School", "XYZ");
// localStorage.setItem("Hello", "Sista");
// localStorage.getItem("School");
// localStorage.removeItem("School");
// localStorage.clear();

var obj = {
  name: "Laiba"
}
localStorage.setItem("student", JSON.stringify(obj)) // it accepts only string value so we will convert it into String
// JSON.stringify(obj);

// localStorage.getItem("student");
JSON.parse(localStorage.getItem("student"));

// ADDING A NEW PROPERTY TO AN OBJECT 

var student = JSON.parse(localStorage.getItem("student"));
student.email = "laiba@google.com";