import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [avatar, setAvatar] = React.useState('');
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        setAvatar(currentUser.avatar);
    }, []);

    function handleAvatarChange(event) {
        setValue(event.target.value);
        setAvatar(event.target.value);
    }

    function onCloseAvatarPopup() {
        onClose();
        setValue('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateAvatar(avatar);
        setValue('');
    }

    return (
        <PopupWithForm name={"avatar-edit"} title={"Обновить аватар"} button={"Сохранить"} isOpen={isOpen} onClose={onCloseAvatarPopup} onSubmit={handleSubmit}>
            <input type="url" className="pop-up-form__field" placeholder="Ссылка на картинку" id="pop-up-form-avatar-url"
                name="info" required autoComplete="url" onChange={handleAvatarChange} value={value} />
            <span className="pop-up-form__input-error pop-up-form-avatar-url-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup