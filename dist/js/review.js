const reviewIcons = () => {
    let likeIcons = document.querySelectorAll('.review__like')

    likeIcons.forEach(likeIcon => {
        likeIcon.addEventListener('click', () => {
            let like = likeIcon.closest('.reviews__item')
            like.toggleAttribute('like')
            like.classList.toggle('like')
        })
    })

    let deleteIcons = document.querySelectorAll('#delete')

    deleteIcons.forEach(deleteIcon => {
        deleteIcon.addEventListener('click', () => {
            let review = deleteIcon.closest('.reviews__item')
            review.remove()
        })
    })
}

reviewIcons();

export default reviewIcons;