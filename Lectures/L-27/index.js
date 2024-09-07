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

    // console.log(name.value , email.value , password.value);

}

function login(){
    var email = document.getElementById("l-email");
    var password = document.getElementById("l-password");
    var users = getUsers();

    for(var i = 0; i < users.length; i++){
        if(users == localStorage.getItem("users")){
            alert("user Exist");
        }else{
            alert("User doesn't exist")
        }
    }
    
}
