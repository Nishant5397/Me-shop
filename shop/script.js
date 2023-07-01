//cehcking if user is logged in or not 
if (!localStorage.getItem("currUser")) {
    window.location.href = "../index.html";
  }
  
  
  let products;
  
  //if products array is not present then call the API
  if (!localStorage.getItem("products")) {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //setting json in local storage
        localStorage.setItem("products", JSON.stringify(data));
        products = data;
        showData(data);
      })
  } else {
    products = JSON.parse(localStorage.getItem("products"));
    showData(products);
  }
  
  
  function showData(arr) {
  
    //empting all containers
    document.getElementById("mens-section").innerHTML = "";
    document.getElementById("womens-section").innerHTML = "";
    document.getElementById("jewellery-section").innerHTML = "";
    document.getElementById("electronics-section").innerHTML = "";
    // const products = JSON.parse(localStorage.getItem("products"));
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].category == "men's clothing") {
        // console.log(products[i]);
  
        document.getElementById("mens-section").innerHTML += `
          <div class="item">
          <div class="img">
              <img src=${arr[i].image} alt="Item" height="200"/>
          </div>
            <div class="info">
              <div class="row">
                <div class="title">${arr[i].title}</div>
              </div>
              <div class="row">
                <div class="price">$${arr[i].price}</div>
                <div class="sized">S,M,L</div>
              </div>
              <div class="colors">
                Colors:
                <div class="row">
                  <div class="circle" style="background-color: #000"></div>
                  <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
              <div class="row">Rating: ${arr[i].rating.rate}</div>
            </div>
            <button id="addBtn" onClick="addToCart(event,${arr[i].id})">Add to Cart</button>`
      } else if (arr[i].category == "women's clothing") {
  
  
        document.getElementById("womens-section").innerHTML += `
          <div class="item">
          <div class="img">
              <img src=${arr[i].image} alt="Item" height="200"/>
          </div>
            <div class="info">
              <div class="row">
                <div class="title">${arr[i].title}</div>
              </div>
              <div class="row">
                <div class="price">$${arr[i].price}</div>
                <div class="sized">S,M,L</div>
              </div>
              <div class="colors">
                Colors:
                <div class="row">
                  <div class="circle" style="background-color: #000"></div>
                  <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
              <div class="row">Rating: ${arr[i].rating.rate}</div>
            </div>
            <button id="addBtn" onClick="addToCart(event,${arr[i].id})">Add to Cart</button>`
      } else if (arr[i].category == "jewelery") {
  
        document.getElementById("jewellery-section").innerHTML += `
          <div class="item">
          <div class="img">
              <img src=${arr[i].image} alt="Item" width="200"/>
          </div>
            <div class="info">
              <div class="row">
                <div class="title">${arr[i].title}</div>
              </div>
              <div class="row">
                <div class="price">$${arr[i].price}</div>
                <div class="sized">S,M,L</div>
              </div>
              <div class="colors">
                Colors:
                <div class="row">
                  <div class="circle" style="background-color: #000"></div>
                  <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
              <div class="row">Rating: ${arr[i].rating.rate}</div>
            </div>
            <button id="addBtn" onClick="addToCart(event,${arr[i].id})">Add to Cart</button>`
      } else if (arr[i].category == "electronics") {
  
        document.getElementById("electronics-section").innerHTML += `
          <div class="item">
          <div class="img">
              <img src=${arr[i].image} alt="Item" width="200"/>
          </div>
            <div class="info">
              <div class="row">
                <div class="title">${arr[i].title}</div>
              </div>
              <div class="row">
                <div class="price">$${arr[i].price}</div>
                <div class="sized">S,M,L</div>
              </div>
              <div class="colors">
                Colors:
                <div class="row">
                  <div class="circle" style="background-color: #000"></div>
                  <div class="circle" style="background-color: #4938af"></div>
                  <div class="circle" style="background-color: #203d3e"></div>
                </div>
              </div>
              <div class="row">Rating: ${arr[i].rating.rate}</div>
            </div>
            <button id="addBtn" onClick="addToCart(event,${arr[i].id})">Add to Cart</button>`
      }
    }
  };
  
  let cart = [];
  //creating empty cart
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  };
  
  //add to cart btn
  function addToCart(event, id) {
  
    //checking if product is already added
    if (event.target.innerText == "Added") {
      console.log("hi");
      return;
    } else {
      event.target.innerText = "Added";
    }
  
    let products = JSON.parse(localStorage.getItem("products"));
  
  
    for (let i = 0; i < products.length; i++) {
  
      if (id == products[i].id) {
  
        let itemToAdd = products[i];
        cart.push(itemToAdd);
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  };
  
  //setting active class to the active category
  let categorySelected = "all"
  function allCat(e) {
    categorySelected = "all";
    removeActiveClass();
    e.setAttribute("class", "filter active");
    filterCat();
  }
  
  function mensCat(e) {
    categorySelected = "men's clothing";
    removeActiveClass();
    e.setAttribute("class", "filter active");
    filterCat();
  };
  
  function womensCat(e) {
    categorySelected = "women's clothing";
    removeActiveClass();
    e.setAttribute("class", "filter active");
    filterCat();
  };
  
  function jwelCat(e) {
    categorySelected = "jewelery";
    removeActiveClass();
    e.setAttribute("class", "filter active");
    filterCat();
  };
  
  function electronicCat(e) {
    categorySelected = "electronics";
    removeActiveClass();
    e.setAttribute("class", "filter active");
    filterCat();
  };
  
  
  //search & filter function
  // let filteredItems = products;
  let range0_25 = false;
  let range25_50 = false;
  let range50_100 = false;
  let range100_or = false;
  
  function filterCat() {
    if (categorySelected == "all") return filterSearch(products);
    console.log(products);
    let filterByCat = products.filter((i) => {
      if (i.category == categorySelected) return true;
      return false;
    })
    return filterSearch(filterByCat);
  }
  
  
  function filterSearch(arr) {
  
    let searchVal = document.getElementById("search-bar").value;
    if (searchVal == "") {
      filterRating(arr);
    } else {
      var input = searchVal.trim().toLowerCase();
      var filteredBySearch = arr.filter((i) => i.title.toLowerCase().includes(input));
      // console.log(filteredItems);
      return filterRating(filteredBySearch);
    }
  };
  
  function filterRating(arr) {
    let ratingVal = document.getElementById("range").value;
    if (ratingVal == 0) {
      filterByRange(arr);
      return;
    } else {
      var input = ratingVal;
      var filteredByRating = arr.filter((i) => {
        if (Math.floor(i.rating.rate) == input) {
          return true;
        } else { return false };
      });
      // console.log(filteredByRating);
    }
    filterByRange(filteredByRating);
  };
  
  function filterByRange(arr) {
    if (!range0_25 && !range25_50 && !range50_100 && !range100_or) return showData(arr);
  
    let filteredItems = arr.filter((i) => {
      if (r1(i) || r2(i) || r3(i) || r4(i)) return true;
      return false;
    });
    // console.log(filteredItems);
    return showData(filteredItems);
    function r1(elem) {
      if (!range0_25) { return false; }
      else if (elem.price >= 0 && elem.price <= 25) {
        return true;
      }
      return false;
    }
    function r2(elem) {
      if (!range25_50) { return false; }
      else if (elem.price >= 25 && elem.price <= 50) {
        return true;
      }
      return false;
    }
    function r3(elem) {
      if (!range50_100) { return false; }
      else if (elem.price >= 50 && elem.price <= 100) {
        return true;
      }
      return false;
    }
    function r4(elem) {
      if (!range100_or) { return false; }
      else if (elem.price >= 100) {
        return true;
      }
      return false;
    }
  }
  
  function removeActiveClass() {
    document.getElementById("filter-all").setAttribute("class", "filter");
    document.getElementById("filter-mens").setAttribute("class", "filter");
    document.getElementById("filter-womens").setAttribute("class", "filter");
    document.getElementById("filter-jewellery").setAttribute("class", "filter");
    document.getElementById("filter-electronics").setAttribute("class", "filter");
  };
  
  function selectRange(e) {
    if (e.value == "0-25") {
      range0_25 = !range0_25;
    } else if (e.value == "25-50") {
      range25_50 = !range25_50;
    } else if (e.value == "50-100") {
      range50_100 = !range50_100;
    } else if (e.value == "100-on") {
      range100_or = !range100_or;
    };
    return filterCat();
  }
  
  
  function openMenu() {
    var menuBtn = document.getElementById("nav-links");
    if (menuBtn.style.display === "block") {
      menuBtn.style.display = "none";
    } else {
      menuBtn.style.display = "block";
    }
  }