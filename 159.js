// в цикле можно заполнять массивы данных
// для этого используется метод push

let arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr);

// №1⊗jsPmLpAF
// Используя цикл и метод push заполните массив
// числами от 1 до 10.
console.log("task 1");
arr = [];
for (let i = 1; i < 10; i++) {
  arr.push(i);
}
console.log(arr);

// №2⊗jsPmLpAF
// Используя цикл и метод push заполните массив 10-ю буквами 'x'.
console.log("task 2");
arr = [];
for (let i = 0; i < 10; i++) {
  arr.push("x");
}
console.table(arr);

// №3⊗jsPmLpAF
// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
console.log("task 4");
arr = [1, -1, 23, 312, -212, 12, -23, 23];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) newArr.push(arr[i]);
}
console.log(newArr);
