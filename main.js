let user = 'John Doe';
console.log(user);

const student = 'Andrey';
console.log(student);

user = student;
console.log(user); //Andrey

let test = 1;
test++;
test += '1';
console.log(test); //'21'
test -= 1;
console.log(test); // 20
test = Boolean(test);
console.log(test); // true
// console.log(Boolean(test)); // true
// console.log(!!test); //true
//

//8
const arrFirst = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < arrFirst.length; i++) {
  result = result * arrFirst[i];
}
console.log(result);

//9
const arrSecond = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arrSecond.length; i++) {
  if (arrSecond[i] > 5 && arrSecond[i] < 10) {
    console.log(arrSecond[i]);
  }
}

//10
const arrThird = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arrThird.length; i++) {
  if (arrThird[i] % 2 === 0) {
    console.log(arrThird[i]);
  }
}
