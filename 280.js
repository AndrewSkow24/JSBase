// №1⊗jsPmSMMA
// Дан массив с числами.
// Используя метод forEach найдите сумму
// квадратов элементов этого массива.

let arr = [1, 2, 3, 4];
let sum = 0;

arr.forEach((el) => {
  sum += el ** 2;
});

console.log(sum);
