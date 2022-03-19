"use strict";

// HTML Elements

const accordionContainer = document.querySelector(".accordion");

accordionContainer.addEventListener("click", function (e) {
  const accordionHeader = e.target.closest(".accordion-header");
  if (!accordionHeader) return;
  const { accordion } = accordionHeader.dataset;
  document
    .querySelector(`.accordion__item-${accordion}`)
    .classList.toggle("open");
  console.log(accordion);
});
