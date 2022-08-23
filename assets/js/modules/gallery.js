const cards = Array.from(document.querySelectorAll('.documentblock__card'));
const picture = Array.from(document.querySelectorAll('.documentblock__img'));
const slider = document.querySelector('.slider');
const sliderBody = document.querySelector('.slider__body');
const sliderBtnLeft = document.querySelector('.slider__left');
const sliderBtnRight = document.querySelector('.slider__right');
const sliderClose = document.querySelector('.slider__close');
const numbers = document.querySelector('.slider__pages');
let scroll = calcScroll();
const body = document.querySelector('body');

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