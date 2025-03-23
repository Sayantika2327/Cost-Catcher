let products = []; // Store uploaded product images

// Function to upload and display images
function uploadImage() {
    const input = document.getElementById("imageUpload");
    const gallery = document.getElementById("imageGallery");

    if (input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("product-item");

            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = "Product Image";

            const name = prompt("Enter product name:");
            const productName = document.createElement("p");
            productName.textContent = name;

            imgContainer.appendChild(img);
            imgContainer.appendChild(productName);
            gallery.appendChild(imgContainer);

            products.push({ name: name.toLowerCase(), element: imgContainer });
        };

        reader.readAsDataURL(file);
    }
}

// Function to search products
function searchProducts() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    products.forEach(product => {
        product.element.style.display = product.name.includes(query) ? "block" : "none";
    });
}
