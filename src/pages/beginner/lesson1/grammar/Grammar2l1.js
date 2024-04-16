const Grammar2l1 = {
  id: "grammar2l1",
  title: "English Galaxy | Урок 1",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson1" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Очень важно соблюдать правильный порядок слов в предложении:</p>
              <p class="grammar__info-example"><span class="orange">Подлежащее</span> + <span class="yellow">глагол</span> + ...</p>
            </div>
            <a href="#grammar3l1" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  },
};

export default Grammar2l1;
