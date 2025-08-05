// №1⊗jsPmFTAFO
// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1,
// вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
console.log("task 1");
let obj = {
  func1: function () {
    return 1;
  },
  func2: function () {
    return 2;
  },
  func3: function () {
    return 3;
  },
};
console.log(obj.func1() + obj.func2() + obj.func3());

// №2⊗jsPmFTAFO
// Переберите созданный объект циклом и выведите результаты работы функций в консоль.
console.log("task 2");
for (key in obj) {
  console.log(obj[key]());
}
