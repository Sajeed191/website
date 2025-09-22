// Product sample data
const products = [
  { id: 1, name: "Wireless Headphones", price: 79.99, stock: 23, image: "img1.jpg" },
  { id: 2, name: "Smartwatch Pro", price: 199.99, stock: 10, image: "img2.jpg" }
];

// Cart logic
let cart = [];

// Show products in grid
function renderProducts() {
  const main = document.getElementById('mainContent');
  main.innerHTML = products.map(p =>
    `<div class="product">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`
  ).join('');
}

// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push({ ...product, qty: 1 });
  updateCartCount();
}

// Update cart icon count
function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.length;
}

// Basic admin controls: add / remove product
function addProduct(name, price, stock, image) {
  products.push({ id: Date.now(), name, price, stock, image });
  renderProducts();
}
function deleteProduct(id) {
  const index = products.findIndex(p => p.id === id);
  if (index > -1) products.splice(index, 1);
  renderProducts();
}

// On page load
document.addEventListener('DOMContentLoaded', renderProducts);
 
