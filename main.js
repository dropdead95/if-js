// let user = 'John Doe';
// console.log(user);
//
// const student = 'Andrey';
// console.log(student);
//
// user = student;
// console.log(user); //Andrey
//
// let test = 1;
// test++;
// test += '1';
// console.log(test); //'21'
// test -= 1;
// console.log(test); // 20
// test = Boolean(test);
// console.log(test); // true
// // console.log(Boolean(test)); // true
// // console.log(!!test); //true
// //
//
// //8
// const arrFirst = [2, 3, 5, 8];
// let result = 1;
//
// for (let i = 0; i < arrFirst.length; i++) {
//   result = result * arrFirst[i];
// }
// console.log(result);
//
// //9
// const arrSecond = [2, 5, 8, 15, 0, 6, 20, 3];
//
// for (let i = 0; i < arrSecond.length; i++) {
//   if (arrSecond[i] > 5 && arrSecond[i] < 10) {
//     console.log(arrSecond[i]);
//   }
// }
//
// //10
// const arrThird = [2, 5, 8, 15, 0, 6, 20, 3];
//
// for (let i = 0; i < arrThird.length; i++) {
//   if (arrThird[i] % 2 === 0) {
//     console.log(arrThird[i]);
//   }
// }

//lesson-3

//5
// const palindrome = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     return str[i] === str[str.length - 1];
//   }
// };
// palindrome('hello');
//
// //6
//
// const min = (a, b) => {
//   if (a > b) {
//     return b;
//   } else if (a < b) {
//     return a;
//   } else return 'Числа равны!';
// };
// console.log(min(20, 10));

// const min = (a, b) => {
//   return a > b ? b : a;
// };
//
// console.log(min(11, 23));

// const max = (a, y) => {
//   if (a > y) {
//     return a;
//   } else if (a < y) {
//     return y;
//   } else return 'Числа равны!';
// };
// console.log(max(10, 20));
//
// // const max = (a, y) => {
// //   return a > y ? a : y;
// // };
// //
// // console.log(max(11, 23));
//
// //7
// const arr = [5, 10, 20, 22, 31, 18, 11, 40, 45, 100];
//
// const changeOnZero = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 100 === 0) {
//       arr[i] = arr[i] / 100 + 'zerozero';
//     } else if (arr[i] % 10 === 0) {
//       arr[i] = arr[i] / 10 + 'zero';
//     } else {
//       arr[i];
//     }
//   }
//   return arr;
// };
// console.log(changeOnZero(arr));

//lesson-4
//5
// const sum = (a) => {
//   return function (b) {
//     return a + b;
//   };
// };
//
// console.log(sum(2)(5));
// //6
// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');
// const text3 = document.getElementById('text3');
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// function setColor() {
//   let i = 0;
//   return function (event) {
//     event.target.style.color = colors[i];
//     i++;
//     if (i >= colors.length) {
//       i = 0;
//     }
//     return event;
//   };
// }
//
// text1.addEventListener('click', setColor());
// text2.addEventListener('click', setColor());
// text3.addEventListener('click', setColor());

// Lesson-5
// 5
// const date = '2020-11-26';
//
// function modifyDate(date) {
//   const newDate = date.split('-').reverse().join('.');
//   console.log(`${date} была заменена на ${newDate}`);
// }
// modifyDate(date);
//
// //6
// const data = [
//   {
//     country: 'Russia',
//     city: 'Saint Petersburg',
//     hotel: 'Hotel Leopold',
//   },
//   {
//     country: 'Spain',
//     city: 'Santa Cruz de Tenerife',
//     hotel: 'Apartment Sunshine',
//   },
//   {
//     country: 'Slowakia',
//     city: 'Vysokie Tatry',
//     hotel: 'Villa Kunerad',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hostel Friendship',
//   },
//   {
//     country: 'Indonesia',
//     city: 'Bali',
//     hotel: 'Ubud Bali Resort&SPA',
//   },
//   {
//     country: 'Netherlands',
//     city: 'Rotterdam',
//     hotel: 'King Kong Hostel',
//   },
//   {
//     country: 'Marocco',
//     city: 'Ourika',
//     hotel: 'Rokoko Hotel',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hotel Rehberge Berlin Mitte',
//   },
// ];
//
// function search(str) {
//   const res = [];
//   for (let i = 0; i < data.length; i++) {
//     const currentString = `${data[i].country} ${data[i].city} ${data[i].hotel}`;
//     if (currentString.toUpperCase().includes(str.toUpperCase())) {
//       res.push(currentString);
//     }
//   }
//   return res;
// }
//
// console.log(search('ger'));

// lesson-6
// 5
// function palindrome(str) {
//   return str === str.split('').reverse().join('');
// }
// palindrome('привет');
// // 6
// const data = [
//   {
//     country: 'Russia',
//     city: 'Saint Petersburg',
//     hotel: 'Hotel Leopold',
//   },
//   {
//     country: 'Spain',
//     city: 'Santa Cruz de Tenerife',
//     hotel: 'Apartment Sunshine',
//   },
//   {
//     country: 'Slowakia',
//     city: 'Vysokie Tatry',
//     hotel: 'Villa Kunerad',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hostel Friendship',
//   },
//   {
//     country: 'Indonesia',
//     city: 'Bali',
//     hotel: 'Ubud Bali Resort&SPA',
//   },
//   {
//     country: 'Netherlands',
//     city: 'Rotterdam',
//     hotel: 'King Kong Hostel',
//   },
//   {
//     country: 'Marocco',
//     city: 'Ourika',
//     hotel: 'Rokoko Hotel',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hotel Rehberge Berlin Mitte',
//   },
// ];
//
// function search(str) {
//   function filterFunc(obj) {
//     return (
//       obj.country.toLowerCase().includes(str.toLowerCase()) ||
//       obj.city.toLowerCase().includes(str.toLowerCase()) ||
//       obj.hotel.toLowerCase().includes(str.toLowerCase())
//     );
//   }
//   const newArr = data.filter(filterFunc);
//   return newArr.map((obj) => `${obj.country}, ${obj.city}, ${obj.hotel}`);
// }
// console.log(search('nether'));
// // 7;
// const hotels = [
//   {
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//   },
//   {
//     name: 'Apartment Sunshine',
//     city: 'Santa Cruz de Tenerife',
//     country: 'Spain',
//   },
//   {
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//   },
//   {
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//   },
//   {
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//   },
//   {
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//   },
//   {
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Virgin Hotel',
//     city: 'Chicago',
//     country: 'USA',
//   },
//   {
//     name: 'Grand Beach Resort',
//     city: 'Dubai',
//     country: 'United Arab Emirates',
//   },
//   {
//     name: 'Shilla Stay',
//     city: 'Seoul',
//     country: 'South Korea',
//   },
//   {
//     name: 'San Firenze Suites',
//     city: 'Florence',
//     country: 'Italy',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Black Penny Villas',
//     city: 'BTDC, Nuca Dua',
//     country: 'Indonesia',
//   },
//   {
//     name: 'Koko Hotel',
//     city: 'Tokyo',
//     country: 'Japan',
//   },
//   {
//     name: 'Ramada Plaza',
//     city: 'Istanbul',
//     country: 'Turkey',
//   },
//   {
//     name: 'Waikiki Resort Hotel',
//     city: 'Hawaii',
//     country: 'USA',
//   },
//   {
//     name: 'Puro Hotel',
//     city: 'Krakow',
//     country: 'Poland',
//   },
//   {
//     name: 'Asma Suites',
//     city: 'Santorini',
//     country: 'Greece',
//   },
//   {
//     name: 'Cityden Apartments',
//     city: 'Amsterdam',
//     country: 'Netherlands',
//   },
//   {
//     name: 'Mandarin Oriental',
//     city: 'Miami',
//     country: 'USA',
//   },
//   {
//     name: 'Concept Terrace Hotel',
//     city: 'Rome',
//     country: 'Italy',
//   },
//   {
//     name: 'Ponta Mar Hotel',
//     city: 'Fortaleza',
//     country: 'Brazil',
//   },
//   {
//     name: 'Four Seasons Hotel',
//     city: 'Sydney',
//     country: 'Australia',
//   },
//   {
//     name: 'Le Meridien',
//     city: 'Nice',
//     country: 'France',
//   },
//   {
//     name: 'Apart Neptun',
//     city: 'Gdansk',
//     country: 'Poland',
//   },
//   {
//     name: 'Lux Isla',
//     city: 'Ibiza',
//     country: 'Spain',
//   },
//   {
//     name: 'Nox Hostel',
//     city: 'London',
//     country: 'UK',
//   },
//   {
//     name: 'Leonardo Vienna',
//     city: 'Vienna',
//     country: 'Austria',
//   },
//   {
//     name: 'Adagio Aparthotel',
//     city: 'Edinburgh',
//     country: 'UK',
//   },
//   {
//     name: 'Steigenberger Hotel',
//     city: 'Hamburg',
//     country: 'Germany',
//   },
// ];
//
// const hotelsByCountries = {};
//
// hotels.map((el) => {
//   if (hotelsByCountries[el.country]) {
//     hotelsByCountries[el.country].push(el.city);
//   } else hotelsByCountries[el.country] = [el.city];
// });
// console.log(hotelsByCountries);

