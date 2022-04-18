import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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
    setSelectedCard(null);
    document.querySelector('.pop-up_opened').classList.remove('pop-up_opened');
  }

  return (
    <div className="body">
      <div className="mainpage">
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
      </div>
    </div>
  );
}

export default App;
