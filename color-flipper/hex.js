"use strict";

const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const colorName = document.querySelector(".color-name");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let randomNumber = function () {
  return Math.trunc(Math.random() * hexValues.length);
};

const colorFlipper = function (color) {
  body.style.backgroundColor = color;
  colorName.textContent = color;
};

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexValues[randomNumber()];
  }
  colorFlipper(hexColor);
});
