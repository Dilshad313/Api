let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  window.location.href = "index.html";
}

const container = document.getElementById("container2");
const totalPriceBox = document.getElementById("totalPrice");

function renderCart() {
  let str = '';
  let total = 0;

  cart.forEach((item, index) => {
    str += `
      <div class="card">
        <img src="${item.image}" width="150px" height="150px" />
        <h2>${item.title}</h2>
        <p>Category: ${item.category}</p>
        <p>Price: $${item.price}</p>
        <p>Rating: ${item.rating.rate} (${item.rating.count})</p>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    total += item.price;
  });

  container.innerHTML = str;
  totalPriceBox.innerHTML = `🛒 Total Price: $${total.toFixed(2)} for ${cart.length} item(s)`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  if (cart.length === 0) {
    window.location.href = "index.html"; 
  } else {
    renderCart();
  }
}

function placeholder(event) {
  event.preventDefault();
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html"; 
}

renderCart();
