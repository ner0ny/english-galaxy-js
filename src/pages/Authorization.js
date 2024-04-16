const Authorization = {
  id: "authorization",
  title: "English Galaxy | Авторизация",
  render: () => {
    return `
      <section class="authorization">
        <div class="authorization__container">
          <div class="authorization__form-container authorization__sign-up-container">
            <form class="authorization__form" action="">
              <h1 class="authorization__form-title">Создать аккаунт</h1>
              <input name="surname" id="sign-up__surname" type="text" placeholder="Фамилия" />
              <div class="authorization__form-error" id="sign-up__error-surname"></div>
              <input name="name" id="sign-up__name" type="text" placeholder="Имя" />
              <div class="authorization__form-error" id="sign-up__error-name"></div>
              <input name="email" id="sign-up__email" type="email" placeholder="Почта"/>
              <div class="authorization__form-error" id="sign-up__error-email"></div>
              <input name="password" id="sign-up__password" type="password" placeholder="Пароль"  />
              <div class="authorization__form-error" id="sign-up__error-password"></div>
              <button id="sign-up" href="#main" class="form__button">Зарегистрироваться</button>
            </form>
          </div>
          <div class="authorization__form-container authorization__sign-in-container">
            <form action="">
              <h1 class="authorization__form-title">Войти</h1>
              <input name="email" id="sign-in__email" type="email" placeholder="Почта"/>
              <div class="authorization__form-error" id="sign-in__error-email"></div>
              <input name="password" id="sign-in__password" type="password" placeholder="Пароль" />
              <div class="authorization__form-error" id="sign-in__error-password"></div>
              <button id="sign-in" href="#main" class="form__button">Войти</button>
            </form>
          </div>
          <div class="authorization__overlay-container">
            <div class="authorization__overlay">
              <div class="authorization__overlay-panel authorization__overlay-left">
                <h1>Войти в аккаунт</h1>
                <p>Чтобы оставаться на связи с нами, пожалуйста, введите свои данные</p>
                <button class="authorization__overlay-ghost" id="sign-in__btn">Войти</button>
              </div>
              <div class="authorization__overlay-panel authorization__overlay-right">
                <h1>Привет, друг!</h1>
                <p>Введите свои личные данные и начните изучение</p>
                <button class="authorization__overlay-ghost" id="sign-up__btn">Зарегистрироваться</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },
};

export default Authorization;
