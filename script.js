'use strict';
//learn classList
const modeldata = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModel = document.querySelector('.close-modal');
const showModel = document.querySelectorAll('.show-modal');

const openView = function () {
  modeldata.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeView = function () {
  modeldata.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closesideclick = function () {
  modeldata.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModel.length; i++) {
  console.log('button clicked');
  showModel[i].addEventListener('click', openView);
  closeModel.addEventListener('click', closeView);
  overlay.addEventListener('click', closesideclick);
}
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    if (!modeldata.classList.contains('hidden')) {
      closeView();
    }
  }
});
