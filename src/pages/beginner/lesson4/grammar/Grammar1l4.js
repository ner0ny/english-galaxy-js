const Grammar1l4 = {
  id: "grammar1l4",
  title: "English Galaxy | Урок 4",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson4" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Нужно запомнить следующую конструкцию: I want to + глагол - Я хочу что-то сделать</p>
              <p class="grammar__info-example"><span class="green">I want to</span> + <span class="yellow">глагол</span> + ...</p>
            </div>
            <a href="#grammar2l4" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Grammar1l4;