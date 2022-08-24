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
