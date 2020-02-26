const mainMenuButton = document.querySelector('.js-show-main-menu');
const logo = document.querySelector('.js-logo');
const hamburger = document.querySelector('.js-hamburger');
const close = document.querySelector('.js-close');
const mainMenu =  document.querySelector('.js-main-menu');

mainMenuButton.addEventListener('click', () => {
  mainMenu.classList.toggle('visuallyhidden');
  logo.classList.toggle('visuallyhidden');
  close.classList.toggle('visuallyhidden');
  hamburger.classList.toggle('visuallyhidden');
});
