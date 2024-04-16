const Mistake4l3 = {
  id: "mistake4l3",
  title: "English Galaxy | Урок 3",
  render: (...rest) => {
    return `
      <section class="mistake">
        <div class="mistake__container container">
          <a href="#lesson3" class="close"></a>
          <div class="mistake__content"> 
            <h2 class="mistake__content-title">Отметьте неправильное предложение</h2>
            <div class="mistake__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input"/>
                    <span class="checkbox-tile">
                      <span class="checkbox-label">She likes music</span>
                    </span>
                  </label>
                </div>
                  <div class="checkbox">
                    <label class="checkbox-wrapper">
                      <input id="checkbox-true" type="radio" class="checkbox-input"/>
                      <span class="checkbox-tile">
                        <span class="checkbox-label">He likes a music</span>
                      </span>
                    </label>
                  </div>
                  <div class="checkbox">
                    <label class="checkbox-wrapper">
                      <input type="radio" class="checkbox-input"/>
                      <span class="checkbox-tile">
                        <span class="checkbox-label">They like music</span>
                      </span>
                    </label>
                  </div>
              </fieldset>
            </div>
          </div>
          <a href="#lesson3" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Mistake4l3;