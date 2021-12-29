'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClodeModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModel);

const showModelWindow = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', showModelWindow);
}

const hideModelWindow = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnClodeModel.addEventListener('click', hideModelWindow);
overlay.addEventListener('click', hideModelWindow);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    hideModelWindow();
  }
})