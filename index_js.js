
function submitForm(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    var msg = document.getElementById("msgDiv");

    if(!name ||!email || !password || !password2){
        msg.innerHTML = "Error : All fields are required";
        msg.style.color="red";
        return;
    }

    if(password!= password2){
        msg.innerHTML = "Error : Passwords do not match";
        msg.style.color="red";
        return;
    }

    var newUser = new user(name, email, password);

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = users.find((user) => user.email === email);
    if (userExists) {
      alert("User already exists");
      return;
    }

    msg.innerHTML = "Successfully Signed Up!";
    msg.style.color="green";

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("access_token", generateString()); 

    window.location.href = "profile.html";

}

function checkProfile(){
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
        return;
    }
    window.location.href = "profile.html";
}

function user(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;   
}


function generateString() {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 16; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}