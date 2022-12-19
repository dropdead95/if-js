import { changeInputCounter } from './changeInputCouner';

const filter = () => {
  const selectWrapper = document.querySelector('.select__wrapper');
  const filterWrapper = document.querySelector('.filter__wrapper');
  const inputAdults = document.getElementById('adults');
  const inputChildren = document.getElementById('children');
  const inputRooms = document.getElementById('rooms');
  const counterInputAdults = document.querySelector('.item__counter--adults');
  const counterInputChildren = document.querySelector('.item__counter--children');
  const counterInputRooms = document.querySelector('.item__counter--rooms');
  const counterBtnsAdults = document.querySelectorAll('.filter__button--adults');
  const counterBtnsChildren = document.querySelectorAll('.filter__button--children');
  const counterBtnsRooms = document.querySelectorAll('.filter__button--rooms');
  const counterAdults = 1;
  const counterChildren = 0;
  const counterRooms = 1;

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

  changeInputCounter(counterBtnsAdults, counterAdults, counterInputAdults, inputAdults, 1, 30, 'Adults', 1);
  changeInputCounter(
    counterBtnsChildren,
    counterChildren,
    counterInputChildren,
    inputChildren,
    0,
    10,
    'Children',
    0,
    1,
  );
  changeInputCounter(counterBtnsRooms, counterRooms, counterInputRooms, inputRooms, 1, 30, 'Rooms', 1);
};

export default filter;
