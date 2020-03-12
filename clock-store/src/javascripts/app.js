const mainMenu =  document.querySelector('.js-main-nav');
const mainMenuToggler = document.querySelector('.js-main-menu-toggler');
const mainMenuList =  document.querySelector('.js-main-menu-list');

function toggleMainMenuVisibility() {
  mainMenu.classList.toggle('js-main-nav--open');
  mainMenuList.classList.toggle('visuallyhidden');
}

mainMenuToggler && mainMenuToggler.addEventListener('click', toggleMainMenuVisibility);



