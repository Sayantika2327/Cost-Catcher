// Triggered from search input on main page (ecommerce.html)
function searchProduct() {
    const query = document.getElementById("searchQuery").value.trim().toLowerCase();

    if (query) {
        // Redirect to search results page
        window.location.href = `search.html?product=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a product name.");
    }
}

// Runs on search.html to fetch and display backend result
function fetchSearchResult() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("product");

    if (!query) return;

    fetch(`http://127.0.0.1:5000/search?product=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("result-container");

            if (data.error) {
                container.innerHTML = `<p style="color:red;">${data.error}</p>`;
            } else {
                let content = `<h2 style="width: 100%; text-align: center;">Search results for: ${query}</h2>`;

                data.forEach(product => {
                    // Build price rows only for available platforms
                    let priceContent = "";

                    if (product.amazon_price && product.amazon_price !== "undefined") {
                        priceContent += `
                            <p><strong>Amazon:</strong> ₹${product.amazon_price}
                                <a href="${product.amazon_link}" target="_blank"><button>Visit</button></a>
                            </p>
                        `;
                    }

                    if (product.flipkart_price && product.flipkart_price !== "undefined") {
                        priceContent += `
                            <p><strong>Flipkart:</strong> ₹${product.flipkart_price}
                                <a href="${product.flipkart_link}" target="_blank"><button>Visit</button></a>
                            </p>
                        `;
                    }

                    if (product.myntra_price && product.myntra_price !== "undefined") {
                        priceContent += `
                            <p><strong>Myntra:</strong> ₹${product.myntra_price}
                                <a href="${product.myntra_link}" target="_blank"><button>Visit</button></a>
                            </p>
                        `;
                    }

                    // Combine all into product card
                    content += `
                        <div class="product-card">
                            <img src="${product.image}" alt="${query}">
                            <div style="text-align:left; margin-top: 10px;">
                                ${priceContent || "<p style='color:red;'>No prices available</p>"}
                            </div>
                        </div>
                    `;
                });

                container.innerHTML = content;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("result-container").innerHTML = "<p style='color:red;'>Something went wrong. Please try again later.</p>";
        });
}
