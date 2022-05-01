import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, newCardAdd }) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleLinkChange(event) {
        setLink(event.target.value);
    }

    function onClosePopupAddPlace() {
        onClose();
        setName('');
        setLink('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        newCardAdd(name, link);
        onClosePopupAddPlace();
    }

    return (
        <PopupWithForm name={"newcard"} title={"Новое место"} button={"Сохранить"} isOpen={isOpen} onClose={onClosePopupAddPlace} onSubmit={handleSubmit}>
            <input type="text" className="pop-up-form__field" placeholder="Название" id="pop-up-form-newcard-title"
                name="title" required minLength="2" maxLength="30" autoComplete="off" onChange={handleNameChange} value={name} />
            <span className="pop-up-form__input-error pop-up-form-newcard-title-error"></span>
            <input type="url" className="pop-up-form__field" placeholder="Ссылка на картинку"
                id="pop-up-form-newcard-added-info" name="info" required autoComplete="url" onChange={handleLinkChange} value={link} />
            <span className="pop-up-form__input-error pop-up-form-newcard-added-info-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup