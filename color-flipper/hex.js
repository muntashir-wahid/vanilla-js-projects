"use strict";

//HTML Elements

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".btn");
const colorNameEl = document.querySelector(".color-name");

// Color Flipper functionality

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const randomNumGen = () => Math.trunc(Math.random() * hexValues.length);

const colorFlipper = function (color) {
  bodyEl.style.backgroundColor = color;
  colorNameEl.textContent = color;
};

// Event Handler

btnEl.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNum = randomNumGen();
    hexColor += hexValues[randomNum];
  }
  colorFlipper(hexColor);
});
