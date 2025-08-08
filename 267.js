// №1⊗jsPmFCRB
// Определите, не запуская код, что выведется в консоль:

let result = (function () {
  return "!";
})(); // !

console.log(result);
// №2⊗jsPmFCRB
// Определите, не запуская код, что выведется в консоль:

result = (function () {
  return "!";
})();

console.log(result); // !
// №3⊗jsPmFCRB
// Определите, не запуская код, что выведется в консоль:

result = function () {
  return "!";
};

console.log(result); // исходный код функции, так как не было вызова

// №4⊗jsPmFCRB
// Определите, не запуская код, что выведется в консоль:

result = function () {
  return "!";
};

console.log(result()); // !
