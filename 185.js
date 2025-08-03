// функции округления

// 1. Math.round(число) - до ближайшего целого числа по правилам математического округления
// 2. Math.ceil(число) - до целого в большую сторону
// 3. Math.floor(число) - всегда в меньшую сторону
// 4. число.toFixed(количество знаков в дробной части) - если без аргументов - то 0 - округление до целого
// 5. toPrecision - округление числа до определённого количества символов - в параметрах указывается сколько символов должно остаться

console.log("1. Math.round()");
console.log(Math.round(6.4)); // 6
console.log(Math.round(6.5)); // 7
console.log(Math.round(6.499999999)); // 6

console.log("\n2. Math.ceil()");
console.log(Math.ceil(6.0000001)); // 7

console.log("\n3. Math.floor()");
console.log(Math.floor(6.999999)); // 6

console.log("\n4. число.toFixed()");
console.log((1.2345).toFixed(1)); // 1.2
console.log((1.2345).toFixed()); // 1

console.log("\n5. число.toPrecision(длина)");
// последнее число будет округлено по правилам математического округления
console.log((6.7890123412243124).toPrecision(2)); // 6.8
console.log((6.7890123412243124).toPrecision(3)); // 6.79

// №1⊗jsPmSMMRd
// Найдите квадратный корень из 379.
// Результат округлите до целых, до десятых, до сотых.
console.log("task 1");
let num1 = Math.sqrt(379);
console.log("До целого:", Math.round(num1));
console.log("До десятых:", num1.toFixed(1));
console.log("До сотых:", num1.toFixed(2));

// №2⊗jsPmSMMRd
// Найдите квадратный корень из 587.
//  Округлите результат в большую и меньшую стороны,
//  запишите результаты округления в объект с ключами
// 'floor' и 'ceil'.

// floor - в меньшую сторону
// ceil -  в большую сторону

let obj = {};
let num2 = Math.sqrt(587);
obj.floor = Math.floor(num2);
obj.ceil = Math.ceil(num2);
console.table(obj);
