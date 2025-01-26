// Selectors
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-btn');
const errorMessageContainer = document.getElementById('error-message'); // Container for error messages

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCart() {
    cartItemsContainer.innerHTML = ''; // Clear previous content
    errorMessageContainer.innerHTML = ''; // Clear previous error message

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElement.textContent = 'Rs 0';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        total += parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.price} x ${item.quantity}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalElement.textContent = `Rs ${total.toLocaleString()}`;

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            removeItem(index);
        });
    });
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1); // Remove the item from the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    renderCart(); // Re-render the cart
}

// Checkout button functionality
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        // Display error if cart is empty
        errorMessageContainer.textContent = 'Error: Your cart is empty. Please add items to the cart.';
        errorMessageContainer.style.color = 'red'; // You can change the style of the error message
    } else {
        // Display server down message if cart is not empty
        errorMessageContainer.textContent = 'Server is down now. Try again later.';
        errorMessageContainer.style.color = 'orange'; // You can change the style of the server message
    }
});

// Initial render
renderCart();
