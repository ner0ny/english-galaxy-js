const Mistake1l4 = {
  id: "mistake1l4",
  title: "English Galaxy | Урок 4",
  render: (...rest) => {
    return `
      <section class="mistake">
        <div class="mistake__container container">
          <a href="#lesson4" class="close"></a>
          <div class="mistake__content"> 
            <h2 class="mistake__content-title">Отметьте неправильное предложение</h2>
            <div class="mistake__content-answers">
              <fieldset class="checkbox-group">
                <div class="checkbox">
                  <label class="checkbox-wrapper">
                    <input type="radio" class="checkbox-input"/>
                    <span class="checkbox-tile">
                      <span class="checkbox-label">I want to visit Germany next month</span>
                    </span>
                  </label>
                </div>
                  <div class="checkbox">
                    <label class="checkbox-wrapper">
                      <input type="radio" class="checkbox-input"/>
                      <span class="checkbox-tile">
                        <span class="checkbox-label">He wants to visit Russia this year</span>
                      </span>
                    </label>
                  </div>
                  <div class="checkbox">
                    <label class="checkbox-wrapper">
                      <input id="checkbox-true" type="radio" class="checkbox-input"/>
                      <span class="checkbox-tile">
                        <span class="checkbox-label">I want to visit England in this year</span>
                      </span>
                    </label>
                  </div>
              </fieldset>
            </div>
          </div>
          <a href="#mistake2l4" class="task__check task__check-disabled">Проверить</a>
        </div>
      </section>
    `;
  }
};

export default Mistake1l4;