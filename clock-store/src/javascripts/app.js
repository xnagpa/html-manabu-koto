const mainMenu =  document.querySelector('.js-main-nav--minimized');
const mainMenuList =  document.querySelector('.js-main-menu-list');
const mainMenuToggler = document.querySelector('.js-main-menu-toggler');

mainMenuToggler.addEventListener('click', () => {
  //Hides main menu
  mainMenu.classList.toggle('js-main-nav--minimized');
  mainMenuList.classList.toggle('visuallyhidden');
});
