let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle menu visibility
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x"); // Change icon
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    }
});
