function ImagePopup() {
    return (
        <section className="pop-up" id="pop-up-image-view">
            <div className="pop-up__container">
                <button type="button" className="pop-up__button-close"></button>
                <figure className="pop-up-picture">
                    <img className="pop-up-picture__photo" alt="Место большое фото" src="#" />
                    <figcaption className="pop-up-picture__caption"></figcaption>
                </figure>
            </div>
        </section>
    )
}

export default ImagePopup