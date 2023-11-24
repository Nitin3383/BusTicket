function validation() {
    let username = document.getElementById("username").value
    let email = document.getElementById("useremail").value
    let password = document.getElementById("password").value




    let usercheck = /^[A-Za-z.]{3,30}$/;
    let passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let emailcheck = /^[A-Za-z_.0-9]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z.0-9]{2,6}$/;

    if (usercheck.test(username)) {
        document.getElementById("usererror").innerText = ""

    }


    else {
        document.getElementById("usererror").innerText = "* Username is invalid"


    }
    if (emailcheck.test(email)) {
        document.getElementById("emailerror").innerText = ""
    } else {
        document.getElementById("emailerror").innerText = "* Email is invalid"


    }

    if (passwordcheck.test(password)) {
        document.getElementById("pwderror").innerText = ""
        window.location.href = "login.html";


    } else {
        document.getElementById("pwderror").innerText = "* Password is invalid"


    }
}

function signup(){
   let name= document.getElementById("username").value;
   let email= document.getElementById("useremail").value
   let password= document.getElementById("password").value

localStorage.setItem("name1",name)
localStorage.setItem("email1",email)
localStorage.setItem("password1",password)

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.email == email



    })) {
        alert("duplicate data")
        window.location.href="signup.html"
    }
    else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password,
        })

        localStorage.setItem("users", JSON.stringify(user_records))
        alert("Registerd Suceesfully")
    }
}







