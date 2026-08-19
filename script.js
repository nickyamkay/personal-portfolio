// Mobile navigation
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Close the mobile menu after selecting a link
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});
