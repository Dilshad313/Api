let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
let data;

async function getDetails() {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  data = await res.json();

  document.getElementById("container2").innerHTML = `
    <div id="container1" style="display: flex; justify-content: center; align-items: center; gap: 50px; margin: 30px;">
      <div id="image">
        <img src="${data.image}" alt="${data.title}" width="300px" height="300px">
      </div>
      <div id="productDetails" style="display: flex; flex-direction: column; gap: 20px;">
        <div><b>Category:</b> ${data.category}</div>
        <div><b>Title:</b> ${data.title}</div>
        <div><b>Price:</b> $${data.price}</div>
        <div><b>Description:</b> ${data.description}</div>
        <div><b>Rating:</b> ${data.rating.rate} (${data.rating.count})</div>
      </div>
    </div>
    <div style="text-align:center; margin: 20px;">
      <button id="buy" style="background-color:green; color: white; width: 200px; height: 40px;">Buy Now</button>
      <button id="add" style="background-color:red; color: white; width: 200px; height: 40px;">Add to cart</button>
    </div>
  `;

  document.getElementById("add").addEventListener("click", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(data);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
    window.location.href = "./AddTo.html";
  });
}

getDetails();
