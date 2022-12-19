let childrenNums = [];
const additional = document.querySelector('.filter__additional-content');

export const changeInputCounter = (
  buttonsType,
  counterType,
  counterInputType,
  inputType,
  minCount,
  maxCount,
  name,
  value,
  addValue,
) => {
  buttonsType.forEach((btn, index) => {
    buttonsType[0].disabled = true;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (index === 0 && counterType > minCount) {
        counterType--;
        if (e.target.classList.contains('filter__button--children--dec')) {
          document.querySelector('.filter__additional-select').remove();
        }
      } else if (index === 1 && counterType < maxCount) {
        counterType++;
        if (e.target.classList.contains('filter__button--children--inc')) {
          childrenNums.push(counterType);
          childrenNums.map((i) => {
            const selectWrapperInner = document.createElement('div');
            selectWrapperInner.classList.add('select--wrapper');
            selectWrapperInner.innerHTML = `<select class="filter__additional-select" id=${i}>
                                        ${new Array(17)
                                          .fill(0)
                                          .map(
                                            (item, indexOption) =>
                                              `<option value=${indexOption}>${indexOption} years old</option>`,
                                          )}
                                     </select>`;
            additional.appendChild(selectWrapperInner);
          });
          childrenNums = [];
        }
      }
      buttonsType[0].disabled = counterType === value;
      if (counterType === addValue) {
        additional.classList.remove('hide');
      } else if (counterType === 0) additional.classList.add('hide');
      counterInputType.value = counterType;
      inputType.value = `${counterType} ${name}`;
    });
  });
};
