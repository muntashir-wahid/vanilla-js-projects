"use strict";

const sliderBtns = document.querySelectorAll(".slider-btn");
const heroBanner = document.querySelector(".hero-banner");
const bgImages = [
  "url('./img/maldives.jpg') no-repeat center center ",
  "url('./img/india.jpg') no-repeat center center ",
  "url('./img/hawaii.jpg') no-repeat center center ",
  "url('./img/himalaya.jpg') no-repeat center center ",
  "url('./img/beliaikin.jpg') no-repeat center center ",
];

for (let i = 0; i < sliderBtns.length; i++) {
  sliderBtns[i].addEventListener("click", function () {
    heroBanner.style.background = bgImages[i];
    heroBanner.style.backgroundSize = 'cover';
  });
}
