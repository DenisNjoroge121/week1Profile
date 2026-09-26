// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {


// Mobile navigation toggle
const nav = document.querySelector("nav");
const navButton = document.createElement("button");

navButton.textContent = "☰ Menu";
navButton.classList.add("menu-button");

nav.parentNode.insertBefore(navButton, nav);

navButton.addEventListener("click", function () {
    nav.classList.toggle("show");
});

// Close the mobile menu after clicking a link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("show");
    });
});

// Dark mode toggle
const themeButton = document.createElement("button");

themeButton.textContent = "🌙 Dark Mode";
themeButton.classList.add("theme-button");

document.querySelector("header").appendChild(themeButton);

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});

// Welcome message
console.log("Welcome to Denis Njoroge's portfolio!");


});
