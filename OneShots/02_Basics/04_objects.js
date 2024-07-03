// const tinder = new Object();

const tinderUser = {};

tinderUser.id = "123";
tinderUser.name = "Samm";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "Laiba",
            lastname: "Khan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in urdu",
    price: "999",
    courseInstructor: "laiba"
}

// course.courseInstructor

const {courseInstructor : instructor} = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "laiba",
//     "coursename": "js in urdu",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
