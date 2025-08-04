// №1⊗jsPmFBPr
// Сделайте функцию, которая параметром принимает
// число и выводит в консоль куб этого числа.
console.log("task 1");
function cubeOfNum(num) {
  console.log(num ** 3);
}
cubeOfNum(2);
cubeOfNum(3);
cubeOfNum(4);

// №2⊗jsPmFBPr
// Сделайте функцию, которая параметром принимает
// число и проверяет, положительное это число или
// отрицательное. В первом случае пусть функция
// выводит в консоль текст '+++', а во втором '---'.
console.log("task 2");
function positiveOrNegativeNum(num) {
  num >= 0 ? console.log("+++") : console.log("---");
}
positiveOrNegativeNum(223);
positiveOrNegativeNum(0);
positiveOrNegativeNum(-0.23421);
