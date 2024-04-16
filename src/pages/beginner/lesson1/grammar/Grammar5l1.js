const Grammar5l1 = {
  id: "grammar5l1",
  title: "English Galaxy | Урок 1",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson1" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">like - нравиться. При переводе на английский язык перед словом like мы ставим именно личное местоимение:</p>
              <p class="grammar__info-example"><span class="yellow">I/We/You/They</span> + <span class="green">like</span></p>
            </div>
            <a href="#lesson1" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Grammar5l1;