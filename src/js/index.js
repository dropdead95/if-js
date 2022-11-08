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
const inputAdults = document.getElementById('adults');
const inputChildren = document.getElementById('children');
const inputRooms = document.getElementById('rooms');
const counterInputAdults = document.querySelector('.item__counter--adults');
const counterInputChildren = document.querySelector('.item__counter--children');
const additional = document.querySelector('.filter__additional-content');
const counterInputRooms = document.querySelector('.item__counter--rooms');
const counterBtnsAdults = document.querySelectorAll('.filter__button--adults');
const counterBtnsChildren = document.querySelectorAll('.filter__button--children');
const counterBtnsRooms = document.querySelectorAll('.filter__button--rooms');
const selectList = document.querySelector('.filter__additional-select');

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

let counterAdults = 1;
let counterChildren = 0;
let counterRooms = 1;
let childrenNums = [];

const changeInputCounter = (
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
          childrenNums.pop();
          console.log(childrenNums);
        }
      } else if (index === 1 && counterType < maxCount) {
        counterType++;
        if (e.target.classList.contains('filter__button--children--inc')) childrenNums.push(counterType);
        childrenNums.map((i) => {
          const selectWrapper = document.createElement('div');
          selectWrapper.innerHTML = `<select class="filter__additional-select" id=${i}>
                                        <option>0 years old</option>
                                        <option>1 years old</option>
                                        <option>2 years old</option>
                                        <option>3 years old</option>
                                        <option>4 years old</option>
                                        <option>5 years old</option>
                                        <option>6 years old</option>
                                        <option>7 years old</option>
                                        <option>8 years old</option>
                                        <option>9 years old</option>
                                        <option>10 years old</option>
                                        <option>11 years old</option>
                                        <option>12 years old</option>
                                        <option>13 years old</option>
                                        <option>14 years old</option>
                                        <option>15 years old</option>
                                        <option>16 years old</option>
                                        <option>17 years old</option>
                                        <option>18 years old</option>
                                     </select>`;
          additional.appendChild(selectWrapper);
        });
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

changeInputCounter(counterBtnsAdults, counterAdults, counterInputAdults, inputAdults, 1, 30, 'Adults', 1);
changeInputCounter(counterBtnsChildren, counterChildren, counterInputChildren, inputChildren, 0, 10, 'Children', 0, 1);
changeInputCounter(counterBtnsRooms, counterRooms, counterInputRooms, inputRooms, 1, 30, 'Rooms', 1);

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
