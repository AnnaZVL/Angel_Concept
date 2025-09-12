const btnArrow = document.getElementById('top-arrow');
const menuBottom = document.getElementById('menu-bottom');
const menuTop = document.getElementById('menu-top');
const linkSubmenu = document.querySelector('.menu-top__item--submenu');
const listElemSubmenu = document.querySelectorAll('[data-submenu]');
const headerRights = document.querySelectorAll('.header__right')
const inner = document.getElementById('inner');
const burgerInner = document.getElementById('burger-inner');
const logo = document.getElementById('logo');    
const header =  document.getElementById('header');
const burger = document.getElementById('burger');
const burgerBtn = document.querySelector('.burger-btn');

const currentScrollY = window.scrollY;    

let isOpenMenu = false;
let lastScrollY = window.scrollY;
let hasScroll = false;

linkSubmenu.addEventListener('mouseenter', () => {    
    if (hasScroll) return;

    menuBottom.classList.add('open');
    isOpenMenu = true;

    listElemSubmenu.forEach(elem => {    
        elem.classList.add('color');           
    })

    headerRights[0].classList.remove('visible');
    headerRights[1].classList.add('visible');
    btnArrow.classList.add('open');    
});

menuBottom.addEventListener('mouseleave', (e) => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    
    if (!menuBottom.contains(e.relatedTarget)) {  
        menuBottom.classList.remove('open');

        isOpenMenu = false;

        listElemSubmenu.forEach(elem => {        
            elem.classList.remove('color');
        })

        headerRights[1].classList.remove('visible');
        headerRights[0].classList.add('visible');
        btnArrow.classList.remove('open');
    }    
})

// Открытие бургер меню
burger.addEventListener('click', (event) => {  
    const target = event.target;

    menuBottom.classList.toggle('open');
    if (menuBottom.classList.contains('open')) {
        isOpenMenu = true;
    } else {
        isOpenMenu = false;
    }

    document.body.style.overflow = isOpenMenu ? 'hidden' : 'scroll';
    
    listElemSubmenu.forEach(elem => {    
        elem.classList.toggle('color');           
    })

    headerRights[0].classList.toggle('visible');
    headerRights[1].classList.toggle('visible'); 
    
    burgerBtn.classList.toggle('open');    
});

//Смена шапок при скролле
window.addEventListener('scroll', () => {    
    const currentScrollY = window.scrollY;     

    if (isOpenMenu) return;

    if (currentScrollY > lastScrollY && currentScrollY > 100) { 
        hasScroll = true;

        inner.classList.add('hidden');
        burgerInner.classList.remove('hidden');
        logo.classList.add('small');
        header.classList.add('color');

        headerRights[0].classList.remove('visible');
        headerRights[1].classList.add('visible');        
    } else if(!isOpenMenu) { 
        hasScroll = false;

        inner.classList.remove('hidden');
        burgerInner.classList.add('hidden'); 
        logo.classList.remove('small') 
        header.classList.remove('color');  
        
        headerRights[1].classList.remove('visible');
        headerRights[0].classList.add('visible');   
        menuTop.classList.remove('color');         
    } 

    lastScrollY = currentScrollY;
});

// Слайдер карточек
// const cardsSlide = document.querySelectorAll('[data-card]')
// let slideInterval;
// let currentSlideId = 1;

// const heroImages = [
//     {
//         id: 1,
//         src: './images/slides/slide_1.png',
//         text: `Ангел Concept &mdash;центр премиального ухода и&nbsp;косметологии в&nbsp;Ставрополе`,
//     },
//     {
//         id: 2,
//         src: './images/slides/slide_2.webp',
//         text: `Коррекция фигуры и&nbsp;силуэта`,
//     },
//     {
//         id: 3,
//         src: './images/slides/slide_3.webp',
//         text: `SPA и&nbsp;европейские массажи`,
//     },
//      {
//         id: 4,
//         src: './images/slides/slide_4.webp',
//         text: `Велнес-программы и&nbsp;флоатация`,
//     },
//      {
//         id: 5,
//         src: './images/slides/slide_5.webp',
//         text: `Beauty-услуги: волосы, ногти, макияж`,
//     },
//     {
//         id: 6,
//         src: './images/slides/slide_6.webp',
//         text: `Тайские и&nbsp;балийские массажи`,
//     },
// ]

// function changeSlide(id) {
//     currentSlideId = id;

//     const currentSlide = heroImages.find(slide => slide.id === currentSlideId);

//     const title = document.getElementById('title');
//     title.classList.add('hidden'); 
    
//     const heroImage = document.getElementById('hero-bg');
//     const newImage = new Image();
//     newImage.src = currentSlide.src;

//     newImage.onload = function() {        
//         heroImage.style.opacity = '0';

//         setTimeout(() => {
//             heroImage.src = newImage.src;
//             heroImage.style.opacity = '1';

//             setTimeout(() => {
//                 title.innerHTML = currentSlide.text;
//                 title.classList.remove('hidden');
//             }, 150);
//         }, 300);
//     };       

//     cardsSlide.forEach(card => {
//             if (+card.dataset.card !== currentSlideId) {               
//                 card.classList.remove('slide--active') 
//                 card.classList.add('slide--def')  
//             } else {
//                 card.classList.remove('slide--def')   
//                 card.classList.add('slide--active') 
//             }
//         })
//    restartSlideTimer();
// }

// function nextSlide() {
//     currentSlideId = currentSlideId % heroImages.length + 1;
//     changeSlide(currentSlideId);
// }

// function startSlideTimer() {
//     slideInterval = setInterval(nextSlide, 5000);
// }

// // Перезапуск таймера
// function restartSlideTimer() {
//     clearInterval(slideInterval);
//     startSlideTimer();
// }

// // Обработчики кликов на карточки
// cardsSlide.forEach(card => {
//     card.addEventListener('click', () => {
//         const id = +card.dataset.card;     

//         changeSlide(id);
        
//         restartSlideTimer()
//     });
// });

// changeSlide(1);
// startSlideTimer();

new Accordion('.accordion-container');

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 4,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
   
    
});

const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,   
    slidesPerView: 1,   
    thumbs: {
    swiper: swiper,
    },
     autoplay: {
    delay: 5000,
    },
});
