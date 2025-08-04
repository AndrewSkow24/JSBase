// №1⊗jsPmFBRt
// Сделайте функцию, которая параметром принимает
// число, а возвращает куб этого числа.
// С помощью этой функции найдите куб числа 3 и
// запишите его в переменную res.
console.log("task 1");
function cubeOfNum(num) {
  return num ** 3;
}
let res = cubeOfNum(3);
console.log(res);

// №2⊗jsPmFBRt
// Сделайте функцию, которая параметром принимает
// число, а возвращает квадратный корень из этого
// числа. С помощью этой функции найдите корень числа
// 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и
// выведите их в консоль.
console.log("task 2");
function sqrtOfNum(num) {
  return Math.sqrt(num);
}
let res1 = sqrtOfNum(3);
let res2 = sqrtOfNum(4);
console.log(res1 + res2);
