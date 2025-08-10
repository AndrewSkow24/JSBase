// сумма примитивных элементов массива

function func(arr) {
  let sum = 0;
  for (let elem of arr) {
    if (typeof elem == "object") {
      sum += func(elem);
    } else {
      sum += elem;
    }
  }
  return sum;
}

console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));

console.log(1 + 2 + 7 + 8 + 3 + 4 + 5 + 6 + 7);

// проверка

// №1⊗jsPmSMMA
// Дан многомерный объект произвольного уровня вложенности, например, такой:
console.log("task 1");
let obj = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};
// С помощью рекурсии найдите сумму элементов этого объекта.
function sumElementsObject(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      sum += sumElementsObject(obj[key]);
    } else {
      sum += obj[key];
      console.log(obj[key]);
      console.log("Сумма:", sum);
    }
  }
  return sum;
}

console.log(sumElementsObject(obj));
console.log("Проверка");
let sum1 = 0;
for (let i = 0; i <= 9; i++) {
  sum1 += i;
}
console.log(sum1);

// №2⊗jsPmSMMA
// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
console.log("task 2");
let strArr = ["a", ["b", "c", "d"], ["e", "f", ["g", ["j", "k"]]]];
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'

function oneStringRecursion(strArr, str = "") {
  for (let element of strArr) {
    if (typeof element == "string") {
      str += element;
    } else {
      str += oneStringRecursion(element);
    }
  }
  return str;
}

console.log(oneStringRecursion(strArr));
