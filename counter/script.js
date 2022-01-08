"use strict";

// html elements

let currentEl = document.querySelector(".current");
let holdEl = document.querySelector(".hold");
const decreaseBtnEl = document.querySelector(".decrease");
const resetBtnEl = document.querySelector(".reset");
const increaseBtnEl = document.querySelector(".increase");
const holdBtnEl = document.querySelector(".hold-btn");
const resetAllBtnEl = document.querySelector(".reset-all");

let countValue = 0;
let holdValue = 0;

const counterView = function () {
  currentEl.textContent = countValue;
};
const holdValueViwer = function () {
  holdEl.textContent = holdValue;
};

const counterColor = function () {
  if (countValue === 0) {
    currentEl.style.color = "black";
  } else if (countValue > 0) {
    currentEl.style.color = "green";
  } else if (countValue < 0) {
    currentEl.style.color = "red";
  }
};

increaseBtnEl.addEventListener("click", function () {
  countValue++;
  counterView();
  counterColor();
});

decreaseBtnEl.addEventListener("click", function () {
  countValue--;
  counterView();
  counterColor();
});

resetBtnEl.addEventListener("click", function () {
  countValue = 0;
  counterView();
  counterColor();
});

holdBtnEl.addEventListener("click", function () {
  holdValue = countValue;
  holdValueViwer();
});

resetAllBtnEl.addEventListener("click", function () {
  countValue = 0;
  holdValue = 0;
  counterView();
  counterColor();
  holdValueViwer();
});
