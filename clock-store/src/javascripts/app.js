const mainMenu =  document.querySelector('.js-main-nav--minimized');
const mainMenuList =  document.querySelector('.js-main-menu-list');
const mainMenuToggler = document.querySelector('.js-main-menu-toggler');

function toggleMainMenuVisibility() {
  mainMenu.classList.toggle('js-main-nav--minimized');
  mainMenuList.classList.toggle('visuallyhidden');
}

mainMenuToggler.addEventListener('click', () => {
  toggleMainMenuVisibility();
});



