'use strict';

// HTML Elements 
const navLinkItems = document.querySelector('.nav-items__links');
const toggleBtn = document.querySelector('.toggle-btn');

// Responsive nav
const responsiveNav = function() {

    // Functions 
    const toggleNav = function() {
        navLinkItems.classList.toggle('active');
    };

    const removeActiveCls = function(e) {
        if (e.target.classList.contains('nav-link')) {
            navLinkItems.classList.remove('active')
        };
    };

    // Event listeners 
    toggleBtn.addEventListener('click', toggleNav);    
    navLinkItems.addEventListener('click', removeActiveCls);
};

responsiveNav();

