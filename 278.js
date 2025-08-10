// Дан многомерный массив произвольного уровня вложенности, например, такой:

let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
// Возведите все элементы-числа этого массива в квадрат.

function squareElementsArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      squareElementsArr(arr[i]);
    } else {
      arr[i] **= 2;
    }
  }

  return arr;
}

console.log(squareElementsArr(arr));
