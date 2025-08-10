// функция сливающие произвольное количество массивов в двумерный массив

function unit(...arrays) {
  return arrays;
}

let result = unit([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result);
