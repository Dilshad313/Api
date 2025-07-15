let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("container2");
let str = '';
let total = 0;

cart.forEach((item) => {
  str += `
    <div class="card">
      <img src="${item.image}" width="150px" height="150px" />
      <h2>${item.title}</h2>
      <p>Category: ${item.category}</p>
      <p>Price: $${item.price}</p>
      <p>Rating: ${item.rating.rate} (${item.rating.count})</p>
    </div>
  `;
  total += item.price;
});

container.innerHTML = str;
document.getElementById("totalPrice").innerHTML = `🛒 Total Price: $${total.toFixed(2)} for ${cart.length} items`;
