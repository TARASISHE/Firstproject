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