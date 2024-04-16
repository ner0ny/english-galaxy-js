const Grammar2l8 = {
  id: "grammar2l8",
  title: "English Galaxy | Урок 8",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson8" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Очень важно соблюдать правильный порядок слов в предложении:</p>
              <p class="grammar__info-example"><span class="orange">Подлежащее</span> + <span class="yellow">глагол</span> + ...</p>
            </div>
            <a href="#lesson8" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  },
};

export default Grammar2l8;
