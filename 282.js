// метод every для проверки массива в JavaScript

// №1⊗jsPmSMMA
// Дан массив с числами.
// Проверьте то, что все элементы в массиве больше нуля.
console.log("task 1");
let onlyPositiveNumbers = [1, 2, 3, 4];
let positiveAndNegativeNumbers = [-1, 2, 3, 4];
let result1 = onlyPositiveNumbers.every((el) => el > 0);
console.log(result1);
let result2 = positiveAndNegativeNumbers.every((el) => el > 0);
console.log(result2);

// №2⊗jsPmSMMA
// Дан массив с числами. Проверьте то, что для всех
// элементов произведение их значений на их порядковый
//  номер меньше 30.
console.log("task 2");
let arr21 = [1, 2, 3, 4];
let arr22 = [30, 31, 32, 33];
console.log(arr21.every((el, index) => el * index < 30));
console.log(arr22.every((el, index) => el * index < 30));
