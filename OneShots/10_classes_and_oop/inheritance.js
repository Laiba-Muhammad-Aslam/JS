class User{
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`USERNAME is ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1 = new Teacher("Laiba", "laiba@facebook.com", "123");
user1.logMe();

const user2 = new User("Zainab");
user2.logMe();

console.log(user2 instanceof User);