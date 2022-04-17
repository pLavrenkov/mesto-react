function PopupWithForm({title, name, children, button, isOpen, onClose}) {
    const popupElement = document.querySelector(`#pop-up-${name}`);
    
    if (isOpen) {
        popupElement.classList.add('pop-up_opened')
    } 

    return (
        <section className="pop-up" id={`pop-up-${name}`}>
            <div className="pop-up__container">
                <button type="button" className="pop-up__button-close" onClick={onClose}></button>
                <form className={`pop-up-form pop-up-form_${name}`} name={`${name}-form`} noValidate>
                    <h2 className="pop-up-form__title">{title}</h2>
                    {children}
                    <button type="submit" className="pop-up-form__button-submit">{button}</button>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm