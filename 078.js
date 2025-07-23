// №1⊗jsPmSMMA
// Дан массив:
let arr = ["a", "b", "c", "d", "e"];
// Удалите из него два элемента. Проверьте,
// какое станет значение свойства length после этого.

console.log("Начальный массив:", arr);
console.log("Длина:", arr.length);

delete arr[1];
delete arr[4];
//элементы удалятся, но массив станет разреженным

console.log("Изменённый массив:", arr); // Изменённый массив: [ 'a', <1 empty item>, 'c', 'd', <1 empty item> ]
console.log("Длина:", arr.length);
