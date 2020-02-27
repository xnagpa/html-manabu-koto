const mainMenu =  document.querySelector('.js-main-menu');
const mainMenuButton = document.querySelector('.js-show-main-menu-button');

const hamburgerIcon = mainMenuButton.querySelector('.js-hamburger-icon');
const closeIcon = mainMenuButton.querySelector('.js-close-icon');

mainMenuButton.addEventListener('click', () => {
  mainMenu.classList.toggle('visuallyhidden');
  closeIcon.classList.toggle('hidden');
  hamburgerIcon.classList.toggle('hidden');
});
