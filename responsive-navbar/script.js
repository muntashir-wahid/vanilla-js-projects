"use strict";

// HTML Elements
const navMenu = document.querySelector(".nav-item__links");
const toggleBtn = document.querySelector(".nav-item__toggle-btn");

// Responsive nav
const responsiveNav = function () {
  // Functions
  const toggleNav = function (e) {
    // Prevent default
    e.preventDefault();

    navMenu.classList.toggle("active");
  };

  const hideNavEachClickOnLink = function (e) {
    const navLink = e.target.classList.contains("nav__link");
    if (navLink) navMenu.classList.remove("active");
  };

  // Event listeners
  toggleBtn.addEventListener("click", toggleNav);
  navMenu.addEventListener("click", hideNavEachClickOnLink);
};

responsiveNav();
