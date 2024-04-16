const Settings = {
  id: "settings",
  title: "English Galaxy | Настройки",
  render: () => {
    return `
        <section class="settings">
            <div class="settings__container container">
                <div class="settings__content">
                <h3 class="settings__title">Обучение</h3>
                <div class="settings__levels">
                    <div class="settings__text">Уровень языка</div>
                    <div class="settings__level"></div>
                </div>
                <h3 class="settings__title">Общие</h3>
                <div class="settings__point">
                    <p class="settings__text">Вибрация</p>
                    <div>
                        <label class="settings__switch">
                            <input id="vibration" type="checkbox" />
                            <span class="settings__slider"></span>
                        </label>
                    </div>
                </div>
                <div class="settings__info">
                    <div class="feedback">
                        <div class="feedback__title">Оцените мою работу:</div>
                            <div class="rating">
                                <input type="radio" name="rating" class="rating__input" id="rating-5" />
                                <label for="rating-5" title="Очень нравится"></label>
                                <input type="radio" name="rating" class="rating__input" id="rating-4" />
                                <label for="rating-4" title="Нравится"></label>
                                <input type="radio" name="rating" class="rating__input" id="rating-3" />
                                <label for="rating-3" title="Нормально"></label>
                                <input type="radio" name="rating" class="rating__input" id="rating-2" />
                                <label for="rating-2" title="Не нравится"></label>
                                <input type="radio" name="rating" class="rating__input" id="rating-1" />
                                <label for="rating-1" title="Очень плохо, есть над чем работать"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="footer__container">
                        <nav>
                            <ul class="footer__list">
                                <li><a class="footer__link" href="#main"><img src="images/home.svg" alt="" /><span class="footer__text">Главная</span></a></li>
                                <li><a class="footer__link" href="#dictionary"><img src="images/book.svg" alt="" /><span class="footer__text">Словарь</span></a></li>
                                <li><a class="footer__link" href="#settings"><img src="images/settings.svg" alt="" /><span class="footer__text">Настройки</span></a></li>
                                <li><a class="footer__link" href="#profile"><img src="images/user.svg" alt="" /><span class="footer__text">Профиль</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        </section>
    `;
  }
};

export default Settings;