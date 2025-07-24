// №1⊗jsPmSMMA
// Вспомните и напишите, какие значения при
// приведении к логическому типу дают false.
console.log(Boolean(null) === false);
console.log(Boolean(undefined) === false);
console.log(Boolean("") === false);
console.log(Boolean(0) === false);
console.log(Boolean(NaN) === false);

// №2⊗jsPmSMMA
// Не запуская код, определите, что выведется в
// консоль:
let test = 1;
if (test == true) {
  console.log("1 преобразуется к true");
} else {
  console.log("---");
}

// №3⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
test = 0;
if (test == true) {
  console.log("+++");
} else {
  console.log("0 преобразуется к false");
}

// №4⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
test = 1;
if (test == false) {
  console.log("+++");
} else {
  console.log("1 не равно false");
}

// №5⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
test = 1;
if (test != true) {
  console.log("+++");
} else {
  console.log("да нет, 1 равно true");
}

// №6⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
test = "";
if (test == false) {
  console.log("пустая строка действительно преобразуется к false");
} else {
  console.log("---");
}

console.log("Задача 7");
// №7⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
let test0;
if (test0 == true) {
  console.log("+++");
} else {
  console.log("undefined будет преобразован к false");
}

// №8⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
test = 3 * "a";
if (test == true) {
  console.log("+++");
} else {
  console.log("NaN будет преобразован к false");
}
