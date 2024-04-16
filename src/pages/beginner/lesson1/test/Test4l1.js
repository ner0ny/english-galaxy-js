const Test4l1 = {
  id: "test4l1",
  title: "English Galaxy | Урок 1",
  render: (...rest) => {
    return `
      <section class="test">
        <div class="test__container container">
          <a href="#lesson1" class="close"></a>
          <div class="test__content">
            <h2 class="test__content-title">Заполните верно пропуск</h2>
            <div class="test__content-text">I ___ so</div>
            <div class="test__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">think also</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">so</span>
                    </span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input id="checkbox-true" type="radio" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-label">also think</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <a href="#test5l1" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Test4l1;