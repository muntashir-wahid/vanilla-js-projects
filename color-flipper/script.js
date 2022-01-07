"use strict";

// HTML Elements

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".btn");
const colorNameEl = document.querySelector(".color-name");

// Simple Colors

const colors = [
  "brown",
  "cyan",
  "darkblue",
  "darksalmon",
  "gold",
  "rgb(107, 66, 103)",
  "rgb(62, 161, 57)",
  "#001647",
  "#00ffbe",
  "#d977be",
];

// Color Flipper

const colorFlipper = function (color) {
  bodyEl.style.backgroundColor = color;
  colorNameEl.textContent = color;
};

const randomNumGen = () => Math.trunc(Math.random() * colors.length);

// Event Handler

btnEl.addEventListener("click", function () {
  const randomNum = randomNumGen();
  colorFlipper(colors[randomNum]);
});
