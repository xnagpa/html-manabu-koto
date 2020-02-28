const mainMenuToggler = document.querySelector('.js-main-menu-toggler');

function toggleMainMenuVisibility() {
  const mainMenu =  document.querySelector('.js-main-nav');
  const mainMenuList =  document.querySelector('.js-main-menu-list');

  mainMenu.classList.toggle('js-main-nav--minimized');
  mainMenuList.classList.toggle('visuallyhidden');
}

mainMenuToggler.addEventListener('click', () => {
  toggleMainMenuVisibility();
});



