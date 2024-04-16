const Words2l2 = {
  id: "words2l2",
  title: "English Galaxy | Урок 2",
  render: (...rest) => {
    return `
      <section class="words">
        <div class="words__container container">
          <a href="#lesson2" class="close"></a>
          <div class="words__content">
            <h2 class="words__content-title">Выберите правильный перевод</h2>
            <div class="words__content-word">ticket</div>
            <button class="word-listen"></button>
            <div class="words__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">путешествие</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input id="checkbox-true" type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">билет</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">вещь</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <a href="#words3l2" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Words2l2;