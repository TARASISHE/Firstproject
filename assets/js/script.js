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


const select = document.querySelector('select');
const allLang = ["en", "ua"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
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
    select.value = hash;
    document.querySelector('en_1').innerHTML = langArr['en_1'][hash];
    for (let key in langArr) {
        let elem = document.querySelector(".lng" + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();
