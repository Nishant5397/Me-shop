// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

//if user is alredy logged in
if(localStorage.getItem("currUser")){
    window.location.href = "./shop/index.html";
}

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

loginBtn.addEventListener("click", ()=>{
    window.location.href = "./login/index.html";
});

signupBtn.addEventListener("click",()=>{
    window.location.href ="./signup/index.html"
});

function openMenu() {
    var menuBtn = document.getElementById("nav-links");
    if (menuBtn.style.display === "block") {
      menuBtn.style.display = "none";
    } else {
      menuBtn.style.display = "block";
    }
  }