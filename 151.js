// №1⊗jsPmLpAEA
// Дан массив:
let arr = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.
console.log("task 1");
let sum = 0;
for (let elem of arr) {
  sum += elem;
}
console.log(sum);

// №2⊗jsPmLpAEA
// Дан массив:
// let arr = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов элементов, являющихся четными числами.
console.log("task 2");
sum = 0;
for (let elem of arr) {
  if (elem % 2 == 0) sum += elem;
}
console.log(sum);

// №3⊗jsPmLpAEA
// Дан массив:
// let arr = [2, 5, 9, 3, 1, 4];
// Найдите сумму квадратов элементов этого массива.
console.log("task 3");
sum = 0;
for (let elem of arr) {
  sum += elem ** 2;
}
console.log(sum);

// №4⊗jsPmLpAEA
// Дан массив:

// let arr = [2, 5, 9, 3, 1, 4];
// Найдите произведение элементов этого массива.
console.log("task 4");
let productArr = 1;
for (elem of arr) {
  productArr *= elem;
}
console.log(productArr);
