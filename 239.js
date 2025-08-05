// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами.
//  Сделайте так, чтобы первая функция возвращала сумму элементов массива,
// вторая функция - сумму квадратов, а третья - сумму кубов.

let obj = {
  sumOfElementsArr: function (arr) {
    let sum = 0;
    for (el of arr) {
      sum += el;
    }
    return sum;
  },
  sumOfSquaresElementsArr: function (arr) {
    let sum = 0;
    for (el of arr) {
      sum += el ** 2;
    }
    return sum;
  },
  sumOfCubesElementsArr: function (arr) {
    let sum = 0;
    for (el of arr) {
      sum += el ** 3;
    }
    return sum;
  },
};

console.log(obj.sumOfElementsArr([1, 2, 3]));
console.log(obj.sumOfSquaresElementsArr([1, 2, 3]));
console.log(obj.sumOfCubesElementsArr([1, 2, 3]));
