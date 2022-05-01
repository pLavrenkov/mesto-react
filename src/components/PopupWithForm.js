function PopupWithForm({title, name, children, button, isOpen, onClose, onSubmit}) {
   
    const handleClassPopupOpen = (!isOpen ? "pop-up" : "pop-up pop-up_opened");

    return (
        <section className={handleClassPopupOpen} id={`pop-up-${name}`}>
            <div className="pop-up__container">
                <button type="button" className="pop-up__button-close" onClick={onClose}></button>
                <form className={`pop-up-form pop-up-form_${name}`} name={`${name}-form`} noValidate>
                    <h2 className="pop-up-form__title">{title}</h2>
                    {children}
                    <button type="submit" className="pop-up-form__button-submit" onClick={onSubmit}>{button}</button>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm