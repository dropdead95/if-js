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
