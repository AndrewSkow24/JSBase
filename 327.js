// №1⊗jsPmSMMA
// Определите, сколько дней между 1 января и 10 сентября текущего года.
console.log("Task 1");
let difference1 =
  new Date(new Date().getFullYear(), 8, 10) -
  new Date(new Date().getFullYear(), 0, 1);
console.log(difference1); // в миллисекундах
console.log("Разница в днях:", difference1 / 1000 / 60 / 60 / 24, "дня");
// №2⊗jsPmSMMA
// Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.
console.log("task 2");
let difference2 =
  new Date(new Date().getFullYear(), new Date().getMonth() + 1, 10) -
  new Date(new Date().getFullYear(), new Date().getMonth(), 20);
console.log("Разница в днях:", difference2 / 1000 / 60 / 60 / 24, "дня");
