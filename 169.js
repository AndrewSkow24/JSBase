// Дан следующий массив:

let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let sum = 0;
for (let arr0 of arr) {
  for (let arr1 of arr0) {
    for (let el of arr1) {
      sum += el;
    }
  }
}
console.log(sum);
