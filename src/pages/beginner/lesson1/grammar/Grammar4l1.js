const Grammar4l1 = {
  id: "grammar4l1",
  title: "English Galaxy | Урок 1",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson1" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">В английском языке есть очень много устойчивых выражений, которые надо запомнить, например: speak English - говорить по-фнглийски (без предлога!) go to work - ходить на работу</p>
              <p class="grammar__info-example"><span class="blue">speak</span> + <span class="yellow">English</span></p>
            </div>
            <a href="#grammar5l1" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  },
};

export default Grammar4l1;
