const Grammar1l3 = {
  id: "grammar1l3",
  title: "English Galaxy | Урок 3",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson3" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Некоторые английские существительные образуют множественное число не по правилам, эти слова нужно запомнить:</p>
              <p class="grammar__info-example"><span class="green">men</span> + <span class="yellow">women</span> + <span class="orange">children</span></p>
            </div>
            <a href="#grammar2l3" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  },
};

export default Grammar1l3;
