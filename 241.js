// №1⊗jsPmFNNFP
// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
function test(func1, func2, func3) {
  return func1() + func2() + func3();
}
// №2⊗jsPmFNNFP
// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.
// Пусть первая функция возвращает 1, вторая - 2, а третья - 3.
// Передайте эти функции параметром в функцию test из предыдущей задачи.
// function func1() {
//   return 1;
// }
// function func2() {
//   return 2;
// }
// function func3() {
//   return 3;
// }
// console.log(test(func1, func2, func3));

// №3⊗jsPmFNNFP
// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
func1 = function () {
  return 1;
};
func2 = function () {
  return 2;
};
func3 = function () {
  return 3;
};
console.log(test(func1, func2, func3));
