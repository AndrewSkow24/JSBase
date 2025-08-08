// №1⊗jsPmRcAS
// Дан массив:

let arr = [1, 2, 3, 4, 5];

// С помощью рекурсии найдите сумму квадратов
// элементов этого массива.

function recursiveSumSquare(arr) {
  let sum = arr.shift() ** 2;
  console.log(sum);
  if (arr.length !== 0) {
    sum += recursiveSumSquare(arr);
  }
  return sum;
}

console.log(recursiveSumSquare(arr));
