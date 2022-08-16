"use strict"

import langArr from "./lang.js"

/*--------------------------------Burger----------------------------------*/
const iconHeader = document.querySelector('.header__icon');
const menuBody = document.querySelector('.menu__body');
const menuList = document.querySelector('.menu__list');

if (iconHeader) {
    iconHeader.addEventListener("click", (e) => {
        document.body.classList.toggle('_lock');
        iconHeader.classList.toggle('_open');
        menuBody.classList.toggle('_open');
        menuList.classList.toggle('_open');
    });
}

/*--------------------------------Change Language----------------------------------*/
const menuLang = document.querySelector('.menu__lang');
const subList = document.querySelector('.menu__sub-list');
const uaShow = document.querySelector('.uashow')
const enHidden = document.querySelector('.enhidden');
const markedEn = document.querySelector('.menu__sub-enlang');
const markedUa = document.querySelector('.menu__sub-ualang');
const langHidden = document.querySelector('.menu__langhidden');
const uaShowSmall = document.querySelector('.uashowsmall')
const enHiddenSmall = document.querySelector('.enhiddensmall');

if (menuLang) {
    menuLang.addEventListener("click", (e) => {
        subList.classList.toggle('_open');
        checkOpenList();
    });
}

if (langHidden) {
    langHidden.addEventListener("click", (e) => {
        subList.classList.toggle('_open');
        checkOpenList();
    });
}



function checkOpenList() {
    if (subList.classList.contains('_open')) {
        subList.addEventListener("click", langListener)
    } else {
        subList.removeEventListener("click", langListener)
    }
}

const langListener = (e) => {
    const lang = e.target.closest('LI').getAttribute('data-lang');
    subList.classList.remove('_open');
    enHidden.classList.toggle('_open');
    uaShow.classList.toggle('_close');
    enHiddenSmall.classList.toggle('_open');
    uaShowSmall.classList.toggle('_close');
    changeLang(lang);
    markLangEng();

};


function markLangEng() {
    if (enHidden.classList.contains('_open')) {
        markedEn.classList.add('_chosen');
        markedUa.classList.add('_notchosen');
    } else {
        markedEn.classList.remove('_chosen');
        markedUa.classList.remove('_notchosen');
    }
}



function changeLang(lang) {
    let chooseDefi = Object.keys(langArr);
    chooseDefi.forEach(langKey => {
        let elemForTrans = document.querySelectorAll(`[lang-key="${langKey}"]`);
        for (let element of elemForTrans) {
            element.textContent = langArr[langKey][lang];
        }
    });
}

let username = document.getElementById("username");
let useremail = document.getElementById("useremail");
let usertel = document.getElementById("usertel");
let userprob = document.getElementById("userprob");
let enBtn = document.getElementById("enbtn");
let ukrBtn = document.getElementById("ukrbtn");

enBtn.addEventListener('click', () => {
    username.placeholder = 'User name*';
    useremail.placeholder = 'User email*';
    usertel.placeholder = 'User telephone*';
    userprob.placeholder = 'Describe your problem*';
})

ukrBtn.addEventListener('click', () => {
    username.placeholder = 'Ваше ім\'я*';
    useremail.placeholder = 'Ваш e-mail*';
    usertel.placeholder = 'Ваш телефон*';
    userprob.placeholder = 'Опишіть Вашу проблему*';
})

/*-------------------------Popup-------------------------------------*/

const popupBtn = document.querySelector('.helpblock__btnpopup');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const body = document.querySelector('body');
const popupClose = document.querySelector('.cancel');
let scroll = calcScroll();

popupBtn.addEventListener("click", (e) => {
    e.preventDefault
    popup.classList.add('_open');
    popupContent.classList.add('_open');
    body.classList.add('_lock');
    document.body.style.marginRight = `${scroll}px`;
});

popupClose.addEventListener("click", (e) => {
    e.preventDefault
    popup.classList.remove('_open');
    popupContent.classList.remove('_open');
    body.classList.remove('_lock');
    document.body.style.marginRight = `0px`;
    calcScroll()
});

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

document.addEventListener("keydown", (e) => {
    if (e.which == 27) {
        popup.classList.remove('_open');
        popupContent.classList.remove('_open');
        body.classList.remove('_lock');
        slider.classList.remove('_open');
        pictureFull.remove();
        document.body.style.marginRight = `0px`;
    }
});

/*------------------------Gallery--------------------------------------*/


const cards = Array.from(document.querySelectorAll('.documentblock__card'));
const picture = Array.from(document.querySelectorAll('.documentblock__img'));
const slider = document.querySelector('.slider');
const sliderBody = document.querySelector('.slider__body');
const sliderBtnLeft = document.querySelector('.slider__left');
const sliderBtnRight = document.querySelector('.slider__right');
const sliderClose = document.querySelector('.slider__close');
const numbers = document.querySelector('.slider__pages');

let cardIndex = -1;
let pictureFull;

for (const card of cards) {
    card.addEventListener('click', (event) => {
        event.preventDefault();
        cardIndex = cards.indexOf(card);
        pictureFull = picture[cardIndex].cloneNode();
        sliderBody.append(pictureFull);
        slider.classList.add('_open');
        body.classList.add('_lock');
        document.body.style.marginRight = `${scroll}px`;
        calcScroll()
        changeNumbers()
    });
}


sliderBtnLeft.addEventListener("click", (event) => {
    event.preventDefault();
    changePicture("left");
    changeNumbers("left");
})


sliderBtnRight.addEventListener("click", (event) => {
    event.preventDefault();
    changePicture("right");
    changeNumbers("right");
})

function changePicture(dir) {
    if (dir === "left") {
        if (cardIndex > 0) {
            cardIndex--;
        } else {
            cardIndex = cards.length - 1;
        }
    } else if (dir === "right") {
        if (cardIndex < cards.length - 1) {
            cardIndex++;
        } else {
            cardIndex = 0;
        }
    }
    let newPictureFull = picture[cardIndex].cloneNode();
    pictureFull.replaceWith(newPictureFull);
    pictureFull = newPictureFull;

}

sliderBody.addEventListener("click", (e) => {
    event.preventDefault();
    slider.classList.remove('_open');
    pictureFull.remove();
    body.classList.remove("_lock");
    document.body.style.marginRight = `0px`;
})

sliderClose.addEventListener("click", (event) => {
    event.preventDefault();
    slider.classList.remove('_open');
    pictureFull.remove();
    body.classList.remove("_lock");
    document.body.style.marginRight = `0px`;
});

function changeNumbers() {
    if (cardIndex === 0) {
        numbers.textContent = '1/3';
    } if (cardIndex === 1) {
        numbers.textContent = '2/3';
    } if (cardIndex === 2) {
        numbers.textContent = '3/3';
    }
}

/*
додати перевірку якщо цей елемент є input то міняємо не textContent a placeholder
*/


