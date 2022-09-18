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
const palindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    return str[i] === str[str.length - 1];
  }
};
palindrome('hello');

//6

const min = (a, b) => {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else return 'Числа равны!';
};
console.log(min(20, 10));

// const min = (a, b) => {
//   return a > b ? b : a;
// };
//
// console.log(min(11, 23));

const max = (a, y) => {
  if (a > y) {
    return a;
  } else if (a < y) {
    return y;
  } else return 'Числа равны!';
};
console.log(max(10, 20));

// const max = (a, y) => {
//   return a > y ? a : y;
// };
//
// console.log(max(11, 23));

//7
const arr = [5, 10, 20, 22, 31, 18, 11, 40, 45, 100];

const changeOnZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 100 === 0) {
      arr[i] = arr[i] / 100 + 'zerozero';
    } else if (arr[i] % 10 === 0) {
      arr[i] = arr[i] / 10 + 'zero';
    } else {
      arr[i];
    }
  }
  return arr;
};
console.log(changeOnZero(arr));
