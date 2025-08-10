// оператор spread и слияние массивов

// №1⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
console.log("task 1");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr = ["a", ...arr1, "b", "c", ...arr2];
console.log(arr); // ["a", 1,2,3, "b", "c",4,5,6]

// №2⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
console.log("task 2");
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

arr = ["a", ...arr1, ...arr1, "b", "c"];

// if (["a", 1, 2, 3, 1, 2, 3, "b", "c"] == arr1) {
//   console.log("Решение верное");
// } else {
//   console.log("Решение ошибочное");
// }

console.log(arr); // ["a", 1, 2, 3, 1, 2, 3, "b", "c"]

// №3⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
console.log("task 3");
arr1 = [1, 2, 3];
arr2 = [...arr1, 4, 5, 6];

arr = ["a", "b", "c", ...arr2]; // ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]
console.log(arr);
// №4⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
console.log("task 4");
arr1 = [1, 2, 3];
arr2 = [...arr1, 4, 5, 6]; // [1,2,3,4,5,6]
let arr3 = [...arr2, 7, 8, 9];

arr = [0, ...arr3]; // [0,1,2,3,4,5,6,7,8,9]
console.log(arr);
// №5⊗jsPmSMMA
// Не запуская код, определите, что выведется в консоль:
console.log("task 5");
arr1 = [1, 2, 3];
arr2 = [...arr1];

console.log(arr2); // 1,2,3
