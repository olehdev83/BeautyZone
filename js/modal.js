const modal = document.getElementById('backdrop');
const closeButton = document.getElementById('modal-btn-close');
const openButtons = document.querySelectorAll('.modal-btn-open');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.remove('is-hidden');
        document.body.classList.add('scroll-block')
    });

    closeButton.addEventListener('click', () => {
        modal.classList.add('is-hidden');
        document.body.classList.remove('scroll-block')
    });
});