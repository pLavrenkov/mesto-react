import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { CurrentUserContext, defaultUser } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';

function App() {
  const [currentUser, setCurrentUser] = React.useState(defaultUser);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

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

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard('');
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
            isOpenProfile={isEditProfilePopupOpen}
            onAddPlace={handleAddPlaceClick}
            isOpenPlace={isAddPlacePopupOpen}
            onEditAvatar={handleEditAvatarClick}
            isOpenAvatar={isEditAvatarPopupOpen}
            isOpenImage={isImagePopupOpen}
            closeAllPopups={closeAllPopups}
            onCardClick={handleCardClick}
            card={selectedCard}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
