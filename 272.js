// №1⊗jsPmFCCl
// Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.

let counter = (function () {
  num = 0;
  return function () {
    num++;
    console.log(num);
  };
})();

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5

// №2⊗jsPmFCCl
// Модифицируйте работу счетчика так,
// чтобы он считал до 5, а потом отсчет начинался
// сначала.
console.log("task 2");
let counterToFive = (function () {
  let num = 0;
  return function () {
    if (num >= 5) {
      num = 0;
      console.log("счётчик сброшен");
    }

    num++;
    console.log(num);
  };
})();

for (let i = 0; i < 16; i++) {
  counterToFive();
}
