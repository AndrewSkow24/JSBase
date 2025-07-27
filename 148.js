// Выведите в консоль все элементы следующего массива:
let arr = ["a", "b", "c", "d", "e"];
console.log("task 1");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// №2⊗jsPmLpAFr
// Выведите в консоль все элементы следующего массива,
//  за исключением нулевого и последнего:

// let arr = ['a', 'b', 'c', 'd', 'e'];
console.log("task2");
for (let i = 1; i < arr.length - 1; i++) {
  console.log(arr[i]);
}

// №3⊗jsPmLpAFr
// Выведите в консоль элементы следующего массива
//  в обратном порядке:

// let arr = ['a', 'b', 'c', 'd', 'e'];

console.log("task 3");
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
// №4⊗jsPmLpAFr
// Исправьте ошибку, допущенную в следующем коде:
console.log("task 4");
// let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
