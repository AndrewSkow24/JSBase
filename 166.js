// В следующих задачах некоторый программист написал
// код и, возможно, допустил в нем ошибки.
// Вы должны проверить, делает ли код то, что описано.
// Если код работает некорректно, вы должны исправить
// ошибки.

// №1⊗jsPmLpMst
// Код должен вывести числа от 0 до 10:
console.log("task 1");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// №2⊗jsPmLpMst
// Код должен вывести числа от 10 до 0:
console.log("task 2");
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// №3⊗jsPmLpMst
// Код должен вывести числа от 10 до 0:
console.log("task 3");
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// №4⊗jsPmLpMst
// Код должен вывести числа от 0 до 10:
console.log("task 4");
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// №5⊗jsPmLpMst
// Код должен найти сумму целых чисел от 1 до 10:
console.log("task 5");
let res = 0;
for (let i = 1; i < 10; i++) {
  res += i;
}
console.log(res);

// №6⊗jsPmLpMst
// Код должен найти произведение целых чисел от 1 до 10:
console.log("task 6");
res = 1;
for (let i = 1; i < 10; i++) {
  res *= i;
}
console.log(res);

// №7⊗jsPmLpMst
// Код должен найти сумму элементов массива:
console.log("task 7");
let arr = ["1", "2", "3", "4", "5"];
let sum = 0;
for (let elem of arr) {
  sum += +elem;
}
console.log(sum); // должно вывести 15

// №8⊗jsPmLpMst
// Код должен найти сумму элементов массива:
console.log("task 8");
arr = ["1", "2", "3", "4", "5"];
sum = 0;
for (let elem of arr) {
  sum += +elem;
}
console.log(sum); // должно вывести 15

// №9⊗jsPmLpMst
// Код должен найти сумму элементов массива:
console.log("task 9");
arr = ["1", "2", "3", "4", "5"];
sum = 0;
for (let elem of arr) {
  sum += +elem;
}
console.log(sum); // должно вывести 15

// №10⊗jsPmLpMst
// Код должен найти сумму элементов массива, однако, всегда выводит NaN:
console.log("task 10");
arr = ["1", "2", "3", "4", "5"];
sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum); // почему-то выводит NaN

// №11⊗jsPmLpMst
// Код должен найти сумму элементов массива:
console.log("task 11");
arr = ["1", "2", "3", "4", "5"];
sum = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  sum += +arr[i];
}
console.log(sum); // почему-то выводит не 15

// №12⊗jsPmLpMst
// Код должен найти сумму элементов массива:
console.log("task 12");
arr = ["1", "2", "3", "4", "5"];
sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum); // почему-то выводит не 15

// №13⊗jsPmLpMst
// Код должен возвести в квадрат каждый элемент массива:
console.log("task 13");
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  arr[i] **= 2;
}
console.log(arr);

// №14⊗jsPmLpMst
// Код должен заполнить массив числами от 1 до 5:
console.log("task 14");
arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr);

// №15⊗jsPmLpMst
// Код должен найти сумму элементов объекта:
console.log("task 15");
let obj = { a: 1, b: 2, c: 3 };
sum = 0;
for (let elem in obj) {
  sum += obj[elem];
}
console.log(sum);

// №16⊗jsPmLpMst
// Код должен найти сумму элементов объекта:
console.log("task 16");
obj = { a: 1, b: 2, c: 3 };
sum = 0;
for (let key in obj) {
  sum += +obj[key];
}

console.log(sum);
// №17⊗jsPmLpMst
// Код должен проверить, есть ли в массиве число 3 или нет:
console.log("task 17");
arr = [1, 2, 3, 4, 5];
res = "";

for (let elem of arr) {
  if (elem === 3) {
    res = "+++";
    break;
  } else {
    res = "---";
  }
}

console.log(res);
// №18⊗jsPmLpMst
// Код должен заполнить массив числами от 1 до 5:
console.log("task 18");
arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr);

// №19⊗jsPmLpMst
// Код должен проверить, есть ли в массиве число 3 или нет:
console.log("task 19");
arr = [1, 2, 3, 4, 5];
res = false;

for (let elem of arr) {
  if (elem === 3) {
    res = true;
    break;
  }
}
console.log(res);

// №20⊗jsPmLpMst
// Код должен вывести только четные элементы из массива:
console.log("task 20");
arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  if (elem % 2 == 0) {
    console.log(elem);
  }
}
// №21⊗jsPmLpMst
// Код должен записать в новый массив только нечетные элементы старого массива:
console.log("task 21");
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
res = [];
for (let elem of arr) {
  if (elem % 2 != 0) {
    res.push(elem);
  }
}

console.log(res);
