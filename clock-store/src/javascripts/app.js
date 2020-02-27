const mainMenu =  document.querySelector('.js-main-menu');
const mainMenuButton = document.querySelector('.js-show-main-menu-button');

const hamburgerIcon = mainMenuButton.querySelector('.js-hamburger-icon');
const closeIcon = mainMenuButton.querySelector('.js-close-icon');
const logoIcon = document.querySelector('.js-logo-icon');

mainMenuButton.addEventListener('click', () => {
  mainMenu.classList.toggle('visuallyhidden');
  logoIcon.classList.toggle('js-main-nav--hidden');
  closeIcon.classList.toggle('js-main-nav--hidden');
  hamburgerIcon.classList.toggle('js-main-nav--hidden');
});
