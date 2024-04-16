const Categories = {
  id: "categories",
  title: "English Galaxy | Категории",
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
          <div class="dictionary__cards">
            <button class="categories__button" id="animal-A0">Животный мир (А0)</button>
            <button class="categories__button" id="animal-A2">Животный мир (А2)</button>
            <button class="categories__button" id="animal-B1">Животный мир (В1)</button>
            <button class="categories__button" id="animal-B2">Животный мир (В2)</button>
            <button class="categories__button" id="verb-A0">Глаголы (А0)</button>
            <button class="categories__button" id="verb-A1">Глаголы (А1)</button>
            <button class="categories__button" id="verb-A2">Глаголы (А2)</button>
            <button class="categories__button" id="adjective-A0">Прилагательные (А0)</button>
            <button class="categories__button" id="adjective-A1">Прилагательные (А1)</button>
            <button class="categories__button" id="adverb-A0">Наречия (А0)</button>
            <button class="categories__button" id="adverb-A1">Наречия (А1)</button>
            <button class="categories__button" id="cloth-A0">Одежда (А0)</button>
            <button class="categories__button" id="cloth-A1">Одежда (А1)</button>
            <button class="categories__button" id="cloth-A2">Одежда (А2)</button>
            <button class="categories__button" id="cloth-B1">Одежда (В1)</button>
            <button class="categories__button" id="food-A0">Еда (А0)</button>
            <button class="categories__button" id="food-A1">Еда (А1)</button>
            <button class="categories__button" id="food-A2">Еда (А2)</button>
            <button class="categories__button" id="hobby-A0">Хобби (А0)</button>
            <button class="categories__button" id="hobby-A1">Хобби (А1)</button>
            <button class="categories__button" id="hobby-A2">Хобби (А2)</button>
            <button class="categories__button" id="nature-A0">Природа (А0)</button>
            <button class="categories__button" id="nature-A1">Природа (А1)</button>
            <button class="categories__button" id="nature-A2">Природа (А2)</button>
            <button class="categories__button" id="health-A0">Здоровье (А0)</button>
            <button class="categories__button" id="health-C1">Здоровье (C1)</button>
            <button class="categories__button" id="travel-A0">Путешествие (А0)</button>
            <button class="categories__button" id="travel-A1">Путешествие (А1)</button>
            <button class="categories__button" id="colors">Цвета (А0)</button>
            <button class="categories__button" id="business-A0">Бизнес (А0)</button>
            <button class="categories__button" id="law-A2">Закон и порядок (А2)</button>
            <button class="categories__button" id="law-B1">Закон и порядок (B1)</button>
            <button class="categories__button" id="law-B2">Закон и порядок (B2)</button>
            <button class="categories__button" id="law-C1">Закон и порядок (C1)</button>
            </div>
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
  },
};

export default Categories;
