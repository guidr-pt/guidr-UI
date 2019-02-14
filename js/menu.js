const toggleMenu = () => {
  menu.classList.toggle('menu--open')
}
function addClassMenu() {
        this.classList.toggle("clickMenu");
    }


const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');


menu.addEventListener('click', addClassMenu);

menuButton.addEventListener('click', toggleMenu);
