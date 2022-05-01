import React from 'react';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, isOpenProfile, isOpenAvatar, isOpenPlace, closeAllPopups, card, onCardClick, onUpdateUser, isOpenImage, onUpdateAvatar, cards, onCardLike, onCardDelete, newCardAdd }) {
    const currentUser = React.useContext(CurrentUserContext);
   
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
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                        />
                    )}
                </ul>
            </section>
            <EditProfilePopup isOpen={isOpenProfile} onClose={closeAllPopups} onUpdateUser={onUpdateUser} />
            <EditAvatarPopup isOpen={isOpenAvatar} onClose={closeAllPopups} onUpdateAvatar={onUpdateAvatar} />
            <AddPlacePopup isOpen={isOpenPlace} onClose={closeAllPopups} newCardAdd={newCardAdd} />
            <PopupWithForm name={"deletecard"} title={"Вы уверены?"} button={"Да"} onClose={closeAllPopups} />
            <ImagePopup onClose={closeAllPopups} cardAttributes={card} isOpen={isOpenImage} />
        </main>
    )
}

export default Main