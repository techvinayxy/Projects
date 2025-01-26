// Select elements
const cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage
const productCards = document.querySelectorAll('.product-card');
const cartCountElement = document.getElementById('cart-count'); // Cart count display

// Function to render cart in console (extendable to UI)
function renderCart() {
    console.clear();
    console.log('Current Cart:', cart);
    updateCartCount(); // Update cart count on cart button
}

// Function to update the cart count in the UI
function updateCartCount() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCountElement.textContent = totalItems; // Update cart count display
}

// Function to add an item to the cart
function addToCart(product) {
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
        cart.push(product); // Add new product to cart
    }

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Add event listeners to all "Add to Cart" buttons
productCards.forEach(card => {
    const button = card.querySelector('.btn');
    const name = card.querySelector('h3').textContent;
    const price = card.querySelector('p').textContent;
    const imageSrc = card.querySelector('img').src;

    button.addEventListener('click', () => {
        const product = {
            name: name,
            price: price,
            image: imageSrc,
            quantity: 1
        };

        addToCart(product);
    });
});

// On page load, render cart count based on localStorage
document.addEventListener('DOMContentLoaded', updateCartCount);
