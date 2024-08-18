class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const user1 = new User("Laiba");
// console.log(user1.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("Fariha", "fariha@gmail.com");
// console.log(teacher.createId());