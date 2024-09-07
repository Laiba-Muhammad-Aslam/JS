function getUsers(){
    var users = localStorage.getItem("users");

    if(users){
        users = JSON.parse(users)

    }else{
        users = [];
    }

    return users;
}
function register(){
    var name = document.getElementById("r-name");
    var email = document.getElementById("r-email");
    var password = document.getElementById("r-password");

    var users = getUsers();
    
    var user = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    name.value = "";
    email.value = "";
    password.value = "";

    location = "login.html"
    // console.log(name.value , email.value , password.value);

}

// function login(){
//     var email = document.getElementById("l-email");
//     var password = document.getElementById("l-password");
//     var users = getUsers();
//     var saveUser = {};

//     for(var i = 0; i < users.length; i++){
//         if(email.value === users[i].email){
//             saveUser = users[i];
//             break;
//         }
//     }
//     if(saveUser.email){
//         if(saveUser.password === password.value){
//             console.log("User Login successfully")
//         }else{
//             console.log("Invalid Password")
//         }
//     }else{
//         console.log("User not Found");
//     }
    
// }



// ANOTHER WAY TO DO IT 

function login(){
    var email = document.getElementById("l-email");
    var password = document.getElementById("l-password");
    var users = getUsers();
    var isValid = false;

    for(var i = 0; i < users.length; i++){
        if(email.value === users[i].email && password.value === users[i].password){
            isValid = true;
            break;
        }
    }
    if(isValid){
            console.log("User Login successfully")
    }else{
        console.log("Email or Password is Invalid");
    }
    
}


// CHAP # 76

// window.location.href = "https://www.google.com";
// location.href = "https://www.google.com";

// var search = new URLSearchParams(window.location.search);
// search.get("q");

// location.assign("https://www.facebook.com");
// location.reload();
// location.hash;

// location.assign --> Yeh next page assign krta hai
// loaction.replace --> Current history ko replace krdy ga.


// HARD RELOAD (Page ko server sy doubara download krky laye ga ismai fast reload hota hai.)

window.location.reload(true) 

// BY DEFAULT FALSE HI HOTA HAI YEH 

window.location.reload(false)  // EMPTY CACHE

// chap 78 

history.back();
history.forward();

// SKIP MULTIPLE PAGES 
history.go(-2); // back 2 pages
history.go(2); //  Go 2 pages forward
