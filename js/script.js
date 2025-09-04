// MENU
const btnMenu = document.getElementById('burger');
const nav = document.getElementById('nav')
let isOpenMenu = false;

btnMenu.addEventListener('click', () => {
    if (isOpenMenu) {
        btnMenu.classList.remove('open')
        nav.classList.remove('open')
    } else {
        btnMenu.classList.add('open')
        nav.classList.add('open')
    }

    isOpenMenu = !isOpenMenu;    
    //console.log('MENU', isOpenMenu);
})

//Смена шапок при скролле
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const headerWrappers = document.querySelectorAll('.header__wrapper');
 
    const currentScrollY = window.scrollY;
    
  
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
    
        headerWrappers[0].classList.add('header__wrapper--hidden');
        headerWrappers[1].classList.remove('header__wrapper--hidden');
    } else {
        
        headerWrappers[0].classList.remove('header__wrapper--hidden');
        headerWrappers[1].classList.add('header__wrapper--hidden');
    }

    lastScrollY = currentScrollY;
});