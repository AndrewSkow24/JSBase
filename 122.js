console.log("Задача 1");
// Не запуская код, определите, что выведется в консоль:

let test = 3;

if (test) {
  console.log("true");
} else {
  console.log("---");
}

console.log("Задача 2");
// Не запуская код, определите, что выведется в консоль:

test = "abc";

if (test) {
  console.log("не пустая строка это true");
} else {
  console.log("---");
}
console.log("Задача 3");
// Не запуская код, определите, что выведется в консоль:

test = "";

if (test) {
  console.log("+++");
} else {
  console.log("а вот пустая строка это false");
}
console.log("Задача 4");
// Не запуская код, определите, что выведется в консоль:

test = 3 * "abc";

if (test) {
  console.log("+++");
} else {
  console.log("NaN - это false");
}
console.log("Задача 5");
// Не запуская код, определите, что выведется в консоль:

test = null;

if (test) {
  console.log("+++");
} else {
  console.log("null будет преобразован к false");
}
console.log("Задача 6");
// Не запуская код, определите, что выведется в консоль:

test = false;

if (test) {
  console.log("+++");
} else {
  console.log("false");
}
console.log("Задача 7");
// Не запуская код, определите, что выведется в консоль:

let test0;

if (test0) {
  console.log("+++");
} else {
  console.log("undefined преобразуется к false");
}
console.log("Задача 8");
// Не запуская код, определите, что выведется в консоль:

test = 0;

if (test) {
  console.log("+++");
} else {
  console.log("0 - это тоже false");
}
console.log("Задача 9");
// Не запуская код, определите, что выведется в консоль:

test = "0";

if (test) {
  console.log("Если ноль записан как строка то это уже не false");
} else {
  console.log("---");
}
console.log("Задача 10");
// Не запуская код, определите, что выведется в консоль:

test = -1;

if (test) {
  console.log("Отрицательные числа преобразуются к true");
} else {
  console.log("---");
}
