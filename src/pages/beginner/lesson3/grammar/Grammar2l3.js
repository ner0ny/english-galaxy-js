const Grammar2l3 = {
  id: "grammar2l3",
  title: "English Galaxy | Урок 3",
  render: (...rest) => {
    return `
      <section class="grammar">
        <div class="grammar__container container">
          <a href="#lesson3" class="close"></a>
          <div class="grammar__content">
            <div class="grammar__info">
              <p class="grammar__info-text">Глагол have в предложении после he / she / it превращается в has:</p>
              <p class="grammar__info-example"><span class="orange">he/she/it</span> + <span class="yellow">has</span> + ...</p>
            </div>
            <a href="#grammar3l3" class="grammar__check">Далее</a>
          </div>
        </div>
      </section>
    `;
  }
};

export default Grammar2l3;