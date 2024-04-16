const Grammar4l2 = {
  id: "grammar4l2",
  title: "English Galaxy | Урок 2",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson2" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Артикль не ставится, если:</p>
              <p class="grammar__info-example"><span class="orange">Подлежащее</span> + <span class="green">глагол</span> + <span class="yellow">this/that</span> + <span class="blue">сущ. в ед. ч.</span></p>
            </div>
            <a href="#grammar5l2" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Grammar4l2;