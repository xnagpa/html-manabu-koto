const mainMenuButton = document.querySelector('.js-show-main-menu');
const mainMenu =  document.querySelector('.js-main-menu');
mainMenuButton.addEventListener('click', () => {
  mainMenu.classList.toggle('visuallyhidden');
});
