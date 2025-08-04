// №1⊗jsPmFBSC
// Пусть у вас есть функция,
// возвращающая квадратный корень из числа,
// и функция, округляющая дробь до трех знаков в
// дробной части:
console.log("task 1");
function sqrt(num) {
  return Math.sqrt(num);
}

function round(num) {
  return num.toFixed(3);
}
// С помощью этих функций найдите квадратный корень
// из числа 2 и округлите его до трех знаков в дробной
// части.
console.log(round(sqrt(2)));

// №2⊗jsPmFBSC
// Пусть у вас есть функция, возвращающая квадратный
// корень из числа, и функция,
// возвращающая сумму трех чисел:
console.log("task 2");
function sqrt(num) {
  return Math.sqrt(num);
}

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
// С помощью этих функций найдите сумму
// корней чисел 2, 3 и 4 и запишите ее в переменную res.
let res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res);

// №3⊗jsPmFBSC
// Пусть у вас есть функция,
// округляющая дробь до трех знаков в дробной части:
console.log("task 3");
function round(num) {
  return num.toFixed(3);
}
// С помощью этой функции модифицируйте
// предыдущую задачу так, чтобы в переменную
// res записывалась дробь, округленная до
// 3-х знаков в дробной части.
res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res);
