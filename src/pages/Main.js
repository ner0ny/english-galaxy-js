const Main = {
  id: "main",
  title: "English Galaxy | Главная",
  render: () => {
    return `
        <section class="main">
            <div class="container main__container">
                <div class="main__content">
                    <h4 class="main__title">Beginner</h4>
                    <div class="main__cards">
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Построение предложений</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson1"></a>
                            </div>
                        </div>
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Артикль, простые конструкции</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson2"></a>
                            </div>
                        </div>
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Артикль, простые конструкции</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson3"></a>
                            </div>
                        </div>
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Конструкции want to, I'd like to</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson4"></a>
                            </div>
                        </div>
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Простое настоящее время</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson5"></a>
                            </div>
                        </div>
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Простое настоящее время</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson6"></a>
                            </div>
                        </div>
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Простое настоящее время, вопрос Do</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson7"></a>
                            </div>
                        </div>
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Простое настоящее время, вопрос Does</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson8"></a>
                            </div>
                        </div>
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Глагол to be: am, is, are</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson9"></a>
                            </div>
                        </div>
                        <div class="main__card">
                            <div class="main__card-content">
                                <p>Глагол to be</p>
                            </div>
                            <div class="main__card-link">
                                <a href="#lesson10"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="footer__container">
                        <nav>
                            <ul class="footer__list">
                                <li>
                                    <a class="footer__link" href="#main"><img src="images/home.svg" alt="" /><span class="footer__text">Главная</span></a>
                                </li>
                                <li>
                                    <a class="footer__link" href="#dictionary"><img src="images/book.svg" alt="" /><span class="footer__text">Словарь</span></a>
                                </li>
                                <li>
                                    <a class="footer__link" href="#settings"><img src="images/settings.svg" alt="" /><span class="footer__text">Настройки</span></a>
                                </li>
                                <li>
                                    <a class="footer__link" href="#profile"><img src="images/user.svg" alt="" /><span class="footer__text">Профиль</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        </section>
    `;
  },
};

export default Main;
