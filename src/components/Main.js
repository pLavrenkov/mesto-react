import React from 'react';
import ReactDOM from 'react-dom/client';
import avatarPath from '../images/avatar.jpg';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import { api } from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, isOpenProfile, isOpenAvatar, isOpenPlace, closeAllPopups, card, onCardClick }) {
    const [userId, setUserId] = React.useState();

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                document.querySelector('.profile__title').textContent = userInfo.name;
                document.querySelector('.profile__subtitle').textContent = userInfo.about;
                document.querySelector('.profile__avatar').src = userInfo.avatar;
                setUserId(userInfo._id);
            })
    }, [])

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getCards()
            .then((arrCards) => {
                setCards(arrCards)
            })
    }, [])

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
                <ul className="element-list">
                    {cards.map(item =>
                        <Card key={item._id} cardId={item._id} link={item.link} name={item.name} likes={item.likes.length} userId={userId} cardOwnerId={item.owner._id} onCardClick={onCardClick} />
                    )}
                </ul>
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
            <ImagePopup onClose={closeAllPopups} cardAttributes={card} />
        </main>
    )
}

export default Main