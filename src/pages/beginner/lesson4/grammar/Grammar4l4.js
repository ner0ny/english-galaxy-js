const Grammar4l4 = {
  id: "grammar4l4",
  title: "English Galaxy | Урок 4",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson4" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Эти выражения переводяся на английский язык без какого-либо предлога: this week - на этой неделе</p>
              <p class="grammar__info-example"><span class="orange">this</span> + <span class="yellow">week/month/year</span></p>
            </div>
            <a href="#lesson4" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Grammar4l4;