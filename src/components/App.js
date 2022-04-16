import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups(){
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    document.querySelector('.pop-up_opened').classList.remove('pop-up_opened');
  }

  return (
    <body className="body">
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
        />
        <Footer />
      </div>
      <template id="card-element">
        <li className="element">
          <figure className="element__picture">
            <img className="element__photo" alt="Место" />
            <figcaption className="element__capture">
              <h2 className="element__title"></h2>
              <div className="element__like-block">
                <button type="button" className="element__like"></button>
                <span className="element__likes"></span>
              </div>
            </figcaption>
          </figure>
          <button type="button" className="element__bin-button element__bin-button_display_none"></button>
        </li>
      </template>
    </body>
  );
}

export default App;
