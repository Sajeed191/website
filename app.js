// NAVIGATION
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// CONTACT FORM
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// PRODUCTS & CART LOGIC
const products = [
  { id: 1, name: "Business Planner", price: 25 },
  { id: 2, name: "Digital Analytics Suite", price: 49 }
];
let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartUI();
}
function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = '';
  cart.forEach((item, idx) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(idx);
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
  document.getElementById("cartTotal").textContent =
    "Total: $" + cart.reduce((sum, item) => sum + item.price, 0);
}
function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartUI();
}
function clearCart() {
  cart = [];
  updateCartUI();
}
function purchaseCart() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  updateCartUI();
}
window.onload = updateCartUI;
 
