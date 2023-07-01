//if currUser is there the redirect to homepage
if(localStorage.getItem("currUser")){
    window.location.href ="../shop/index.html";
}



//getting login btn
const form = document.getElementById("form");

form.addEventListener("submit",login);

function login(event){
    event.preventDefault();

    //getting data from localStorage of signedup users
    let users = JSON.parse(localStorage.getItem("Users"));
    
    let emailVal = document.getElementById("email").value;
    let passVal = document.getElementById("pass").value;

    //if there is no user in localStorage
    if(!users){
        document.querySelector(".signup-err").style.display = "block";
        return;
    } else{
        document.querySelector(".signup-err").style.display = "none";
    }

    //checking if newUser email already exits in my userDatabase
    for(let i = 0; i < users.length;i++){
        if(users[i].email == emailVal && users[i].pass == passVal){
            
            //creating currUser var to
            var currUser = {
                fName : users[i].fName,
                lName : users[i].lName,
                email : emailVal,
                password : passVal,
                token : genAccessToken(16),
            }
        
            localStorage.setItem("currUser",JSON.stringify(currUser));
            console.log(currUser);
            
            //hiding error msg
            document.querySelector(".incorrect-pass").style.display = "none";

            //redirecting to shop page
            window.location.href = "../shop/index.html"
            return;
        }
    }
    document.querySelector(".incorrect-pass").style.display = "block";
}

//Generating token's
function genAccessToken(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}

function openMenu() {
    var menuBtn = document.getElementById("nav-links");
    if (menuBtn.style.display === "block") {
      menuBtn.style.display = "none";
    } else {
      menuBtn.style.display = "block";
    }
  }
