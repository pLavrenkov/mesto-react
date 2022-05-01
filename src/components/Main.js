import React from 'react';
import ReactDOM from 'react-dom/client';
import avatarPath from '../images/avatar.jpg';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, isOpenProfile, isOpenAvatar, isOpenPlace, closeAllPopups, card, onCardClick, onUpdateUser, isOpenImage, onUpdateAvatar }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getCards()
            .then((arrCards) => {
                setCards(arrCards)
            })
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(like => like._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) =>
                    state.map((c) => c._id === card._id ? newCard : c)
                );
            })
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then((newCard) => {
                console.log(newCard);
                setCards((state) => state.filter((c) => c._id !== card._id ? true : false));
            });
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                        <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <p className="profile__subtitle">{currentUser.about}</p>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                    </div>
                    <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
                </div>
            </section>
            <section className="elements">
                <ul className="element-list">
                    {cards.map(item =>
                        <Card
                            key={item._id}
                            card={item}
                            cardId={item._id}
                            link={item.link} name={item.name}
                            likesArr={item.likes}
                            onCardClick={onCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                        />
                    )}
                </ul>
            </section>
            <EditProfilePopup isOpen={isOpenProfile} onClose={closeAllPopups} onUpdateUser={onUpdateUser} />
            <EditAvatarPopup isOpen={isOpenAvatar} onClose={closeAllPopups} onUpdateAvatar={onUpdateAvatar} />
           {/* <PopupWithForm name={"avatar-edit"} title={"Обновить аватар"} button={"Сохранить"} isOpen={isOpenAvatar} onClose={closeAllPopups}>
                <input type="url" className="pop-up-form__field" placeholder="Ссылка на картинку" id="pop-up-form-avatar-url"
                    name="info" required autoComplete="url" />
                <span className="pop-up-form__input-error pop-up-form-avatar-url-error"></span>
                    </PopupWithForm>*/}
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
            <ImagePopup onClose={closeAllPopups} cardAttributes={card} isOpen={isOpenImage} />
        </main>
    )
}

export default Main