// перебор объекта циклом for-in в JS

// №1⊗jsPmSMMA
// Выведите в консоль все ключи следующего объекта:

let obj = { x: 1, y: 2, z: 3 };
console.log("Вывод ключей");
for (key in obj) {
  console.log(key);
}

// №2⊗jsPmSMMA
// Выведите в консоль все элементы следующего объекта:

obj = { x: 1, y: 2, z: 3 };
console.log("вывод элементов");
for (key in obj) {
  console.log(obj[key]);
}
