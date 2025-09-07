const btnArrow = document.getElementById('top-arrow');
const menuBottom = document.getElementById('menu-bottom');
const linkSubmenu = document.querySelector('.menu-top__item--submenu');
const listElemSubmenu = document.querySelectorAll('[data-submenu]');
const headerRights = document.querySelectorAll('.header__right')
const inner = document.getElementById('inner');
const burgerInner = document.getElementById('burger-inner');
const logo = document.getElementById('logo');    
const header =  document.getElementById('header');
const burger = document.getElementById('burger');

const currentScrollY = window.scrollY;    

let isOpenMenu = false;
let isOpenMenuBottom = false;
let lastScrollY = window.scrollY;
let hasScroll = false;

linkSubmenu.addEventListener('mouseenter', () => {
    if (hasScroll) return;

    menuBottom.classList.add('open');

    listElemSubmenu.forEach(elem => {    
        elem.classList.add('color');           
    })

    headerRights[0].classList.remove('visible');
    headerRights[1].classList.add('visible');
    btnArrow.classList.add('open');
})

menuBottom.addEventListener('mouseleave', (e) => {  
    if (!menuBottom.contains(e.relatedTarget)) {  
        menuBottom.classList.remove('open');

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

    menuBottom.classList.add('open');

    listElemSubmenu.forEach(elem => {    
        elem.classList.add('color');           
    })

    headerRights[0].classList.remove('visible');
    headerRights[1].classList.add('visible');    
});

//Смена шапок при скролле
window.addEventListener('scroll', () => {    
    const currentScrollY = window.scrollY;     

    if (currentScrollY > lastScrollY && currentScrollY > 100) { 
        hasScroll = true;

        inner.classList.add('hidden');
        burgerInner.classList.remove('hidden');
        logo.classList.add('small');
        header.classList.add('color');

        headerRights[0].classList.remove('visible');
        headerRights[1].classList.add('visible');

        isOpenMenuBottom = false;
        isOpenMenu = false;
    } else if(!isOpenMenuBottom || !isOpenMenu) { 
        hasScroll = false;

        inner.classList.remove('hidden');
        burgerInner.classList.add('hidden'); 
        logo.classList.remove('small') 
        header.classList.remove('color');  
        
        headerRights[1].classList.remove('visible');
        headerRights[0].classList.add('visible');            
    } 

    lastScrollY = currentScrollY;
});

// Слайдер карточек
const cardsSlide = document.querySelectorAll('[data-card]')

const heroImages = [
    {
        id: 1,
        src: './images/slides/slide_1.png',
        text: `Ангел Concept &mdash;центр премиального ухода и&nbsp;косметологии в&nbsp;Ставрополе`,
    },
    {
        id: 2,
        src: './images/slides/slide_2.webp',
        text: `Коррекция фигуры и&nbsp;силуэта`,
    },
    {
        id: 3,
        src: './images/slides/slide_3.webp',
        text: `SPA и&nbsp;европейские массажи`,
    },
     {
        id: 4,
        src: './images/slides/slide_4.webp',
        text: `Велнес-программы и&nbsp;флоатация`,
    },
     {
        id: 5,
        src: './images/slides/slide_5.webp',
        text: `Beauty-услуги: волосы, ногти, макияж`,
    },
    {
        id: 6,
        src: './images/slides/slide_6.webp',
        text: `Тайские и&nbsp;балийские массажи`,
    },
]

function changeSlide(id) {
    let currentSlideId = id || 1;

    const currentSlide = heroImages.find(slide => slide.id === currentSlideId);

    const heroImage = document.getElementById('hero-bg');
    const title = document.getElementById('title');

    const newImage = new Image();
    newImage.src = currentSlide.src
    newImage.onload = function() {        
        heroImage.style.opacity = '0';
        setTimeout(() => {
            heroImage.src = newImage.src;
            heroImage.style.opacity = '1';
        }, 300);
    };

    title.innerHTML = currentSlide.text;

    cardsSlide.forEach(card => {
            if (+card.dataset.card !== currentSlideId) {               
                card.classList.remove('slide--active') 
                card.classList.add('slide--def')  
            } else {
                card.classList.remove('slide--def')   
                card.classList.add('slide--active') 
            }
        })
}

changeSlide(1)

cardsSlide.forEach(card => {    
    card.addEventListener('click', (e) => {             
        const id = +card.dataset.card;   
        
        changeSlide(id);           
    })
})

const items = document.querySelectorAll('.menu-mobile__item')

items.forEach(el => {
    const btn = el.querySelector('.menu-mobile__icon');
    const inner = el.querySelector('.menu-mobile__inner');

    if (btn)
    btn.addEventListener('click', () => {
        items.forEach(openItem => {
            if (openItem !== el) {   
                setTimeout(() => {             
                    openItem.classList.toggle('open');
                    openItem.querySelector('.menu-mobile__inner').classList.toggle('hidden');   
                 }, 500)             
            }
        });
        setTimeout(() => {
            el.classList.toggle('open');
            inner.classList.toggle('hidden');
        }, 500)
        
    })
})