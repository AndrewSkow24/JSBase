// точка с запятой для безопасности IIFE

// №1⊗jsPmFCPS
// Определите, не запуская код, что выведется в консоль:
console.log("task 1");
let str = "str";

(function () {
  console.log(1);
})(); // 1

// №2⊗jsPmFCPS
// Определите, не запуская код, что выведется в консоль:

let str = "str"(function () {
  console.log(1);
})(); // ошибка TypeError: "str" is not a function
