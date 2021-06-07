let cartItems = JSON.parse(localStorage.getItem("cart"));

let cart = document.getElementById("cart");

cartItems.forEach(function(ele) {
    let div = document.createElement("div")
    div.innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" alt="">
        <div id="details">
            <div>Price: 500</div>
            <div>Description: Delicious PanCakes</div>
            <div>Time to prepare: 30 Seconds</div>
        </div>`;

    cart.append(div)
});

function submit() {
    alert("Your order is accepted")
    setTimeout(function(){
        alert("Your order is being cooked")
    },3000)
    setTimeout(function () {
      alert("Your order is ready");
    }, 8000);
    setTimeout(function () {
      alert("Order out for delievery");
    }, 10000);
    setTimeout(function () {
      alert("Order delievered");
    }, 12000);
}