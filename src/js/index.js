import { homesSlider, reviewsSlider } from '../modules/slider';

import data from './homesData';

// homes cards

const homesSliderWrapper = document.querySelector('.homes__slider-wrapper');

data.forEach(({ city, country, imageUrl, name }) => {
  const homesSlide = document.createElement('div');
  homesSlide.classList.add('homes__slide', 'swiper-slide');
  homesSlide.innerHTML = `
                  <div class="homes__slide-image">
                    <img
                      class="homes__slide-image-item"
                      src=${imageUrl}
                      alt=""
                    />
                  </div>
                  <a href="#" class="homes__slide-title">${name}</a>
                  <div class="homes__slide-subtitle">
                    ${city}, ${country}
                  </div>
  `;
  homesSliderWrapper.append(homesSlide);
});
homesSlider();
reviewsSlider();

//  filter

const selectWrapper = document.querySelector('.select__wrapper');
const filterWrapper = document.querySelector('.filter__wrapper');
const filterItems = document.querySelectorAll('.filter__item');
const adultsInput = document.getElementById('adults');
const childrenInput = document.getElementById('children');
const roomsInput = document.getElementById('room');
const adultsDecBtn = document.getElementById('button-adults');
const childrenDecBtn = document.getElementById('button-children');
const roomsDecBtn = document.getElementById('button-rooms');
const additionalContent = document.querySelector('.filter__additional-content');

const showFilter = () => {
  filterWrapper.classList.remove('hide');
  filterWrapper.classList.add('show');
};

const hideFilter = () => {
  filterWrapper.classList.remove('show');
  filterWrapper.classList.add('hide');
};

selectWrapper.addEventListener('click', showFilter);

window.addEventListener('click', (e) => {
  if (!e.target.closest('.select__wrapper') && !e.target.closest('.filter__wrapper')) {
    hideFilter();
  }
});

adultsDecBtn.disabled = true;
childrenDecBtn.disabled = true;
roomsDecBtn.disabled = true;

filterItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const counter = e.target.closest('.filter__item').querySelector('.filter__item-counter');
    const counterInput = e.target.closest('.filter__item').querySelector('.item__counter');
    let value = counterInput.value;

    function changeInputs(titleInputClass, rangeLow, rangeHigh, inputType, valueName, valueNames, differentCondition) {
      if (
        e.target.classList.contains('filter__button--inc') &&
        counter.previousSibling.classList.contains(titleInputClass)
      ) {
        if (differentCondition) {
          value++;
          inputType.value = `${value} ${valueNames}`;
        }
      } else if (
        e.target.classList.contains('filter__button--dec') &&
        counter.previousSibling.classList.contains(titleInputClass)
      ) {
        if (value <= rangeLow) {
          value;
          inputType.value = `${value} ${valueName}`;
        } else {
          value--;
          inputType.value = `${value} ${valueNames}`;

          if (value === 1) {
            inputType.value = `${value} ${valueName}`;
          }
        }
      }
    }

    changeInputs(
      'item__title--adults',
      1,
      30,
      adultsInput,
      'Adult',
      'Adults',
      'value >= rangeLow && value < rangeHigh',
    );
    changeInputs('item__title--rooms', 1, 30, roomsInput, 'Room', 'Rooms', 'value >= rangeLow && value < rangeHigh');
    changeInputs('item__title--children', 0, 10, childrenInput, 'Children', 'Children', 'value < rangeLow');
    counterInput.value = value;
  });
});

// close adv

const advert = document.querySelector('.advertisement');
const closeAdvBtn = document.querySelector('.advertisement__content-close');

const closeAdv = () => {
  closeAdvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    advert.classList.add('hide');
  });
};
closeAdv();
//  menu burger

const burgerBtn = document.querySelector('.menu__burger');
const burgerContent = document.querySelector('.menu-burger-content');

burgerBtn.addEventListener('click', () => {
  burgerContent.classList.toggle('show');
  burgerBtn.classList.toggle('active');
});
