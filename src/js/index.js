import { availableHotelsSlider, homesSlider, reviewsSlider } from '../modules/slider';
import getHomes from './services/getHomes';

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

const counterAdults = 1;
const counterChildren = 0;
const counterRooms = 1;
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
                                          .map((item, indexOption) => `<option>${indexOption} years old</option>`)}
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

changeInputCounter(counterBtnsAdults, counterAdults, counterInputAdults, inputAdults, 1, 30, 'Adults', 1);
changeInputCounter(counterBtnsChildren, counterChildren, counterInputChildren, inputChildren, 0, 10, 'Children', 0, 1);
changeInputCounter(counterBtnsRooms, counterRooms, counterInputRooms, inputRooms, 1, 30, 'Rooms', 1);

// homes cards

const homesSliderWrapper = document.querySelector('.homes__slider-wrapper');

const getCards = (cards) => {
  cards.forEach(({ city, country, imageUrl, name }) => {
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
};
homesSlider();

if (!sessionStorage.getItem('hotels')) {
  getHomes('https://fe-student-api.herokuapp.com/api/hotels').then((data) => {
    getCards(data);
    sessionStorage.setItem('hotels', JSON.stringify(data));
  });
} else {
  getCards(JSON.parse(sessionStorage.getItem('hotels')));
}

// form

const availableHotelSliderWrapper = document.querySelector('.available-hotels__slider-wrapper');
const availableHotelsSection = document.querySelector('.available-hotels');
const destInput = document.getElementById('destination');
const formBtn = document.querySelector('.content__form_button');
const preloader = document.querySelector('.available-hotels__preloader');
const emptyData = document.querySelector('.empty-data');

const getAvailableHomes = (hotels) => {
  availableHotelSliderWrapper.innerHTML = '';
  hotels.forEach(({ city, country, imageUrl, name }) => {
    const availableHotelsSlide = document.createElement('div');
    availableHotelsSlide.classList.add('available-hotels__slide');
    availableHotelsSlide.innerHTML = `
                  <div class="available-hotels__slide-image">
                    <img
                      class="available-hotels__slide-image-item"
                      src=${imageUrl}
                      alt=""
                    />
                  </div>
                  <a href="#" class="available-hotels__slide-title">${name}</a>
                  <div class="available-hotels__slide-subtitle">
                    ${city}, ${country}
                  </div>
  `;
    availableHotelSliderWrapper.append(availableHotelsSlide);
    availableHotelsSlide.classList.add('swiper-slide');
  });
};
availableHotelsSlider();

const showAvailableHotels = () => {
  const url = new URL('https://fe-student-api.herokuapp.com/api/hotels');
  url.searchParams.append('search', `${destInput.value}`);
  if (destInput.value !== '') {
    preloader.classList.remove('hide');
    getHomes(url).then((data) => {
      if (data.length) {
        preloader.classList.add('hide');
        emptyData.classList.add('hide');
        getAvailableHomes(data);
        availableHotelsSection.classList.remove('hide');
      } else {
        preloader.classList.add('hide');
        emptyData.classList.remove('hide');
        availableHotelsSection.classList.add('hide');
      }
    });
  }
};

formBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showAvailableHotels();
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
reviewsSlider();
