// Дан двухмерный массив с числами:
console.log("task 1");
let arr = [[1, 2, 3], [4, 5], [6]];
// С помощью вложенных циклов найдите сумму элементов
//  этого массива.
let sum = 0;
for (let subArr of arr) {
  for (let elem of subArr) {
    sum += elem;
  }
}
console.log(sum);
sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}
console.log(sum);

// №2⊗jsPmMuAI
// Дан трехмерный массив с числами:
console.log("task 2");
arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
// С помощью вложенных циклов найдите сумму
// элементов этого массива.
sum = 0;
for (let subArr0 of arr) {
  for (let subArr1 of subArr0) {
    for (let elem of subArr1) {
      sum += elem;
    }
  }
}
console.log(sum);
sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      sum += arr[i][j][k];
    }
  }
}
console.log(sum);
