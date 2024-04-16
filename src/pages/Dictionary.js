const Dictionary = {
  id: "dictionary",
  title: "English Galaxy | Словарь",
  render: () => {
    return `
        <section class="dictionary">
            <div class="dictionary__container container">
                <div class="dictionary__header">
                    <nav>
                        <ul class="dictionary__header-list">
                            <li><a class="dictionary__header-link" href="#dictionary">Список слов</a></li>
                            <li><a class="dictionary__header-link" href="#favorite">Избранное</a></li>
                            <li><a class="dictionary__header-link" href="#categories">Категории</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="dictionary__cards"></div>
                <footer class="footer">
                    <div class="footer__container">
                        <nav>
                            <ul class="footer__list">
                                <li><a class="footer__link" href="#main"><img  src="images/home.svg" alt=""><span class="footer__text">Главная</span></a></li>
                                <li><a class="footer__link" href="#dictionary"><img src="images/book.svg" alt=""> <span class="footer__text">Словарь</span></a></li>
                                <li><a class="footer__link" href="#settings"><img src="images/settings.svg" alt=""> <span class="footer__text">Настройки</span></a></li>
                                <li><a class="footer__link" href="#profile"><img src="images/user.svg" alt=""> <span class="footer__text">Профиль</span> </a></li>
                            </ul>
                        </nav>
                    </div>
                </footer>  
            </div>
        </section>
    `;
  }
};

export default Dictionary;