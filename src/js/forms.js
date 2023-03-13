import reviewIcons from './review.js';

const forms = () => {
    const form = document.querySelector('.form'),
        openButton = document.querySelector('.reviews__button'),
        sendButton = document.querySelector('.form__button')

    openButton.addEventListener('click', () => {
        form.style.opacity == 0 ? form.style.opacity = 1 : form.style.opacity = 0
    })

    function validateForm() {
        let required = form.querySelectorAll('input[required]')

        let req = true;

        required.forEach(item => {
            if (item.value) {
                return;
            } else {
                let alert = document.createElement('div')
                alert.classList.add('form__alert')
                item.parentNode.append(alert)
                switch (item.name) {
                    case 'name':
                        alert.innerHTML = `Введите имя`
                        break;
                    case 'message':
                        alert.innerHTML = `Введите отзыв`
                        break;
                }
                item.addEventListener('keypress', () => {
                    alert.remove()
                })
                req = false;
            }
        })
        return req;
    }

    function getDate() {
        const date = form.querySelector('#date').value
        let dates = date.split('-').join(',')
        let newDate = new Date(dates)

        if (!date) {
            newDate = new Date();
        }
        let hours = new Date().getHours(),
            minutes = new Date().getMinutes(),
            day = newDate.getDate(),
            month = newDate.getMonth() + 1,
            year = newDate.getFullYear()

        hours < 10 ? hours = '0' + hours : hours;
        minutes < 10 ? minutes = '0' + minutes : minutes;
        day < 10 ? day = '0' + day : day;
        month < 10 ? month = '0' + month : month;

        let diffDate = Math.round((+(new Date()) - +newDate) / 1000 / 60 / 60)

        if (diffDate <= 24 && diffDate > 0) {
            return `сегодня ${hours}:${minutes}`
        } else if (diffDate > 24 && diffDate <= 48) {
            return `вчера ${hours}:${minutes}`
        } else {
            return `${day}-${month}-${year} ${hours}:${minutes}`
        }
    }

    const sendReview = () => {
        const name = form.querySelector('#name'),
            review = form.querySelector('#message')

        if (validateForm()) {
            let newReview = document.createElement('div');

            newReview.classList.add('reviews__item')
            document.querySelector('.reviews__items').append(newReview)

            newReview.innerHTML = `<div class="reviews__name">${name.value}</div> 
                                    <div class="reviews__date">${getDate()}</div>         
                                    <div class="reviews__message">${review.value}</div>         
                                    <div class="reviews__icons">
                                        <div class="reviews__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox = "0 0 16 16" alt="like" class='review__like'>
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                            </svg> </div> 
                                        <div class="reviews__icon" alt="delete" id='delete' >
                                            <img src="icons/delete.svg" alt="delete" >
                                        </div></div>`
        }
    }

    // const clearInputs = () => {
    //     let inputs = form.querySelectorAll('.form__input input')
    //     inputs.forEach(input => input.reset())
    // }

    sendButton.addEventListener('click', (e) => {
        e.preventDefault();
        sendReview();
        reviewIcons();
        form.reset();
    })
}

export default forms;