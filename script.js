
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Retrieve saved cart
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");

    li.innerHTML = `${product.name} - $${product.price}
      <button class="add-to-cart-btn" data-id="${product.id}">
        Add to Cart
      </button>`;

    productList.appendChild(li);
  });
}

function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    cartList.appendChild(li);
  });
}

function addToCart(selectedProduct) {
  cart.push(selectedProduct);

  sessionStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const productId = Number(e.target.dataset.id);

    const selectedProduct = products.find((product) => {
      return product.id === productId;
    });

    if (selectedProduct) {
      addToCart(selectedProduct);
    }
  }
});

function clearCart() {
  cart.length = 0;

  sessionStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

clearCartBtn.addEventListener("click", clearCart);

// Initial rendering
renderProducts();
renderCart();
