// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
let clearCartBtn = document.getElementById('clear-cart-btn');
let cartList = document.getElementById('cart-list');


// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
// Render cart list
function renderCart() {
  cartList.innerHTML = "";
 cart.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} `;
    cartList.appendChild(li);
  });
}

productList.addEventListener('click', (e)=>{
  if(e.target.classList.contains('add-to-cart-btn')) {
    let productId = Number(e.target.dataset.id);
    let selectedProduct = products.find((product)=>{
      return product.id === productId;
    })
    addToCart(selectedProduct);
  }
})
// Add item to cart
function addToCart(selectedProduct) {
  cart.push(selectedProduct);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  renderCart()
}

// Remove item from cart
function removeFromCart(productId) {

}

// Clear cart
clearCartBtn.addEventListener('click', () => {
  cart.length = 0;

  sessionStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
});

// Initial render
renderProducts();
renderCart();
