const mainMenu =  document.querySelector('.js-main-nav');
const mainMenuToggler = document.querySelector('.js-main-menu-toggler');
const mainMenuList =  document.querySelector('.js-main-menu-list');

function toggleMainMenuVisibility() {
  mainMenu.classList.toggle('js-main-nav--minimized');
  mainMenuList.classList.toggle('visuallyhidden');
}

mainMenuToggler.addEventListener('click', toggleMainMenuVisibility);



