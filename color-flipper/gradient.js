"use script";

// HTML Elements

const bodyEl = document.querySelector(".gradient");
const btnEl = document.querySelector(".btn");
const colorNameEl = document.querySelector(".color-name");

// Gradient color flipper functionality

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const randomNumGen = () => Math.trunc(Math.random() * hexValues.length);

const gradientDirectionGen = () => Math.trunc(Math.random() * 180);

const colorFlipper = function (graDec, colorOne, colorTwo) {
  bodyEl.style.background = `linear-gradient(${graDec}deg, ${colorOne}, ${colorTwo})`;
  colorNameEl.textContent = `linear-gradient(${graDec}deg, ${colorOne}, ${colorTwo})`;
};

// Event handler

btnEl.addEventListener("click", function () {
  let colorOne = "#";
  let colorTwo = "#";
  const gradigentValue = gradientDirectionGen();

  for (let i = 0; i < 6; i++) {
    const randomNumOne = randomNumGen();
    const randomNumTwo = randomNumGen();

    colorOne += hexValues[randomNumOne];
    colorTwo += hexValues[randomNumTwo];
  }

  colorFlipper(gradigentValue, colorOne, colorTwo);
});
