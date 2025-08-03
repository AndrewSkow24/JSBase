// степень и корень в JS
// Math.pow(число, степень)
// Math.sqrt(положительное число)

console.log("task 1");
console.log(Math.pow(2, 10)); // 1024

console.log("\ntask 2");
console.log(Math.sqrt(245));

console.log("task 3");
// Дан следующий массив:

const arr = [4, 2, 5, 19, 13, 0, 10];
// Найдите квадратный корень из суммы кубов
// его элементов. Для решения воспользуйтесь циклом for.

let sumOfCubes = 0;
for (let element of arr) {
  sumOfCubes += Math.pow(element, 3);
}
console.log("Сумма кубов:", sumOfCubes);
console.log("Квадратный корень суммы кубов:", Math.sqrt(sumOfCubes));
