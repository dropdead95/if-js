import { bubbleSort } from '../utils/bubbleSort';
import { addToStorage } from '../services/services';

const homesCards = (url) => {
  const homesSliderWrapper = document.querySelector('.homes__slider-wrapper');

  addToStorage(url, getCards);

  function getCards(cards) {
    bubbleSort(cards);

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
  }
};

export default homesCards;
