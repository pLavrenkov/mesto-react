import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { CurrentUserContext, defaultUser } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';

function App() {
  const [currentUser, setCurrentUser] = React.useState(defaultUser);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        alert(`Возникла ошибка при загрузке данных пользователя ${err}`);
      })
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(name, link) {
    const card = {
      name: name,
      link: link
    }
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleUpdateUser(name, about) {
    api.patchUserInfo(name, about)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
      })
      .catch((err) => {
        alert(`Не загрузились данные пользователя. Ошибка ${err}`);
      });
    closeAllPopups();
  }

  function handleUpdateAvatar(avatar) {
    api.patchAvatar(avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
      })
      .catch((err) => {
        alert(`Не удалось загрузить аватар. Ошибка ${err}`);
      });
    closeAllPopups();
  }

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCards()
      .then((arrCards) => {
        setCards(arrCards)
      })
      .catch((err) => {
        alert(`Карточки не загрузились. Ошибка ${err}`)
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
      .catch((err) => {
        alert(`Не удалось проставить like. Ошибка ${err}`);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((newCard) => {
        console.log(newCard);
        setCards((state) => state.filter((c) => c._id !== card._id ? true : false));
      })
      .catch((err) => {
        alert(`Не удалось удалить карточку. Ошибка ${err}`);
      });
  }

  function handleAddPlaceSubmit(name, link) {
    api.putNewCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        alert(`Не удалось загрузить катрочку. Ошибка ${err}`)
      })
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="body">
      <div className="mainpage">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onUpdateUser={handleUpdateUser}
            onUpdateAvatar={handleUpdateAvatar}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} newCardAdd={handleAddPlaceSubmit} />
          <PopupWithForm name={"deletecard"} title={"Вы уверены?"} button={"Да"} onClose={closeAllPopups} />
          <ImagePopup onClose={closeAllPopups} cardAttributes={selectedCard} isOpen={isImagePopupOpen} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
