"use strict";

const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const colorName = document.querySelector(".color-name");

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

const colorFlipper = function (color) {
  body.style.backgroundColor = color;
  colorName.textContent = color;
};

btn.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * colors.length);
  colorFlipper(colors[randomNumber]);
});
