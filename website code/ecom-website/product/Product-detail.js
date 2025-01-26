// product-detail.js

// Product details for different items
const products = {
    "Rolls-Royce Phantom": {
        name: "Rolls-Royce Phantom",
        price: "Rs 12 Crores",
        images: [
            "/ecom-website/images/rolls-royce.jpg",
            "/ecom-website/images/rolls-royce-2.jpg",
            "/ecom-website/images/rolls-royce-3.jpg"
        ],
        description: "The Rolls-Royce Phantom is a symbol of ultimate luxury and sophistication, crafted to perfection.",
        taxInfo: "15% GST and other state taxes applicable."
    },
    "Bentley Continental GT": {
        name: "Bentley Continental GT",
        price: "Rs 8 Crores",
        images: [
            "/ecom-website/images/Bentley Continental GT.jpg",
            "/ecom-website/images/Bentley-continental-2.jpg",
            "/ecom-website/images/Bentley-continental-3.jpg"
        ],
        description: "A luxury coupe with powerful performance and unparalleled elegance.",
        taxInfo: "12% GST and additional taxes based on delivery location."
    },
    "Mercedes-Benz S-Class": {
        name: "Mercedes-Benz S-Class",
        price: "Rs 2.5 Crores",
        images: [
            "/ecom-website/images/Mercedes-Benz S-Class.jpg",
            "/ecom-website/images/Mercedes-S-Class-2.jpg",
            "/ecom-website/images/Mercedes-S-Class-3.jpg"
        ],
        description: "A blend of power, elegance, and cutting-edge technology for the discerning individual.",
        taxInfo: "18% GST and other applicable charges."
    },
    "Ducati Panigale V4": {
        name: "Ducati Panigale V4",
        price: "Rs 30 Lakhs",
        images: [
            "/ecom-website/images/Ducati Panigale V4.webp",
            "/ecom-website/images/Ducati-Panigale-V4-2.jpg",
            "/ecom-website/images/Ducati-Panigale-V4-3.jpg"
        ],
        description: "The Panigale V4 is designed for speed enthusiasts, delivering top-notch performance.",
        taxInfo: "28% GST applicable."
    },
    "Yamaha YZF-R1": {
        name: "Yamaha YZF-R1",
        price: "Rs 18 Lakhs",
        images: [
            "/ecom-website/images/Yamaha YZF-R1.webp",
            "/ecom-website/images/Yamaha-YZF-R1-2.jpg",
            "/ecom-website/images/Yamaha-YZF-R1-3.jpg"
        ],
        description: "A super sports bike that defines cutting-edge engineering with power and precision.",
        taxInfo: "28% GST applicable."
    },
    "Kawasaki Ninja H2": {
        name: "Kawasaki Ninja H2",
        price: "Rs 35 Lakhs",
        images: [
            "/ecom-website/images/Kawasaki Ninja H2.jpg",
            "/ecom-website/images/Kawasaki-Ninja-H2-2.jpg",
            "/ecom-website/images/Kawasaki-Ninja-H2-3.jpg"
        ],
        description: "A high-performance machine, engineered to push the boundaries of speed and innovation.",
        taxInfo: "28% GST applicable."
    },
    "Audi A8 (2018)": {
        name: "Audi A8 (2018)",
        price: "Rs 75 Lakhs",
        images: [
            "/ecom-website/images/Audi A8 (2018).jpg",
            "/ecom-website/images/Audi-A8-2018-2.jpg",
            "/ecom-website/images/Audi-A8-2018-3.jpg"
        ],
        description: "A top-tier luxury sedan that offers exceptional comfort, style, and performance.",
        taxInfo: "18% GST applicable."
    },
    "BMW 5 Series (2020)": {
        name: "BMW 5 Series (2020)",
        price: "Rs 55 Lakhs",
        images: [
            "/ecom-website/images/BMW 5 Series (2020).jpg",
            "/ecom-website/images/BMW-5-Series-2020-2.jpg",
            "/ecom-website/images/BMW-5-Series-2020-3.jpg"
        ],
        description: "A luxury sedan combining innovative technology and thrilling performance.",
        taxInfo: "18% GST applicable."
    },
    "Mercedes-Benz E-Class (2019)": {
        name: "Mercedes-Benz E-Class (2019)",
        price: "Rs 65 Lakhs",
        images: [
            "/ecom-website/images/Mercedes-Benz E-Class (2019).jpg",
            "/ecom-website/images/Mercedes-E-Class-2019-2.jpg",
            "/ecom-website/images/Mercedes-E-Class-2019-3.jpg"
        ],
        description: "A luxury sedan with advanced technology, comfort, and supreme performance.",
        taxInfo: "18% GST applicable."
    },
    "Harley-Davidson Street 750": {
        name: "Harley-Davidson Street 750",
        price: "Rs 10 Lakhs",
        images: [
            "/ecom-website/images/Harley-Davidson Street 750.jfif",
            "/ecom-website/images/Harley-Davidson-Street-750-2.jpg",
            "/ecom-website/images/Harley-Davidson-Street-750-3.jpg"
        ],
        description: "A cruiser bike that combines iconic Harley-Davidson style with smooth performance.",
        taxInfo: "28% GST applicable."
    },
    "Royal Enfield Classic 350": {
        name: "Royal Enfield Classic 350",
        price: "Rs 2 Lakhs",
        images: [
            "/ecom-website/images/Royal Enfield Classic 350.jfif",
            "/ecom-website/images/Royal-Enfield-Classic-350-2.jpg",
            "/ecom-website/images/Royal-Enfield-Classic-350-3.jpg"
        ],
        description: "A timeless classic with a powerful engine and signature style.",
        taxInfo: "28% GST applicable."
    },
    "Suzuki Intruder": {
        name: "Suzuki Intruder",
        price: "Rs 1.5 Lakhs",
        images: [
            "/ecom-website/images/Suzuki Intruder.png",
            "/ecom-website/images/Suzuki-Intruder-2.jpg",
            "/ecom-website/images/Suzuki-Intruder-3.jpg"
        ],
        description: "A cruiser bike designed for long rides, offering comfort and style.",
        taxInfo: "28% GST applicable."
    }
};

// Retrieve product details from URL parameters
const params = new URLSearchParams(window.location.search);
const productName = params.get('name');

// Get the product details for the selected product
const product = products[productName];

// Update the page content with product details
document.getElementById('product-name').textContent = product.name;
document.getElementById('product-price').textContent = product.price;
document.getElementById('product-description').textContent = product.description;
document.getElementById('tax-info').textContent = product.taxInfo;
document.getElementById('product-image').src = product.images[0];
document.querySelectorAll('.gallery-image')[0].src = product.images[1];
document.querySelectorAll('.gallery-image')[1].src = product.images[2];
