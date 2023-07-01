//function for payment
if(!localStorage.getItem("cart")){
    window.location.href = "../cart/index.html";
  } else{
    let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
    function pay(e){
      var options = {
        key:"rzp_test_PV1oQ0oMtgXOsq",
        amount: cartTotal * 100,
        currency: "INR",
        name: "MyShop.",
        description: "This is your order",
        theme: {
          color: "#000",
        },
        image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
      };
    
      var rzpy = new Razorpay(options);
      rzpy.open();
      //cleared loacal storage
      localStorage.removeItem("cart");
      document.querySelector(".container").style.display ="flex";
      e.preventDefault();
    }
    // window.location.href = "../cart/index.html";
  };
  
  document.getElementById("gotohome").addEventListener("click",gotoHome);
  
  function gotoHome(){
    window.location.href = "../shop/index.html";
  };