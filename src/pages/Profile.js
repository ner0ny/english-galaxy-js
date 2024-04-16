const Profile = {
  id: "profile",
  title: "English Galaxy | Профиль",
  render: () => {
    return `
      <section class="profile">
        <div class="container">
          <div class="profile__container">
            <div class="profile__image">
              <img src="" id="profile-img" accept="image/gif, image/jpeg, image/png, image/jpg" />
            </div>
            <div class="profile__change-content">
              <form method="post">
                <label class="profile__change-input">
                  <input id="file" type="file" name="file" />
                  <span>Загрузить фотографию</span>
                </label>
              </form>
              <div class="profile__change-login-box">
                <form action="">
                  <input readonly placeholder="Имя" name="name" type="text" />
                  <div class="profile__change-error profile__error-name"></div>
                  <input readonly placeholder="Фамилия" name="surname" type="text" />
                  <div class="profile__change-error profile__error-surname"></div>
                  <input readonly placeholder="Е-mail" name="email" type="email" />
                  <button class="profile__change-button" id="profile__change-info">Изменить данные</button>
                </form>
              </div>
              <div class="profile__change-buttons">
                <button class="profile__change-button" id="profile__change-password">Изменить пароль</button>
                <button class="profile__change-button" id="profile__leave">Выйти</button>
                <button class="profile__change-button" id="profile__delete">Удалить аккаунт</button>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="footer__container">
              <nav>
                <ul class="footer__list">
                  <li><a class="footer__link" href="#main"><img src="images/home.svg" /><span class="footer__text">Главная</span></a></li>
                  <li><a class="footer__link" href="#dictionary"><img src="images/book.svg" /><span class="footer__text">Словарь</span></a></li>
                  <li><a class="footer__link" href="#settings"><img src="images/settings.svg" alt="" /><span class="footer__text">Настройки</span></a></li>
                  <li><a class="footer__link" href="#profile"><img src="images/user.svg" alt="" /><span class="footer__text">Профиль</span></a></li>
                </ul>
              </nav>
            </div>
          </footer>
          <dialog class="modal">
            <form class="modal__form" action="">
              <div class="modal__input">
                <label>Старый пароль</label>
                <input placeholder="Старый пароль" name="currentPassword" type="password" />
                <div class="modal__error modal__error-current"></div>
              </div>
              <div class="modal__input">
                <label>Новый пароль</label>
                <input placeholder="Новый пароль" name="newPassword" type="password" />
                <div class="modal__error modal__error-new"></div>
              </div>
              <button class="modal__button">Изменить пароль</button>
            </form>
            <div class="modal__close"></div>
          </dialog>
        </div>
      </section>
    `;
  }
};

export default Profile;