document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-register p a"); // Adjusted selector for login

    registerLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        wrapper.classList.add("active");
    });

    loginLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        wrapper.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Toggle E-commerce Section
    document.getElementById("ecommerceBtn").addEventListener("click", function () {
        document.getElementById("ecommerceSection").classList.toggle("hidden");
    });

    // Toggle Food Section
    document.querySelector(".glow-button:nth-child(2)").addEventListener("click", function () {
        document.getElementById("foodSection").classList.toggle("hidden");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Toggle Travel Section on Button Click
    document.querySelector(".glow-button:nth-child(3)").addEventListener("click", function () {
        document.getElementById("travelSection").classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("travelBtn").addEventListener("click", function () {
        document.getElementById("travelSection").classList.toggle("hidden");
    });
});

