export const menuBurger = () => {
  const burgerBtn = document.querySelector('.menu__burger');
  const burgerContent = document.querySelector('.menu-burger-content');

  burgerBtn.addEventListener('click', () => {
    burgerContent.classList.toggle('show');
    burgerBtn.classList.toggle('active');
  });
};
