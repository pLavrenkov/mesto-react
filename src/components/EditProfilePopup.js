import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import { checkTextValid, classListValidationInput } from "../utils/Validation";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [isNameValid, setIsNameValid] = React.useState(true);
    const [isDescriptionValid, setIsDescriptionValid] = React.useState(true);
    const [isButtonBlocked, setIsButtonBlocked] = React.useState(false);

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    const handleNameValue = (isOpen ? name : '');
    const handleAboutValue = (isOpen ? description : '');

    React.useEffect(() => {
        setIsNameValid(checkTextValid(name, 2, 20));
        setIsDescriptionValid(checkTextValid(description, 2, 40));
        (!isNameValid || !isDescriptionValid ? setIsButtonBlocked(true) : setIsButtonBlocked(false));
    }, [name, description, isNameValid, isDescriptionValid]);

    const classNameList = (isNameValid ? classListValidationInput.valid : classListValidationInput.error);
    const classDescriptionList = (isDescriptionValid ? classListValidationInput.valid : classListValidationInput.error);

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateUser(name, description);
    }

    return (
        <PopupWithForm name={"profile"} title={"Редактировать профиль"} button={"Сохранить"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} onBlocked={isButtonBlocked}>
            <input type="text" className={classNameList.input} placeholder="Введите другое имя" id="pop-up-form-profile-title"
                name="title" required minLength="2" maxLength="40" autoComplete="name" onChange={handleNameChange} value={handleNameValue} />
            <span className={classNameList.error}>Введено неверное количество символов</span>
            <input type="text" className={classDescriptionList.input} placeholder="Введите занятие" id="pop-up-form-profile-added-info"
                name="info" required minLength="2" maxLength="200" autoComplete="off" onChange={handleDescriptionChange} value={handleAboutValue} />
            <span className={classDescriptionList.error}>Введено неверное количество символов</span>
        </PopupWithForm>
    )
}

export default EditProfilePopup