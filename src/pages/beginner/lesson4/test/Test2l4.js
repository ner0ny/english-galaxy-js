const Test2l4 = {
  id: "test2l4",
  title: "English Galaxy | Урок 4",
  render: (...rest) => {
    return `
      <section class="test">
        <div class="test__container container">
          <a href="#lesson4" class="close"></a>
          <div class="test__content">
            <h2 class="test__content-title">Заполните верно пропуск</h2>
            <div class="test__content-text">I ___ understand it</div>
            <div class="test__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">can to</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">want</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input id="checkbox-true" type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">want to</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <a href="#test3l4" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Test2l4;