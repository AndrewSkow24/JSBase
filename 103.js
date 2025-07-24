// №1⊗jsPmSMMA
// Код должен вывести элемент объекта:
let obj = { x: 1, y: 2, z: 3 };
console.log(obj["x"]);

// №2⊗jsPmSMMA
// Код должен вывести элемент объекта по ключу из переменной:
obj = { x: 1, y: 2, z: 3 };
let key = "x";
console.log(obj[key]);

// №3⊗jsPmSMMA
// Код должен вывести сумму элементов объекта:
obj = { x: 1, y: 2, z: 3 };
let sum = obj["x"] + obj["y"] + obj["z"];
console.log(sum);

// №4⊗jsPmSMMA
// Код должен вывести количество элементов объекта:
obj = { x: 1, y: 2, z: 3 };
console.log(Object.keys(obj).length);
