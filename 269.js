// №1⊗jsPmFCMC
// Допишите следующий код так, чтобы его запуск алертом выводил '!':
console.log("task 1");
(function () {
  // какой-то код
  return function () {
    return function () {
      console.log("!");
    };
  };
})()()();

// №2⊗jsPmFCMC
// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
console.log("task 2");
(function (num1) {
  // какой-то код
  return function (num2) {
    console.log(num1 + num2);
  };
})(1)(2); // 3

// №3⊗jsPmFCMC
// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
console.log("task 3");
(function (num1) {
  // какой-то код
  return function (num2) {
    return function (num3) {
      console.log(num1 + num2 + num3);
    };
  };
})(1)(2)(3); // 6
