const Grammar1l2 = {
  id: "grammar1l2",
  title: "English Galaxy | Урок 2",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson2" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Если существительное стоит в единственном числе (неисчисляемое), то перед ним ставится неопределенный артикль а или аn:</p>
              <p class="grammar__info-example"><span class="green">Подлежащее</span> + <span class="yellow">глагол</span> + <span class="blue">a</span> + <span class="orange">существительное</span></p>
            </div>
            <a href="#grammar2l2" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  },
};

export default Grammar1l2;
