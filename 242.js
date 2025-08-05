// №1⊗jsPmFNPFP
// Скопируйте код моей функции test.
// Вызовите эту функцию, передав ей параметром анонимную функцию,
// которая параметром будет принимать число и возвращать его куб.
function test(func) {
  console.log(func(3));
}
// test(function (num) {
//   return num ** 3;
// });
// №2⊗jsPmFNPFP
// Переделайте ваш код так, чтобы передаваемая функция была не анонимной,
// а была определена как Function Declaration с именем func.
// function func(num) {
//   return num ** 3;
// }
// test(func);
// №3⊗jsPmFNPFP
// Переделайте передаваемую функцию на Function Expression с тем же именем func.
let func = function (num) {
  return num ** 3;
};
test(func);
// №4⊗jsPmFNPFP
// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму.
//  При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3.
// Выведите алертом результат.
function test2(func) {
  console.log(func(2, 3));
}
test2(function (num1, num2) {
  return num1 + num2;
});
