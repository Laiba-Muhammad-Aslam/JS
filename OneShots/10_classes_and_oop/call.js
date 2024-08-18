function setUserName(username){
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password){
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const user1 = new createUser("Laiba", "laiba@facebook.com", "123");
console.log(user1);