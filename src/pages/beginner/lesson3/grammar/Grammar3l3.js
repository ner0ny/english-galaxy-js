const Grammar3l3 = {
  id: "grammar3l3",
  title: "English Galaxy | Урок 3",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson3" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Сложные предложения в английском языке могут переводиться как с использованием that (что), так и без него: I see (that) - Я вижу (что)</p>
              <p class="grammar__info-example"><span class="orange">I</span> + <span class="green">see</span></p>
            </div>
            <a href="#lesson3" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Grammar3l3;