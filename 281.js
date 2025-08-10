// №1⊗jsPmSMMA
// Дан массив с числами. Оставьте в нем только положительные числа.
console.log("task 1");
let arr1 = [1, 2, -1, -2, 5, -3, 0];
let changedArr1 = arr1.filter((el) => el > 0);
console.log("Исходный массив:", arr1);
console.log("Фильтрованный массив:", changedArr1);

// №2⊗jsPmSMMA
// Дан массив с числами. Оставьте в нем только отрицательные числа.
let arr2 = [1, 2, -1, -2, 5, -3, 0];
let changedArr2 = arr1.filter((el) => el < 0);
console.log("Исходный массив:", arr2);
console.log("Фильтрованный массив:", changedArr2);

// №3⊗jsPmSMMA
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
let arr3 = [1, 2, 3, -2, 12, 0, -2, 5, 6, 7];
let changedArr3 = arr3.filter((el) => el > 0 && el < 10);
console.log("Исходный массив:", arr3);
console.log("Фильтрованный массив:", changedArr3);

// №4⊗jsPmSMMA
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
console.log("task 4");
let arr4 = ["123", "12345", "1234567", "something long string"];
let changedArr4 = arr4.filter((el) => el.length > 5);
console.log("Исходный массив:", arr4);
console.log("Фильтрованный массив:", changedArr4);

// №5⊗jsPmSMMA
// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let arr5 = [55, 62, 23, 21, 10, 1, 2, 3, 5];
let changedArr5 = arr5.filter((el, index) => el * index < 30);
console.log("Исходный массив:", arr5);
console.log("Фильтрованный массив:", changedArr5);

// №6⊗jsPmSMMA
// Дан массив, в нем могут быть обычные элементы и подмассивы,
// например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
console.log("task 6");
let arr6 = [1, 2, [3, 4], 5, [6, 7]];
let changedArr6 = arr6.filter((el) => typeof el != "object");
console.log("Исходный массив:", arr6);
console.log("Фильтрованный массив:", changedArr6);
