// №1⊗jsPmLpOF
// Даны два массива: первый с названиями дней недели,
// а второй - с их порядковыми номерами:

let arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let arr2 = [1, 2, 3, 4, 5, 6, 7];

let daysObj = {};
for (let i = 0; i < arr1.length; i++) {
  daysObj[arr1[i]] = arr2[i];
}
console.log(daysObj);

// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// №2⊗jsPmLpOF
// Дан объект:

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// Переберите этот объект циклом и запишите в новый
// объект те элементы, которые являются четными числами.
let myNewObj = {};

let positiveNum = {};
for (element in obj) {
  console.log(obj[element]);
  if (obj[element] % 2 === 0) positiveNum[element] = obj[element];
}
console.log(positiveNum);

// №3⊗jsPmLpOF
// Дан объект:

obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// Переберите этот объект циклом и создайте
//  новый объект так, чтобы его ключами
// стали элементы старого объекта,
// а значениями - ключи старого объекта.

let transObj = {};

for (let element in obj) {
  transObj[Number(obj[element])] = element;
}

console.log(transObj);
