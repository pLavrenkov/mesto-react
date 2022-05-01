import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen])

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    const handleNameValue = (isOpen ? name : '');
    const handleAboutValue = (isOpen ? description : '');

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateUser(name, description);
    }

    return (
        <PopupWithForm name={"profile"} title={"Редактировать профиль"} button={"Сохранить"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input type="text" className="pop-up-form__field" placeholder="Введите другое имя" id="pop-up-form-profile-title"
                name="title" required minLength="2" maxLength="40" autoComplete="name" onChange={handleNameChange} value={handleNameValue} />
            <span className="pop-up-form__input-error pop-up-form-profile-title-error"></span>
            <input type="text" className="pop-up-form__field" placeholder="Введите занятие" id="pop-up-form-profile-added-info"
                name="info" required minLength="2" maxLength="200" autoComplete="off" onChange={handleDescriptionChange} value={handleAboutValue} />
            <span className="pop-up-form__input-error pop-up-form-profile-added-info-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup