// №1⊗jsPmLpPrm
// Выведите с помощью цикла столбец чисел от 1 до 100.
console.log("task 1");
for (let i = 1; i < 100; i++) console.log(i);
// №2⊗jsPmLpPrm
// Выведите с помощью цикла столбец чисел от 100 до 1.
console.log("task 2");
for (let i = 100; i > 1; i--) console.log(i);
// №3⊗jsPmLpPrm
// Выведите с помощью цикла столбец четных чисел от 1 до 100.
console.log("task 3");
for (let i = 1; i < 100; i++) if (i % 2 == 0) console.log(i);
// №4⊗jsPmLpPrm
// Заполните массив 10-ю иксами с помощью цикла.
console.log("task 4");
let xArr = [];
for (let i = 0; i < 10; i++) {
  xArr.push("x");
}
console.log(xArr);
// №5⊗jsPmLpPrm
// Заполните массив числами от 1 до 10 с помощью цикла.
console.log("task 5");
let oneToTenArr = [];
for (let i = 1; i < 10; i++) {
  oneToTenArr.push(i);
}
console.log(oneToTenArr);
// №6⊗jsPmLpPrm
// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
console.log("task 6");
let myArr = [1, 2123, 12, 15, 21, 0, 1, 3, 87, 1, 20, 9];
for (let el of myArr) if (el > 0 && el < 10) console.log(el);
// №7⊗jsPmLpPrm
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
console.log("task 7");
let exist5 = false;
myArr = [1, 2, 3, 4, 6];
for (let el of myArr) {
  if (el === 5) {
    exist5 = true;
    break;
  }
}
exist5 ? console.log("Элемент 5 найден") : console.log("Элемент 5 отсутствует");
// №8⊗jsPmLpPrm
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
console.log("task 8");
let sum = 0;
for (let el of myArr) {
  sum += el;
}
console.log(sum);
// №9⊗jsPmLpPrm
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
console.log("task 9");
sumOfSquares = 0;
for (let el of myArr) {
  sumOfSquares += el ** 2;
}
console.log(sumOfSquares);

// №10⊗jsPmLpPrm
// Дан массив с числами. Найдите среднее арифметическое его элементов.
console.log("task 10");
for (let el of myArr) {
  sum += el;
}
console.log(sum);
console.log("Среднее арифметическое:", sum / myArr.length);

// №11⊗jsPmLpPrm
// Напишите скрипт, который будет находить факториал числа.
// Факториал - это произведение всех целых чисел от единицы до заданного числа.
console.log("task 11");
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
}
factorial(1);
factorial(2);
factorial(3);
factorial(4);

// №12⊗jsPmLpPrm
// Заполните массив числами от 10 до 1 с помощью цикла.
console.log("task 12");
let tenToOne = [];
for (let i = 10; i >= 1; i--) tenToOne.push(i);
console.log(tenToOne);
// №13⊗jsPmLpPrm
// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
console.log("task 13");
let arr13 = [-1, -21, 12, 23, 1, -1, 567, 0];
let sumPositive = 0;
for (let el of arr13) {
  if (el >= 0) sumPositive += el;
}
console.log(sumPositive);
// №14⊗jsPmLpPrm
// Дан массив числами, например:
console.log("task 14");
let arr = [10, 20, 30, 50, 235, 3000];
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
for (let el of arr) {
  if (String(el)[0] == "1" || String(el)[0] == "2" || String(el)[0] == "5") {
    console.log(el);
  }
}
// №15⊗jsPmLpPrm
// Дан массив с числами. Выведите элементы этого массива в обратном порядке.
console.log("task 15");
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// №16⊗jsPmLpPrm
// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает
//  с их порядковым номером в массиве.
console.log("task 16");
let arr16 = [0, 1, 234, 3, 234234, 5];
for (let i = 0; i < arr16.length; i++) if (arr16[i] == i) console.log(i);

// №17⊗jsPmLpPrm
// Дан массив с числами.
// С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки.
// Используйте для этого тег br.

document.write("<h2>Task 17</h2>");
for (let el of arr) document.write(el + "<br>");

// №18⊗jsPmLpPrm
// Дан массив с числами. С помощью цикла for и функции
// document.write выведите каждый элемент массива
//  в отдельном абзаце.

document.write("<h2>Task 18</h2>");
for (let el of arr) document.write(`<p>${el}</p>`);

