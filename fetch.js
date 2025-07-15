async function fetchdata() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    let str = ``;

    products.map((pro) => {
      str += `
        <div class="card">
          <a style="text-decoration: none;color: inherit;" href="./details.html?id=${pro.id}">
            <img src="${pro.image}" alt="${pro.title}" width="170px" height="170px">
            <h2 style="color: red;">${pro.title}</h2>
            <h3 style="color: gray;">Price: $${pro.price}</h3>
            <p>Category: ${pro.category}</p>
            <p>${pro.description}</p><br>
            <p>Rate: ${pro.rating.rate}</p>
          </a>
        </div>
      `;
    });

    document.getElementById("container").innerHTML = str;
  } catch (error) {
    console.log(error);
  }
}

fetchdata();
