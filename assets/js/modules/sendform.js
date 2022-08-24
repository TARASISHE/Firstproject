document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup__content');
    const btnSend = document.querySelector('.submit');
    const btnLoad = document.querySelector('.loading');
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        try {
            e.preventDefault();

            let error = formValidate(form);

            let formData = new FormData(form);

            if (error === 0) {
                // popupContent.classList.add('_sending');
                btnLoad.classList.add('_sending');
                btnSend.classList.add('_sending');
                let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: formData
                });
                popup
                let json = await response.json();
                popupContent.classList.add('_sending');
                form.reset();
                popup.classList.remove('_open');
            }
        } catch {
            console.error(e);
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

});