const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-container');
const menuBars = document.querySelectorAll('.menu-button span');

const buttonAnimation = (menuBtn, a_menu, menu_bars) => {
  menuBtn.addEventListener('click', function() {
    a_menu.classList.toggle('menu-open')

    menu_bars.forEach(bar => {
      bar.classList.toggle('clickMenu');
    })
  });
}

buttonAnimation(menuButton, menu, menuBars);
