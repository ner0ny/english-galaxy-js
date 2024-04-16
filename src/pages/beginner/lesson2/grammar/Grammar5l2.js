const Grammar5l2 = {
  id: "grammar5l2",
  title: "English Galaxy | Урок 2",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson2" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Нужно запомнить конструкции</p>
              <p class="grammar__info-example"><span class="orange">I have/see/want</span> + <span class="green">a</span> + <span class="yellow">сущ., начинающее на согл.</span></p>
            </div>
            <a href="#lesson2" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Grammar5l2;