//lesson-7
// const obj1 = {
//   a: 'a',
//   b: {
//     a: 'a',
//     b: 'b',
//     c: {
//       a: 1,
//     },
//   },
// };
// const obj2 = {
//   b: {
//     c: {
//       a: 1,
//     },
//     b: 'b',
//     a: 'a',
//   },
//   a: 'a',
// };
// const obj3 = {
//   a: {
//     c: {
//       a: 'a',
//     },
//     b: 'b',
//     a: 'a',
//   },
//   b: 'b',
// };
//
// const deepEqual = (object1, object2) => {
//   const props1 = Object.keys(object1);
//   const props2 = Object.keys(object2);
//
//   if (props1.length !== props2.length) {
//     return false;
//   }
//
//   for (let i = 0; i < props1.length; i++) {
//     const prop = props1[i];
//     const bothAreObjects =
//       typeof object1[prop] === 'object' && typeof object2[prop] === 'object';
//
//     if (
//       (!bothAreObjects && object1[prop] !== object2[prop]) ||
//       (bothAreObjects && !deepEqual(object1[prop], object2[prop]))
//     ) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(deepEqual(obj1, obj2));
// console.log(deepEqual(obj1, obj3));

//lesson-8

// const studentsData = [
//   {
//     firstName: 'Василий',
//     lastName: 'Петров',
//     admissionYear: 2019,
//     courseName: 'Java',
//   },
//   {
//     firstName: 'Иван',
//     lastName: 'Иванов',
//     admissionYear: 2018,
//     courseName: 'JavaScript',
//   },
//   {
//     firstName: 'Александр',
//     lastName: 'Федоров',
//     admissionYear: 2017,
//     courseName: 'Python',
//   },
//   {
//     firstName: 'Николай',
//     lastName: 'Петров',
//     admissionYear: 2019,
//     courseName: 'Android',
//   },
// ];
//
// class User {
//   constructor({ firstName, lastName }) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// class Student extends User {
//   constructor({ admissionYear, courseName, firstName, lastName }) {
//     super({ firstName, lastName });
//     this.admissionYear = admissionYear;
//     this.courseName = courseName;
//   }
//
//   get course() {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.admissionYear;
//   }
// }
//
// class Students {
//   constructor(studentsData) {
//     this.studentsData = studentsData.sort(this.byField('admissionYear')).map(
//       (el) =>
//         new Student({
//           admissionYear: el.admissionYear,
//           courseName: el.courseName,
//           firstName: el.firstName,
//           lastName: el.lastName,
//         }),
//     );
//   }
//
//   byField(field) {
//     return (a, b) => (a[field] < b[field] ? 1 : -1);
//   }
//
//   getInfo() {
//     return this.studentsData.map((el) => {
//       return `${el.fullName} - ${el.courseName}, ${el.course} курс`;
//     });
//   }
// }
//
// const students = new Students(studentsData);
// console.log(students.getInfo());
//
//lesson 9

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  current: 0,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++],
      };
    }
    if (this.current <= this.data.length) {
      this.current = 0;
      return {
        done: false,
        value: this.data[this.current],
      };
    }
  },
};

function setColor(colors) {
  return function (event) {
    event.target.style.color = colors.next().value;

    return event;
  };
}

text1.addEventListener('click', setColor({ ...colors }));
text2.addEventListener('click', setColor({ ...colors }));
text3.addEventListener('click', setColor({ ...colors }));
