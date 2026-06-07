// Welcome Message
window.onload = function () {
    console.log("Lipika's Food & Services Loaded Successfully!");
};

// Add To Cart Function
let cart = [];
let total = 0;

function addToCart(item, price) {

    cart.push({
        name: item,
        price: price
    });

    total += price;

    updateCart();

    alert(item + " added to cart!");
}

// Update Cart
function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const totalPrice =
        document.getElementById("totalPrice");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    cart.forEach(food => {

        let li =
            document.createElement("li");

        li.innerHTML =
            food.name + " - ₹" + food.price;

        cartItems.appendChild(li);

    });

    if (totalPrice) {
        totalPrice.innerHTML = total;
    }
}

// Clear Cart
function clearCart() {

    cart = [];

    total = 0;

    updateCart();

    alert("Cart Cleared");
}

// Place Order
function placeOrder() {

    if (cart.length === 0) {

        alert("Your Cart is Empty!");

        return;
    }

    alert(
        "Order Placed Successfully!\n\nTotal Amount: ₹" +
        total
    );

    cart = [];

    total = 0;

    updateCart();
}

// Scroll Animation
window.addEventListener("scroll", () => {

    const sections =
        document.querySelectorAll("section");

    sections.forEach(section => {

        const position =
            section.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 100) {

            section.style.opacity = "1";
            section.style.transform =
                "translateY(0px)";
        }
    });
});
