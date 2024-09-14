import { getDate as date, appName} from "./index.js";

// while importing the default module you can change its name too 

import time from "./index.js";

// console.log(getDate());
// console.log(getTime());
console.log(time());
console.log(appName);

// if we have same name as a function that we are importing it from different file so we can change its name above. 

let getDate = () => {

};

// import * as All from "./index.js";
// console.log(All);
// console.log(All.getDate());

// BEFORE ES6 

// const getDate = require("./index.js");