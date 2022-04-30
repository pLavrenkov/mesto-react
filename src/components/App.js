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
  const [selectedCard, setSelectedCard] = React.useState();

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        alert(`Возникла ошибка ${err}`);
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
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard('');
    document.querySelector('.pop-up_opened').classList.remove('pop-up_opened');
  }

  return (
    <body className="body">
      <div className="mainpage">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            isOpenProfile={isEditProfilePopupOpen}
            onAddPlace={handleAddPlaceClick}
            isOpenPlace={isAddPlacePopupOpen}
            onEditAvatar={handleEditAvatarClick}
            isOpenAvatar={isEditAvatarPopupOpen}
            closeAllPopups={closeAllPopups}
            onCardClick={handleCardClick}
            card={selectedCard}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </body>
  );
}

export default App;
