import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [avatar, setAvatar] = React.useState('');
    //чтобы не использовать отдельную переменную value пришлось удалить предустановленный аватар Кустро
    //иначе при первом открытии попапа возникал относительный url этого аватара
    //другое решение - только через отдельную state-переменную или через тенарный оператор для сравнения url (не очень хорошее решение)

    React.useEffect(() => {
        setAvatar(currentUser.avatar);
    }, []);

    function handleAvatarChange(event) {
        setAvatar(event.target.value);
    }

    function onCloseAvatarPopup() {
        onClose();
        setAvatar('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateAvatar(avatar);
        setAvatar('');
    }

    return (
        <PopupWithForm name={"avatar-edit"} title={"Обновить аватар"} button={"Сохранить"} isOpen={isOpen} onClose={onCloseAvatarPopup} onSubmit={handleSubmit}>
            <input type="url" className="pop-up-form__field" placeholder="Ссылка на картинку" id="pop-up-form-avatar-url"
                name="info" required autoComplete="url" onChange={handleAvatarChange} value={avatar} />
            <span className="pop-up-form__input-error pop-up-form-avatar-url-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup