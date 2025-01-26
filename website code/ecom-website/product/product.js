// Select filter buttons and product cards
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

// Function to filter products based on selected category
function filterProducts(category) {
    productCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block'; // Show matching products
        } else {
            card.style.display = 'none'; // Hide non-matching products
        }
    });
}

// Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.getAttribute('data-category');
        filterProducts(category);
    });
});

// View Details functionality
productCards.forEach(card => {
    const viewDetailsButton = card.querySelector('.btn');
    const productName = card.querySelector('h3').textContent;
    const productPrice = card.querySelector('p').textContent;
    const productImage = card.querySelector('img').src;

    viewDetailsButton.textContent = 'View Details'; // Change button text to "View Details"

    viewDetailsButton.addEventListener('click', () => {
        // Redirect to the details page with product details as URL parameters
        const detailsUrl = `product-details.html?name=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}&image=${encodeURIComponent(productImage)}`;
        window.location.href = detailsUrl;
    });
});

// Show all products on page load
filterProducts('all');