// №19⊗jsPmLpPrm
// Составьте массив дней недели.
//  С помощью цикла for выведите все дни недели,
// а выходные дни выведите жирным.
document.write("<h2>Task 19</h2>");
let weekDays = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
for (let el of weekDays) {
  if (el == "суббота" || el == "воскресенье") {
    document.write(`<li><b>${el}</b></li>`);
  } else document.write(`<li>${el}</li>`);
}

// №20⊗jsPmLpPrm
// Составьте массив дней недели.
// С помощью цикла for выведите все дни недели,
// а текущий день выведите курсивом.
// Номер текущего дня должен храниться в переменной day.

document.write("<h2>Task 20</h2>");

let day = 2;

for (let i = 0; i < weekDays.length; i++) {
  if (day - 1 == i) {
    document.write(`<li><i>${weekDays[i]}</i></li>`);
  } else {
    document.write(`<li>${weekDays[i]}</li>`);
  }
}

// №21⊗jsPmLpPrm
// Дан следующий объект с работниками и их зарплатами:

let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};
// Увеличьте зарплату каждого работника на 10%.

document.write("<h2>Task 21</h2>");

for (let key in obj) {
  obj[key] *= 1.1;
  obj[key] = obj[key].toFixed(0);
}

for (let key in obj) {
  document.write(`${key} - ${obj[key]} <br>`);
}

// №22⊗jsPmLpPrm
// Модифицируйте предыдущую задачу так,
// чтобы зарплата увеличивалась только тем работникам,
// у которых она меньше или равна 400.

document.write("<h2>task 22</h2>");

obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let key in obj) {
  if (obj[key] <= 400) {
    obj[key] *= 1.1;
    obj[key] = obj[key].toFixed(0);
  }
}

for (let key in obj) {
  document.write(`${key} - ${obj[key]} <br>`);
}

// №23⊗jsPmLpPrm
// Даны следующие массивы:
document.write("<h2>Task 23</h2>");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
// С помощью этих массивов создайте новый объект,
// сделав его ключами элементы первого массива,
//  а значениями - элементы второго.

let newObj = {};

for (let i = 0; i < arr1.length; i++) {
  newObj[arr1[i]] = arr2[i];
}

console.log(newObj);
for (let key in newObj) {
  document.write(`<li>${key} - ${newObj[key]}</li>`);
}

// №24⊗jsPmLpPrm
// Дан следующий объект:
console.log("task 24");
obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
// Найдите сумму ключей этого объекта и поделите
// ее на сумму значений.

let sumKey = 0;
let sumValue = 0;

for (let key in obj) {
  sumKey += +key;
  sumValue += obj[key];
}

console.log("sum of Keys", sumKey);
console.log("sum of Values", sumValue);
console.log(sumKey / sumValue);

// №25⊗jsPmLpPrm
// Дан следующий объект:
console.log("task 25");
obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// Запишите ключи этого объекта в один массив,
// а значения - в другой.
let arrKeys = [];
let arrValues = [];

for (let key in obj) {
  arrKeys.push(key);
  arrValues.push(obj[key]);
}

console.log(arrKeys);
console.log(arrValues);

// №26⊗jsPmLpPrm
// Дан следующий объект:
console.log("Task 26");
obj = {
  1: 125,
  2: 225,
  3: 128,
  4: 356,
  5: 145,
  6: 281,
  7: 452,
};
// Запишите в новый массив элементы,
// значение которых начинается с цифры 1 или цифры 2.
// То есть у вас в результате получится вот такой массив:

let arr26 = [];

for (let key in obj) {
  if (String(obj[key])[0] == "1" || String(obj[key])[0] == "2") {
    arr26.push(obj[key]);
  }
}
console.log(arr26);
// [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];

// №27⊗jsPmLpPrm
// Дан следующий массив:
console.log("task 27");
arr = ["a", "b", "c", "d", "e"];
// Создайте из этого массива следующий объект:

let obj27 = {};

for (let i = 1, j = 0; i <= 5; i++, j++) {
  obj27[i] = arr[j];
}

console.log(obj27);
// {1: 'a', 2: 'b', 3: 'c', 4: 'd',
// 	5: 'e'};

// №28⊗jsPmLpPrm
// Дан следующий массив:
console.log("task 28");
arr = ["a", "b", "c", "d", "e"];
let obj28 = {};
// Создайте из этого массива следующий объект:

for (let i = 0, j = 1; i < arr.length; i++, j++) {
  obj28[arr[i]] = j;
}

console.log(obj28);

// {'a': 1, 'b': 2, 'c': 3, 'd': 4,
// 	'e': 5};
