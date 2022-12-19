export const closeAdv = () => {
  const advert = document.querySelector('.advertisement');
  const closeAdvBtn = document.querySelector('.advertisement__content-close');

  closeAdvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    advert.classList.add('hide');
  });
};
