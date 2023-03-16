const modal = () => {
    let button = document.querySelector('.main__button');
    let modalEl = document.querySelector('.modal');
    let modalWrap = document.querySelector('.modal__wrap');
    let form = modalEl.querySelector('form');

    button.onclick = (e) => {
        e.preventDefault();
        modalEl.removeAttribute('hidden');
        modalEl.style.opacity = '1';
    }

    modalEl.onclick = (e) => {
        if (e.target == modalEl) {
            modalEl.setAttribute('hidden', true);
            modalEl.style.opacity = '0';
        }
    }

    form.onsubmit = (e) => {
        e.preventDefault();
        let input = Object.fromEntries(new FormData(form));
        console.log(input);
        form.reset();
        modalWrap.innerHTML = 'Спасибо, скоро мы с вами свяжемся!';
        setTimeout(() => {
            modalEl.setAttribute('hidden', true);
            modalEl.style.opacity = '0';
        }, 3000);
    }
}

export default modal;

