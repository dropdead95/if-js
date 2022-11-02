import Swiper, { Navigation, Pagination } from 'swiper';

export const homesSlider = () => {
  new Swiper('.homes__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
  });
};

export const reviewsSlider = () => {
  new Swiper('.reviews__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
};
