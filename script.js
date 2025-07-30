
const productContainer = document.getElementById("productContainer");
let allproducts = [];




async function loadProduct() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    allproducts = data.products;
    displayProducts(data.products);


}


function displayProducts(products) {
    products.map((product) => {
        const div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.padding = ".8rem";
        div.style.borderRadius = ".6rem";
        div.style.color = "black";
        div.innerHTML = `
        <img src ="${product.thumbnail}">
        <strong>Product Title</strong>: ${product.title}
        <strong>Product Price</strong>: ${product.price}
        <h2 style ="background-color: black; color:white; padding:.4rem;
         borderRadius: .5rem; text-align: center; border-radius: .5rem; 
         box-shadow: 3px 3px 8px black; cursor: pointer;">Add Cart</h2>
        `;
        productContainer.appendChild(div);
    });
}




function searchProducts() {
    const searchInput = document
        .getElementById("searchProducts")
        .value.toLowerCase();

    const filterproducts = allproducts.filter((product) =>
        product.title.toLowerCase().includes(searchInput)
    );

    productContainer.innerHTML = "";
    if (filterproducts.length == 0) {
        productContainer.innerHTML = "<p>No Products Found</p>";
        return
    }

    displayProducts(filterproducts);

}

loadProduct();