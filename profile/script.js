if(!localStorage.getItem("currUser")){
    window.location.href = "../login/index.html";
}

let users = JSON.parse(localStorage.getItem("Users"));
let currUser = JSON.parse(localStorage.getItem("currUser"));

const logoutBtn = document.getElementById("logout-btn");
const saveBtn = document.getElementById("saveInfo-btn");
const changePassForm = document.getElementById("pass-form");

const fName = document.getElementById("f-name");
const lName = document.getElementById("l-name");
fName.value = currUser.fName;
lName.value = currUser.lName;

const oldPass = document.getElementById("old-pass");
const newPass = document.getElementById("new-pass");
const cNewPass = document.getElementById("cnew-pass");

// for(let i=0; i < users.length; i++){
//     if(users[i].email != currUser.email){

//     }
// }

// fName.innerText = 

if(!localStorage.getItem("currUser")){
    window.location.href = "../login/index.html";
}

//removing current user on 
logoutBtn.addEventListener("click", ()=>{
    localStorage.removeItem("currUser");

    //redirecting user to login page
    window.location.href = "../login/index.html"

})

//updating user name on click of 
saveBtn.addEventListener("click",()=>{

    for(let i=0; i < users.length; i++){
        if(users[i].email == currUser.email){
            //updating users arrays
            users[i].fName = fName.value;
            users[i].lName = lName.value;

            //updating current user
            currUser.fName = fName.value;
            currUser.lName = lName.value;
            console.log(users,currUser);
        }
    };

    //updating local storage with updated values
    localStorage.setItem("Users",JSON.stringify(users));
    localStorage.setItem("currUser",JSON.stringify(currUser));

    //showing success message
    document.querySelector(".infoSaved-mess").style.display = "block";
});

//updating password onClick of Changepass btn
changePassForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(oldPass.value.trim());
    //checking if old pass and matches database password
    if(currUser.password == oldPass.value.trim()){
    
        //checking if newPass and ConfirmPass iS same
        if(newPass.value.trim() == cNewPass.value.trim()){

            console.log("2");
            for(let i=0; i < users.length; i++){
        
                if(users[i].email == currUser.email){
        
                    users[i].pass = newPass.value;
                    currUser.password = newPass.value;
                }
            }
            document.querySelector(".newpass-mismatch").style.display = "none";
            
        } else{
            //confirm pass and new pass is not same err
            document.querySelector(".newpass-mismatch").style.display = "block";
            document.querySelector(".err-old").style.display = "none";
            return
        }
        
    } else{
        //previous password not match err
        document.querySelector(".err-old").style.display = "block";
        document.querySelector(".newpass-mismatch").style.display = "none";
        return;
    }
    
    //updating local storage with updated values
    localStorage.setItem("Users",JSON.stringify(users));
    localStorage.setItem("currUser",JSON.stringify(currUser));
    
    document.querySelector(".pass-changed").style.display = "block";
    document.querySelector(".err-old").style.display = "none";
    document.querySelector(".newpass-mismatch").style.display = "none";
});

function openMenu() {
    var menuBtn = document.getElementById("nav-links");
    if (menuBtn.style.display === "block") {
      menuBtn.style.display = "none";
    } else {
      menuBtn.style.display = "block";
    }
  }