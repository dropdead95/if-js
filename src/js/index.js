import { homesSlider, reviewsSlider } from './modules/slider';
import { closeAdv } from './modules/closeAdv';
import { menuBurger } from './modules/menuBurger';
import filter from './modules/form/filter';
import homesCards from './modules/homesCards';
import form from './modules/form/form';

const url = 'https://if-student-api.onrender.com/api/hotels';
//  filter
filter();
// homes cards
homesCards(url);
homesSlider();
// form
form(url);
// close adv
closeAdv();
//  menu burger
menuBurger();
reviewsSlider();
