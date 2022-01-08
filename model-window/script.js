"use strict";

// HTML elements

const showBtnsEl = document.querySelectorAll('.show-btn');
const sectionsEl = document.querySelectorAll('.about');
const closeBtnsEl = document.querySelectorAll('.close-btn');
const overlayEl = document.querySelector(".overlay");

const showModel = function (section) {
  section.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};
const closeModel = function (section) {
  section.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

// click event 

for (let i = 0; i < showBtnsEl.length; i++) {
  showBtnsEl[i].addEventListener('click', function(){
    showModel(sectionsEl[i]);
  })
  closeBtnsEl[i].addEventListener('click', function(){
    closeModel(sectionsEl[i]);
  })
}

// esc button press event

document.addEventListener('keydown', function(e) {
  // console.log(e.key);
  if(e.key === 'Escape') {
    for (let i = 0; i < showBtnsEl.length; i++) {
        closeModel(sectionsEl[i]);
    }
  }
})