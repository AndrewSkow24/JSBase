// 274. пример с параметром через рекурсию

// №1⊗jsPmRcEP
// Дан массив:

let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии выведите элементы этого массива в консоль.

function recursiveLogArray(arr) {
  console.log(arr.shift());
  console.log("Изменённый массив:", arr);
  if (arr.length != 0) recursiveLogArray(arr);
}

recursiveLogArray(arr);
