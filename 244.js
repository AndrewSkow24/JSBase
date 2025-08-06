// Давайте сделаем функцию, которая параметром будет
// принимать массив, а вторым параметром - функцию.
// Переданная функция должна будет применится к каждому
// элементу массива:

function funcForAllArrayElements(arr, func) {
  let returnArr = [];
  for (let el of arr) {
    returnArr.push(func(el));
  }
  return returnArr;
}

let cubesOfAllElements = funcForAllArrayElements([1, 2, 3, 4], function (num) {
  return num ** 3;
});

console.log(cubesOfAllElements);
