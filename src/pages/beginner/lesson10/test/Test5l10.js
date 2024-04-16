const Test5l10 = {
  id: "test5l10",
  title: "English Galaxy | Урок 10",
  render: (...rest) => {
    return `
      <section class="test">
        <div class="test__container container">
          <a href="#lesson10" class="close"></a>
          <div class="test__content">
            <h2 class="test__content-title">Заполните верно пропуск</h2>
            <div class="test__content-text">I can ___ you</div>
            <div class="test__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input id="checkbox-true" type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">help</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">to help</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">help for</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <a href="#lesson10" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Test5l10;