import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body class="body">
      <div class="mainpage">
        <header class="header">
          <img class="header__logo" src="<%=require('./images/logo.svg')%>" alt="Логотип" />
        </header>
        <main class="content">
          <section class="profile">
            <div class="profile__content">
              <div class="profile__avatar-container">
                <img class="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="Аватар" />
                  <button type="button" class="profile__avatar-button"></button>
              </div>
              <div class="profile__info">
                <h1 class="profile__title">Жак-Ив Кусто</h1>
                <p class="profile__subtitle">Исследователь океана</p>
                <button type="button" class="profile__edit-button"></button>
              </div>
              <button type="button" class="profile__add-button"></button>
            </div>
          </section>
          <section class="elements">
            <ul class="element-list"></ul>
          </section>
        </main>
        <footer class="footer">
          <p class="footer__copyright" lang="en">&copy; 2021 Mesto Russia</p>
        </footer>
      </div>
      <template id="card-element">
        <li class="element">
          <figure class="element__picture">
            <img class="element__photo" alt="Место" />
              <figcaption class="element__capture">
                <h2 class="element__title"></h2>
                <div class="element__like-block">
                  <button type="button" class="element__like"></button>
                  <span class="element__likes"></span>
                </div>
              </figcaption>
          </figure>
          <button type="button" class="element__bin-button element__bin-button_display_none"></button>
        </li>
      </template>
      <section class="pop-up" id="pop-up-profile">
        <div class="pop-up__container">
          <button type="button" class="pop-up__button-close"></button>
          <form class="pop-up-form" name="profile-form" novalidate>
            <h2 class="pop-up-form__title">Редактировать профиль</h2>
            <input type="text" class="pop-up-form__field" placeholder="Введите имя" id="pop-up-form-profile-title"
              name="title" required minlength="2" maxlength="40" autocomplete="name" />
              <span class="pop-up-form__input-error pop-up-form-profile-title-error"></span>
              <input type="text" class="pop-up-form__field" placeholder="Введите занятие" id="pop-up-form-profile-added-info"
                name="info" required minlength="2" maxlength="200" autocomplete="off" />
                <span class="pop-up-form__input-error pop-up-form-profile-added-info-error"></span>
                <button type="submit" class="pop-up-form__button-submit">Сохранить</button>
              </form>
            </div>
          </section>
          <section class="pop-up" id="pop-up-avatar-edit">
            <div class="pop-up__container">
              <button type="button" class="pop-up__button-close"></button>
              <form class="pop-up-form pop-up-form_avatar-edit" name="avatar-form" novalidate>
                <h2 class="pop-up-form__title">Обновить аватар</h2>
                <input type="url" class="pop-up-form__field" placeholder="Ссылка на картинку" id="pop-up-form-avatar-url"
                  name="info" required autocomplete="url" />
                  <span class="pop-up-form__input-error pop-up-form-avatar-url-error"></span>
                  <button type="submit" class="pop-up-form__button-submit">Сохранить</button>
              </form>
            </div>
          </section>
          <section class="pop-up" id="pop-up-add-new-card">
            <div class="pop-up__container">
              <button type="button" class="pop-up__button-close"></button>
              <form class="pop-up-form" name="newcard-form" novalidate>
                <h2 class="pop-up-form__title">Новое место</h2>
                <input type="text" class="pop-up-form__field" placeholder="Название" id="pop-up-form-new-card-title"
                  name="title" required minlength="2" maxlength="30" autocomplete="off" />
                  <span class="pop-up-form__input-error pop-up-form-new-card-title-error"></span>
                  <input type="url" class="pop-up-form__field" placeholder="Ссылка на картинку"
                    id="pop-up-form-new-card-added-info" name="info" required autocomplete="url" />
                    <span class="pop-up-form__input-error pop-up-form-new-card-added-info-error"></span>
                    <button type="submit" class="pop-up-form__button-submit">Сохранить</button>
                  </form>
                </div>
              </section>
              <section class="pop-up" id="pop-up-image-view">
                <div class="pop-up__container">
                  <button type="button" class="pop-up__button-close"></button>
                  <figure class="pop-up-picture">
                    <img class="pop-up-picture__photo" alt="Место большое фото" src="#" />
                      <figcaption class="pop-up-picture__caption"></figcaption>
                  </figure>
                </div>
              </section>
              <section class="pop-up" id="pop-up-delete-card">
                <div class="pop-up__container">
                  <button type="button" class="pop-up__button-close"></button>
                  <form class="pop-up-form pop-up-form_delete" name="deletecard-form" novalidate>
                    <h2 class="pop-up-form__title pop-up-form__title_delete">Вы уверены?</h2>
                    <button type="submit" class="pop-up-form__button-submit">Да</button>
                  </form>
                </div>
              </section>
            </body>

            );
}

            export default App;
