// №1⊗jsPmFBMst
console.log("task 1");
// Код должен найти сумму результатов работы
// двух функций:
function func1() {
  return 3;
}
function func2() {
  return 5;
}
console.log(func1() + func2());

// №2⊗jsPmFBMst
console.log("task 2");
// Код должен найти сумму элементов массива:

function sum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }
  return res;
}

console.log(sum([1, 2, 3, 4, 5]));

// №3⊗jsPmFBMst
// Код должен найти сумму элементов массива, однако,
//  ничего не выводит в консоль:
console.log("task 3");
let arr = [1, 2, 3, 4, 5];

function func(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  console.log(res);
}
func(arr);

// №4⊗jsPmFBMst
// Код должен найти сумму результатов работы двух функций:
console.log("task 4");
function func1_4() {
  return 3;
}
function func2_4() {
  return 5;
}

console.log(func1_4() + func2_4());

// №5⊗jsPmFBMst
// Код должен найти сумму элементов массива:
console.log("task 5");
sum = sum([1, 2, 3, 4, 5]);
console.log(sum);

function sum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}
// №6⊗jsPmFBMst
// Код должен найти сумму элементов массива:
console.log("task 6");
let res = sum6([1, 2, 3, 4, 5]);
console.log(res);

function sum6(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}
// №7⊗jsPmFBMst
// Функция добавляет ноль к числу от 1 до 9,
// а числа больше 9 возвращает без изменений:
console.log("task 7");
function add(num) {
  if (num <= 9) {
    return "0" + num;
  }
  return num;
}
console.log(add(8));
console.log(add(10));

// №8⊗jsPmFBMst
// Код должен найти сумму элементов массива:
console.log("task 8");
arr = [1, 2, 3, 4, 5];
sum = sum8(arr);
console.log(sum);

function sum8(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res;
}

// №9⊗jsPmFBMst
// Код должен найти сумму цифр числа:
console.log("task 9");
let num = 12345;
res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
  let arr = String(num).split("");
  let sum = 0;

  for (let elem of arr) {
    sum += +elem;
  }

  return sum;
}

// №10⊗jsPmFBMst
// Код должен проверить число на то, что оно является простым:
console.log("task 10");
console.log(isPrime(13)); // должен вывести true

function isPrime(num) {
  let isNumberSimple = false;

  for (let i = 2; i < num; i++) {
    if (num % i !== 0) isNumberSimple = true;
  }
  return isNumberSimple;
}
