// №1⊗jsPmRcMS
// Дан многомерный объект произвольного уровня вложенности, например, такой:

// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.

console.log("task 1");
obj = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};

function printRecursivePrimitiveElements(obj) {
  for (let element in obj) {
    if (typeof obj[element] == "object") {
      printRecursivePrimitiveElements(obj[element]);
    } else {
      console.log(obj[element]);
    }
  }
}

printRecursivePrimitiveElements(obj);

// №2⊗jsPmRcMS
// Дан многомерный массив произвольного уровня вложенности, например, такой:
console.log("task 2");
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:

function recursivePrintArr(arr, newArr = []) {
  for (let element of arr) {
    if (typeof element == "object") {
      recursivePrintArr(element, newArr);
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}
console.log(recursivePrintArr(arr));
// [1, 2, 7, 8, 3, 4, 5, 6, 7]
