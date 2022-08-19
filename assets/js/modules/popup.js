const popupBtn = document.querySelector('.helpblock__btnpopup');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const body = document.querySelector('body');
const popupClose = document.querySelector('.cancel');
let scroll = calcScroll();

popupBtn.addEventListener("click", (e) => {
    popup.classList.add('_open');
    popupContent.classList.add('_open');
    body.classList.add('_lock');
    document.body.style.marginRight = `${scroll}px`;
});

popupClose.addEventListener("click", (e) => {
    popup.classList.remove('_open');
    popupContent.classList.remove('_open');
    body.classList.remove('_lock');
    document.body.style.marginRight = `0px`;
    calcScroll()
});



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