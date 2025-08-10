// метод some для проверки массива в JavaScript

// №1⊗jsPmSMMA
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
console.log("task 1");
let onlyPositiveNumbers = [1, 2, 3, 4];
let positiveAndNegativeNumbers = [-1, 2, 3, 4];
let result1 = onlyPositiveNumbers.some((el) => el > 0);
console.log(result1);
let result2 = positiveAndNegativeNumbers.some((el) => el > 0);
console.log(result2);
// №2⊗jsPmSMMA
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
console.log("task 2");
let arr21 = [1, 2, 3, 4];
let arr22 = [30, 31, 32, 33];
console.log(arr21.some((el, index) => el * index < 30));
console.log(arr22.some((el, index) => el * index < 30));
