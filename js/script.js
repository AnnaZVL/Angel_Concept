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
        btnArrow.classList.remove('open');
        menuBottom.classList.remove('open'); 
        btnMenu.classList.remove('open');
        menuTop.classList.remove('open');
        isOpenMenuBottom = false;
        isOpenMenu = false;
    } else if(!isOpenMenuBottom || !isOpenMenu) {              
        headerWrappers[0].classList.remove('header__wrapper--hidden');
        headerWrappers[1].classList.add('header__wrapper--hidden');      
    } 

    lastScrollY = currentScrollY;
});

// Слайдер карточек
const cardsSlide = document.querySelectorAll('[data-card]')
let activeCard = 1;
const heroImages = [
    {
        id: 1,
        src: './images/slides/slide_1.png'
    },
    {
        id: 2,
        src: './images/slides/slide_2.png'
    },
    {
        id: 3,
        src: './images/slides/slide_3.png'
    },
     {
        id: 4,
        src: './images/slides/slide_4.png'
    },
     {
        id: 5,
        src: './images/slides/slide_5.png'
    },
    {
        id: 6,
        src: './images/slides/slide_6.png'
    },
]
function setActiveSlide(id) {
    cardsSlide.forEach(card => {
        const cardId = +card.dataset.card;
        if (id === cardId) {
            card.classList.add('slide--active');
            card.classList.remove('slide--def');
        } else {
            card.classList.remove('slide--active');
            card.classList.add('slide--def');
        }
        changeHeroImage(id)
        activeCard = cardId;     
    });
}

function changeHeroImage(id) {    
    const heroImage = document.getElementById('hero-bg');    

    const newImage = new Image();
    const newSrc = heroImages.find(img => img.id === id);
   
    newImage.src = newSrc.src
    
    newImage.onload = function() {        
        heroImage.style.opacity = '0';
        setTimeout(() => {
            heroImage.src = newImage.src;
            heroImage.style.opacity = '1';
        }, 300);
    };
}

cardsSlide.forEach(card => {
    const btn = card.querySelector('.slide__btn');
    const id = +card.dataset.card;    

    btn.addEventListener('click', () => { 
        setActiveSlide(id)
    })

})

setActiveSlide(1)
