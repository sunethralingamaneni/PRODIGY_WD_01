const navbar = document.getElementById("navbar");
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu > li > a"); // Only top-level menu items

// Change navbar color on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Close dropdowns
function closeDropdownMenu() {
    dropdown.forEach((drop) => drop.classList.remove("active"));
}

// Toggle Hamburger Menu
function toggleHamburger() {
    navMenu.classList.toggle("show");
}

// Toggle Dropdown Menu (without affecting main nav)
dropdownBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const dropdownElement = document.getElementById(this.dataset.dropdown);
        
        // Close all dropdowns before opening the clicked one
        dropdown.forEach((drop) => {
            if (drop !== dropdownElement) drop.classList.remove("active");
        });

        // Open only the selected dropdown
        dropdownElement.classList.toggle("active");
    });
});

// Close dropdowns when clicking outside
document.addEventListener("click", () => closeDropdownMenu());

// Close dropdowns on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdownMenu();
});

// Close dropdown when clicking a dropdown link
document.querySelectorAll(".dropdown a").forEach((dropdownLink) => {
    dropdownLink.addEventListener("click", () => closeDropdownMenu());
});

// Close hamburger menu when clicking a regular link
links.forEach((link) =>
    link.addEventListener("click", () => {
        navMenu.classList.remove("show"); // Only close main menu
        closeDropdownMenu();
    })
);

// Hamburger menu toggle event
hamburgerBtn.addEventListener("click", toggleHamburger);
