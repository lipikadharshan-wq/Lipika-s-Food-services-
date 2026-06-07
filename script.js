let cart = [];
let total = 0;

function add(item, price) {
    cart.push(item);
    total += price;

    document.getElementById("cart").innerHTML =
        cart.map(i => "<li>" + i + "</li>").join("");

    document.getElementById("total").innerText = total;
}
