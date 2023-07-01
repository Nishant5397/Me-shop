//if currUser is there the redirect to homepage
if(localStorage.getItem("currUser")){
    window.location.href ="../shop/index.html";
};

//users array -> To store users
let users = [];

//targeting inputs
let fName = document.getElementById("f-name");
let lName = document.getElementById("l-name");
let eMail = document.getElementById("e-mail");
let pass = document.getElementById("pass");
let cpass = document.getElementById("c-pass");

//getting form 
const form = document.getElementById("form");

form.addEventListener("submit",signupUser);

function signupUser(event){
    event.preventDefault();

    //checking if any field is empty + if pass == confirmpass 
    if(fName.value.trim() == "" || lName.value.trim() == "" || eMail.value.trim() == "" || pass.value.trim() =="" || cpass.value.trim() == ""){
        document.querySelector(".error-fields").style.display = "block";
        return;
    } else{
        document.querySelector(".error-fields").style.display = "none";
        if(pass.value != cpass.value){
            console.log(pass,cpass);
            document.querySelector(".pass-mismatch").style.display = "block";
            return;
        }else{
            document.querySelector(".pass-mismatch").style.display = "none";
        }
    }

    //checking if users array is already present in local storage
    if(localStorage.getItem("Users")){
        users =  JSON.parse(localStorage.getItem("Users"));
        console.log(users);
    }else{
        //else initilize empty array
        users = [];
        console.log(users);
    }
    
    //creating user object
    var newUser = {
        fName: fName.value.trim(),
        lName: lName.value.trim(),
        email: eMail.value.trim(),
        pass: pass.value, 
    };

    //checking if newUser email already exits in my userDatabase
    for(let i = 0; i < users.length;i++){
        if(users[i].email == newUser.email){
            console.log(users[i].email,newUser.email);
            document.querySelector(".used-email").style.display ="block";
            eMail.style.border ="1.5px solid red";
            return;
        }
    }
    eMail.style.border ="1px solid black";
    document.querySelector(".used-email").style.display ="none";

    //appending newUser to the users array
    users.push(newUser);
    localStorage.setItem("Users",JSON.stringify(users));

    //redirecting to login page after sucessful signup
    window.location.href = "../login/index.html";
};

function openMenu() {
    var menuBtn = document.getElementById("nav-links");
    if (menuBtn.style.display === "block") {
      menuBtn.style.display = "none";
    } else {
      menuBtn.style.display = "block";
    }
  }