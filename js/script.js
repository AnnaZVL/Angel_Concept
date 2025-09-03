// MENU
const btnMenu = document.querySelector('.btn__menu');
let isOpenMenu = false;

btnMenu.addEventListener('click', () => {
    isOpenMenu = !isOpenMenu;
    console.log('MENU', isOpenMenu);
})
