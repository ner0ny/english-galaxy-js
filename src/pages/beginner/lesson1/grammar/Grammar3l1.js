const Grammar3l1 = {
  id: "grammar3l1",
  title: "English Galaxy | Урок 1",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson1" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Некоторые слова всегда ставятся в одном и том же месте в предложении. Например: also (также, тоже) ставится между подложащим и глаголом:</p>
              <p class="grammar__info-example"><span class="orange">Подлежащее</span> + <span class="green">also</span> + <span class="yellow">глагол</span> + ...</p>
            </div>
            <a href="#grammar4l1" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Grammar3l1;