const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuButton = document.querySelector('.burger-menu-button');
const burgerMenuIcon = document.querySelector('.burger-menu-button i')

burgerMenuButton.onclick = function(){
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open');
    burgerMenuIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
}