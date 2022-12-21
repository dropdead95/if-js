import { availableHotelsSlider } from '../slider';
import { getHomes } from '../../services/services';

const form = (url) => {
  const availableHotelSliderWrapper = document.querySelector('.available-hotels__slider-wrapper');
  const availableHotelsSection = document.querySelector('.available-hotels');
  const destInput = document.getElementById('destination');
  const form = document.querySelector('.content__form');
  const preloader = document.querySelector('.available-hotels__preloader');
  const emptyData = document.querySelector('.empty-data');
  const adultsInput = document.getElementById('adults');
  const roomsInput = document.getElementById('rooms');

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
    const urlAvailable = new URL(url);
    const ages = [];

    document.querySelectorAll('select').forEach((select) => {
      ages.push(select.options.selectedIndex);
    });
    const childrenStr = ages.join(',');

    urlAvailable.searchParams.append('search', `${destInput.value}`);
    urlAvailable.searchParams.append('adults', `${adultsInput.value.replace('Adults', '')}`.trim());
    urlAvailable.searchParams.append('children', `${childrenStr}`.trim());
    urlAvailable.searchParams.append('rooms', `${roomsInput.value.replace('Rooms', '')}`.trim());
    if (destInput.value !== '') {
      preloader.classList.remove('hide');
      getHomes(urlAvailable).then((data) => {
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

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showAvailableHotels();
  });
};

export default form;
