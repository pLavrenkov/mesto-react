import avatarPath from '../images/avatar.jpg';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function Main({onEditProfile, onAddPlace, onEditAvatar, isOpenProfile, isOpenAvatar, isOpenPlace, closeAllPopups}) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={avatarPath} alt="Аватар" />
                        <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <p className="profile__subtitle">Исследователь океана</p>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                    </div>
                    <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
                </div>
            </section>
            <section className="elements">
                <ul className="element-list"></ul>
            </section>
            <PopupWithForm name={"profile"} title={"Редактировать профиль"} button={"Сохранить"} isOpen={isOpenProfile} onClose={closeAllPopups}>
                <input type="text" className="pop-up-form__field" placeholder="Введите другое имя" id="pop-up-form-profile-title"
                    name="title" required minLength="2" maxLength="40" autoComplete="name" />
                <span className="pop-up-form__input-error pop-up-form-profile-title-error"></span>
                <input type="text" className="pop-up-form__field" placeholder="Введите занятие" id="pop-up-form-profile-added-info"
                    name="info" required minLength="2" maxLength="200" autoComplete="off" />
                <span className="pop-up-form__input-error pop-up-form-profile-added-info-error"></span>
            </PopupWithForm>
            <PopupWithForm name={"avatar-edit"} title={"Обновить аватар"} button={"Сохранить"} isOpen={isOpenAvatar} onClose={closeAllPopups}>
                <input type="url" className="pop-up-form__field" placeholder="Ссылка на картинку" id="pop-up-form-avatar-url"
                    name="info" required autoComplete="url" />
                <span className="pop-up-form__input-error pop-up-form-avatar-url-error"></span>
            </PopupWithForm>
            <PopupWithForm name={"newcard"} title={"Новое место"} button={"Сохранить"} isOpen={isOpenPlace} onClose={closeAllPopups}>
                <input type="text" className="pop-up-form__field" placeholder="Название" id="pop-up-form-newcard-title"
                    name="title" required minLength="2" maxLength="30" autoComplete="off" />
                <span className="pop-up-form__input-error pop-up-form-newcard-title-error"></span>
                <input type="url" className="pop-up-form__field" placeholder="Ссылка на картинку"
                    id="pop-up-form-newcard-added-info" name="info" required autoComplete="url" />
                <span className="pop-up-form__input-error pop-up-form-newcard-added-info-error"></span>
            </PopupWithForm>
            <PopupWithForm name={"deletecard"} title={"Вы уверены?"} button={"Да"} onClose={closeAllPopups}>
                <input type="text" className="pop-up-form__field" placeholder="Название" id="pop-up-form-newcard-title"
                    name="title" required minLength="2" maxLength="30" autoComplete="off" />
                <span className="pop-up-form__input-error pop-up-form-newcard-title-error"></span>
                <input type="url" className="pop-up-form__field" placeholder="Ссылка на картинку"
                    id="pop-up-form-newcard-added-info" name="info" required autoComplete="url" />
                <span className="pop-up-form__input-error pop-up-form-newcard-added-info-error"></span>
            </PopupWithForm>
        </main>
    )
}

export default Main