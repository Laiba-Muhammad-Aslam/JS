let obj = {
    name: "Laiba",
    school: {
        name: "XYZ"
    }
};
let obj1 = obj;
// let obj2 = {...obj1}; // Shallow copy
// obj2.name = "Maha";
// HERE WHEN WE DO THIS IT WILL CHANGE IN ALL OBJECT BECAUSE THEY SHARE THE SAME REFRENCE SO IN THIS CASE WE NEED TO CREATE A DEEP COPY INSTEAD OF SHALLOW COPY 
// obj2.school.name = "ABC"

// DEEP COPY 
let obj2 = {
    ...obj1,
    school: {...obj.school}
};
obj2.school.name = "ABC";
console.log(obj, obj1, obj2);

