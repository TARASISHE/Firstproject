"use strict"

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

let langMen = document.querySelector('.menu__lang');
let subMen = document.querySelector('.menu__sub-list');
let enLng = document.querySelector('.menu__sub-enlang');
let allLang = ['en', 'ua'];


const toggleMenu = () => {
    subMen.classList.toggle('_open');
}

langMen.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
})

enLng.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
    let lang = enLng.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#en";
        location.reload();
    }
    enLng.value = hash;
    document.querySelector('.en1').innerHTML = langArr['en1'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('lng' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();



