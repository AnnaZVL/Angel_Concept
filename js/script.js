// MENU
const btnMenu = document.getElementById('burger');
const btnArrow = document.getElementById('top-arrow');
const menuTop = document.getElementById('menu-top');
const menuBottom = document.getElementById('menu-bottom');

let isOpenMenu = false;
let isOpenMenuBottom = false;

// // Открытие бургер меню
document.addEventListener('click', (event) => {
    const target = event.target;
    
    // Клик по бургеру
    if (target.closest('.btn__nav')) {        
        if (isOpenMenu) {
            console.log('1');
            btnMenu.classList.remove('open');
            menuTop.classList.remove('open');
        } else {            
            btnMenu.classList.add('open');
            menuTop.classList.add('open');
        }
        isOpenMenu = !isOpenMenu;
    }
    
    // Клик по стрелке
    else if (target.closest('#top-arrow')) {       
        event.stopPropagation();
        if (isOpenMenuBottom) {            
            btnArrow.classList.remove('open');
            menuBottom.classList.remove('open');
        } else {            
            btnArrow.classList.add('open');
            menuBottom.classList.add('open');
        }
        isOpenMenuBottom = !isOpenMenuBottom;
    }
    
    // Клик вне меню
    else {
        if (isOpenMenu) {
            btnMenu.classList.remove('open');
            menuTop.classList.remove('open');
            isOpenMenu = false;
        }
        if (isOpenMenuBottom) {
            btnArrow.classList.remove('open');
            menuBottom.classList.remove('open');
            isOpenMenuBottom = false;
        }
    }
});

//Смена шапок при скролле
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const headerWrappers = document.querySelectorAll('.header__wrapper');
 
    const currentScrollY = window.scrollY;    
  
    if (currentScrollY > lastScrollY && currentScrollY > 100) {    
        headerWrappers[0].classList.add('header__wrapper--hidden');
        headerWrappers[1].classList.remove('header__wrapper--hidden');
    } else if(!isOpenMenuBottom || !isOpenMenu) {        
        headerWrappers[0].classList.remove('header__wrapper--hidden');
        headerWrappers[1].classList.add('header__wrapper--hidden');       
    }

    lastScrollY = currentScrollY;
});