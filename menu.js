let food = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",
    price: "500",
    desc: "Delicious PanCakes",
    time: "30 Seconds",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",
    price: "500",
    desc: "Delicious PanCakes",
    time: "30 Seconds",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",
    price: "500",
    desc: "Delicious PanCakes",
    time: "30 Seconds",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",
    price: "500",
    desc: "Delicious PanCakes",
    time: "30 Seconds",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",
    price: "500",
    desc: "Delicious PanCakes",
    time: "30 Seconds",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",
    price: "500",
    desc: "Delicious PanCakes",
    time: "30 Seconds",
  }
];

let menu = document.getElementById("menu");

food.forEach(function(e) {
    let div = document.createElement("div");
    div.innerHTML = `<img src="${e.image}" alt="">
        <div id="details">
            <div>Price: ${e.price}</div>
            <div>Description: ${e.desc}</div>
            <div>Time to prepare: ${e.time}</div>
        </div>`;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.onclick = function(e){
        add_cart(e);
    }
    div.append(btn)
    menu.append(div)
})

// let cart = document.getElementById("cart");
function add_cart(e) {
    // let div = document.createElement("div");
    // div.innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" alt="">
    //     <div id="details">
    //         <div>Price: ${e.price}</div>
    //         <div>Description: ${e.desc}</div>
    //         <div>Time to prepare: ${e.time}</div>
    //     </div>`;
    // cart.append(div)
    // window.location.href = "cart.html"

    let cart = localStorage.getItem("cart")
    if(cart == null){
        cart = []
    }
    else{
        cart = JSON.parse(cart)
    }
    cart.push(e);

    localStorage.setItem("cart",JSON.stringify(cart));
    // window.location.href = "cart.html"
}