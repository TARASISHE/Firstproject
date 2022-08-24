document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        try {
            e.preventDefault();

            let error = formValidate(form);

            let formData = new FormData(form);

            if (error === 0) {
                btnLoad.classList.add('_sending');
                btnSend.classList.add('_sending');
                let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: formData
                });
                let json = await response.json();
                form.reset();
            }
        } catch {
            console.error(e);
        } finally {
            btnLoad.classList.remove('_sending');
            btnSend.classList.remove('_sending');
        }
    }
});