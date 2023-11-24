let username = document.getElementById("email")
let password = document.getElementById("password")


function loginform() {
    if (username == "") {
        document.getElementById('usererror').innerHTML = " * Please Enter a valid username"
        return false;
    }
    else{
        document.getElementById('usererror').innerHTML = "" 
    }

    if (password == ""){
        document.getElementById('pwderror').innerHTML = " *please Enter a valid password"
        
    }



}

function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_record.some((v) => {
        return v.email == email && v.password == password
    })){ 
    let current_user = user_record.filter((v) => {
        return v.email == email && password == password

    })[0]
    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    window.location.href="index.html";
}

    else {
        alert("User Not Registerd")

    }}


    


    













