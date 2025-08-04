// №1⊗jsPmFBFl
// Сделайте функцию, которая параметром будет
// принимать массив с числами, и проверять, что все
// элементы в этом массиве являются четными числами.
console.log("task 1");
function isAllNumbersEven(arr) {
  for (let element of arr) {
    if (element % 2 !== 0) return false;
  }
  return true;
}
console.log(isAllNumbersEven([2, 4, 6]));
console.log(isAllNumbersEven([1, 3, 2, 4]));

// №2⊗jsPmFBFl
// Сделайте функцию, которая параметром будет
// принимать число и проверять, что все цифры это
// числа являются нечетными.
console.log("task 2");
function allDigitsOdd(num) {
  num = String(num);
  for (let digit of num) {
    if (+digit % 2 == 0) return false;
  }
  return true;
}
console.log(allDigitsOdd(123)); // false
console.log(allDigitsOdd(2468)); // false
console.log(allDigitsOdd(135)); // true
// №3⊗jsPmFBFl
// Сделайте функцию, которая параметром будет
// принимать массив и проверять, есть ли в этом
// массиве два одинаковых элемента подряд.
console.log("task 3");
function hasTwoIdenticalElementsInArr(arr) {
  let nextElement;
  // i is current element
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true; // одинаковые элементы найдены
    }
  }
  return false; // одинаковых элементов не найдено
}
console.log(hasTwoIdenticalElementsInArr([1, 2, 3, 5]));
console.log(hasTwoIdenticalElementsInArr([2, 2, 3, 4]));
