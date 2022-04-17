function ImagePopup({ onClose, cardAttributes }) {
    const cardData = {
        name: '',
        link: ''
    }

    const popupElement = document.querySelector('#pop-up-image-view');
    if (cardAttributes) {
        popupElement.classList.add('pop-up_opened');
        cardData.name = cardAttributes.name;
        cardData.link = cardAttributes.link
    }

    return (
        <section className="pop-up" id="pop-up-image-view">
            <div className="pop-up__container">
                <button type="button" className="pop-up__button-close" onClick={onClose} ></button>
                <figure className="pop-up-picture">
                    <img className="pop-up-picture__photo" alt="Место большое фото" src={cardData.link} />
                    <figcaption className="pop-up-picture__caption">{cardData.name}</figcaption>
                </figure>
            </div>
        </section>
    )
}

export default ImagePopup