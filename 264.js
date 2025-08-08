// Вызов функции на месте в JavaScript
// Immediately Invoked Function Expression(IIFE)

+(function () {
  console.log("function Expression");
})();

// Работает только с Function Expression, не с Function Declaration

// №1⊗jsPmFCInr
// Определите, не запуская код, что выведется в консоль:
// console.log("task 1");
// !(function () {
//   console.log("!");
// })(); // !
// №2⊗jsPmFCInr
// Определите, не запуская код, что выведется в консоль:
// console.log("task 2");
// function() {
// 	console.log('!');
// }(); // не с работает с Function Declaration
// // Function statements require a function name
// //at wrapSafe
