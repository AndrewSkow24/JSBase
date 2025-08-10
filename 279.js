// /*
// Синтаксис

// let новыйМассив = массив.map(function(элемент, индекс, массив)){
//     // код
//     return изменённыйЭлемент;
// }
// */

// №1⊗jsPmSMMA
// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень
// и запишите результат в новый массив.
console.log("task 1");
let arr1 = [4, 9, 16, 25, 36, 49, 64, 81, 100];
let changedArr1 = arr1.map(function (el) {
  return Math.sqrt(el);
});
console.log("Исходный массив:", arr1);
console.log("Изменённый массив:", changedArr1);

// №2⊗jsPmSMMA
// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
console.log("task 2");
let arr2 = ["str1", "str2", "str3"];
let changedArr2 = arr2.map((el) => (el += "!"));
console.log("Исходный массив:", arr2);
console.log("Изменённый массив:", changedArr2);

// №3⊗jsPmSMMA
// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
console.log("task 3");
let arr3 = ["abc", "def", "ghi"];
let changedArr3 = arr3.map((el) => {
  let arrEl = el.split("");
  console.log(arrEl);
  let reverseString = "";
  for (let i = arrEl.length - 1; i >= 0; i--) {
    reverseString += arrEl[i];
  }
  return reverseString;
});
console.log("Исходный массив:", arr3);
console.log("Изменённый массив:", changedArr3);

// №4⊗jsPmSMMA
// Дан следующий массив:
console.log("task 4");
let arr4 = ["123", "456", "789"];
// Используя метод map преобразуйте этот массив в следующий:
let changedArr4 = arr4.map((el) => el.split("").map((el) => +el));
console.log("Исходный массив:", arr4);
console.log("Изменённый массив:", changedArr4);

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

// №5⊗jsPmSMMA
// Дан массив с числами.
// Используя метод map запишите в каждый элемент массива значение этого элемента,
// умноженное на его порядковый номер в массиве.
console.log("task 5");
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let changedArr5 = arr5.map((el, index) => el * index);
console.log("Исходный массив:", arr5);
console.log("Изменённый массив:", changedArr5);
