const cartContainer = document.getElementById("cart-container");
const cartList = document.getElementById("checkout-container");

let cart;
let count = 0;
let cartTotal = 0;
let cartT = true;

//checking if user is logged in or not
if(!localStorage.getItem("currUser")){
  window.location.href ="../index.html"
}

//cehcking if cart item is empty then showing empty message
if(!localStorage.getItem("cart")){
    cartContainer.innerHTML = `<h1 class=empty-cart><i class="fa-solid fa-cart-plus" style="color: #000000;"></i> You have no items in cart.</h1>`
    cartList.style.display = "none";
    document.querySelector(".main-content").style.justifyContent = "center";
    cartContainer.style.paddingLeft ="0";
    cartContainer.style.paddingTop ="20vh";
    document.getElementById("cart-container").style.justifyContent = "center";
} else{
    showCartItem();
}

//adding items to the cart from array in localStorage
function showCartItem(){
 cart = JSON.parse(localStorage.getItem("cart"));

 cartContainer.innerHTML= "";

 if(cart.length == 0){
    cartContainer.innerHTML = `<h1 class=empty-cart><i class="fa-solid fa-cart-plus" style="color: #000000;"></i> You have no items in cart.</h1>`
    cartList.style.display = "none";
    document.querySelector(".main-content").style.justifyContent = "center";
    cartContainer.style.paddingLeft ="0";
    cartContainer.style.paddingTop ="20vh";
    document.getElementById("cart-container").style.justifyContent = "center";
 };
 
 document.getElementById("checkout-list").innerHTML ="";
  for(let i=0; i < cart.length; i++){
      count++;
      cartContainer.innerHTML += `
      <div class="item">
      <div class="img">
        <img src="${cart[i].image}" alt="Item" height = "200"/>
      </div>
      <div class="info">
        <div class="row">
          <div class="title">Title : ${cart[i].title}</div>
        </div>
        <div class="price">Price : $${cart[i].price}</div>
      </div>
      <button id="addBtn" onClick="removeCartItem(event,${cart[i].id})">Remove From Cart</button>
    </div>`

    document.getElementById("checkout-list").innerHTML +=`
    <div class="cart-item">
              <div class="cart-title">
                <div class="item-no">${count}.</div>
                <div class="item-name">${cart[i].title}</div>
              </div>
              <div class="item-price">$${cart[i].price}</div>
            </div>
    `
    if(cartT){
      cartTotal += cart[i].price;
    }
  }
  cartT = false;
  document.getElementById("checkout-list").innerHTML += `
  <div class="cart-total">
    <div class="title-total">Total</div>
    <div class="total-price">$${cartTotal}/-</div>
  </div>`
}

//removing items from cart and localStorage
function removeCartItem(event,id){
  count--;
    for(let i =0; i < cart.length;i++){
      if(cart[i].id == id){
        cartTotal =cartTotal - cart[i].price;
        cart.splice(i,1);
        // console.log(cart);
        // console.log(i);
      }
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    showCartItem();
}

//checking out cart
let checkOutBtn = document.getElementById("checkout-btn");
checkOutBtn.addEventListener("click",()=>{
  localStorage.setItem("cartTotal",JSON.stringify(`${cartTotal}`));
  window.location.href ="../razorpay/index.html";
});

function openMenu() {
  var menuBtn = document.getElementById("nav-links");
  if (menuBtn.style.display === "block") {
    menuBtn.style.display = "none";
  } else {
    menuBtn.style.display = "block";
  }
}
