function eachArrElement(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}

//   №1⊗jsPmFNCN
// С помощью следующей функции возведите все элементы массива в куб:

function cube(num) {
  return num ** 3;
}

let cubeArr = eachArrElement([1, 2, 3, 4, 5], cube);
console.log(cubeArr);
