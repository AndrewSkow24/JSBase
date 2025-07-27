// №1⊗jsPmLpCd
// Дан следующий массив:
let arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива,
// которые больше 3-х, но меньше 10.
console.log("task 1");
for (elem of arr) {
  if (elem > 3 && elem < 10) {
    console.log(elem);
  }
}
// №2⊗jsPmLpCd
// Дан следующий объект:

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// Выведите в консоль те элементы объекта,
// значения которых - нечетные числа.
console.log("task 2");
for (let key in obj) {
  if (obj[key] % 2 != 0) console.log(obj[key]);
}
