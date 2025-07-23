// №1⊗jsPmSMMA
// Создайте массив с числами.
// Прибавьте к каждому элементу массива число 3.
// Выведите на экран измененный массив.

let arr = [1, 2, 3];
arr = arr.map((element) => {
  element += 3;
  return element;
});
console.log(arr);
