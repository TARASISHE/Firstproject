function checkCurrentLng() {
    const currentLng = localStorage.getItem('storageLang');
    if (currentLng) {
        changeLang(currentLng);
        if (currentLng === 'en') {
            enHidden.classList.add('_open');
            uaShow.classList.add('_close');
            username.placeholder = 'User name*';
            useremail.placeholder = 'User email*';
            usertel.placeholder = 'User telephone*';
            userprob.placeholder = 'Describe your problem*';
        }
    }
}

checkCurrentLng();