"use script";

const body = document.querySelector(".gradient");
const btn = document.querySelector(".btn");
const colorName = document.querySelector(".color-name");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let randomNumber = () => Math.trunc(Math.random() * hexValues.length);
let gradientDirection = () => Math.trunc(Math.random() * 180);

btn.addEventListener("click", function () {
  let colorOne = "#";
  let colorTwo = "#";
  for (let i = 0; i < 6; i++) {
    colorOne += hexValues[randomNumber()];
    colorTwo += hexValues[randomNumber()];
  }
  body.style.background = `linear-gradient(${gradientDirection()}deg, ${colorOne}, ${colorTwo})`;
  colorName.textContent = `linear-gradient(${gradientDirection()}deg, ${colorOne}, ${colorTwo})`;
});
