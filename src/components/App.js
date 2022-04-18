import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

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
  }

  return (
    <div className="body">
      <div className="mainpage">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          closeAllPopups={closeAllPopups}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm name={"profile"} title={"Редактировать профиль"} button={"Сохранить"} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input type="text" className="pop-up-form__field" placeholder="Введите другое имя" id="pop-up-form-profile-title"
            name="title" required minLength="2" maxLength="40" autoComplete="name" />
          <span className="pop-up-form__input-error pop-up-form-profile-title-error"></span>
          <input type="text" className="pop-up-form__field" placeholder="Введите занятие" id="pop-up-form-profile-added-info"
            name="info" required minLength="2" maxLength="200" autoComplete="off" />
          <span className="pop-up-form__input-error pop-up-form-profile-added-info-error"></span>
        </PopupWithForm>
        <PopupWithForm name={"avatar-edit"} title={"Обновить аватар"} button={"Сохранить"} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input type="url" className="pop-up-form__field" placeholder="Ссылка на картинку" id="pop-up-form-avatar-url"
            name="info" required autoComplete="url" />
          <span className="pop-up-form__input-error pop-up-form-avatar-url-error"></span>
        </PopupWithForm>
        <PopupWithForm name={"newcard"} title={"Новое место"} button={"Сохранить"} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input type="text" className="pop-up-form__field" placeholder="Название" id="pop-up-form-newcard-title"
            name="title" required minLength="2" maxLength="30" autoComplete="off" />
          <span className="pop-up-form__input-error pop-up-form-newcard-title-error"></span>
          <input type="url" className="pop-up-form__field" placeholder="Ссылка на картинку"
            id="pop-up-form-newcard-added-info" name="info" required autoComplete="url" />
          <span className="pop-up-form__input-error pop-up-form-newcard-added-info-error"></span>
        </PopupWithForm>
        <PopupWithForm name={"deletecard"} title={"Вы уверены?"} button={"Да"} onClose={closeAllPopups} />
        <ImagePopup onClose={closeAllPopups} cardAttributes={selectedCard} />
      </div>
    </div>
  );
}

export default App;
