let cart = [];

function addToCart(productName, price) {
    let item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>No items in cart.</p>";
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            count += item.quantity;
            cartItems.innerHTML += `<p>${item.name} (x${item.quantity}) - $${item.price * item.quantity}</p>`;
        });
    }

    cartTotal.innerText = total.toFixed(2);
    cartCount.innerText = count;
}

function clearCart() {
    cart = [];
    updateCartDisplay();
}

function placeOrder(event) {
    event.preventDefault();
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Order placed successfully!");
    cart = [];
    updateCartDisplay();
    document.querySelector("form").reset();
}
