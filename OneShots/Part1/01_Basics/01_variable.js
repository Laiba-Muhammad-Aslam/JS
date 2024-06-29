const accountId = 4587;
let accountEmail = "laiba@gmail.com";
var accountPassword = "12345";
accountCity = "Karachi";
let accountState;

// accountId = 90; //not allowed

console.log(accountId);

accountEmail = "laibakhann@gmail.com";
accountPassword = "122226636";
accountCity = "Hydderabd";

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity]);