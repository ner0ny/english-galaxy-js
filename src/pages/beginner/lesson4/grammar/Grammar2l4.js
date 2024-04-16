const Grammar2l4 = {
  id: "grammar2l4",
  title: "English Galaxy | Урок 4",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson4" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Нужно запомнить следующую конструкцию: I'd like to  + глагол - Я бы хотел что-то сделать</p>
              <p class="grammar__info-example"><span class="orange">I'd like to</span> + <span class="yellow">глагол</span> + ...</p>
            </div>
            <a href="#grammar3l4" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Grammar2l4;