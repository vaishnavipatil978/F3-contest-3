
function showDetails(){

    let user = JSON.parse(localStorage.getItem('users')) || [];
    console.log(user);

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    name.innerHTML += user[0].name;
    email.innerHTML += user[0].email;
    password.innerHTML += user[0].password;

}

function logOut(){
    localStorage.clear();
    window.location.href = "index.html";
}

showDetails();