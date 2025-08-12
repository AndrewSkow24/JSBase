// №1⊗jsPmSMMA
// Вопрос: не будет ли проблемы,
// если текущий месяц январь?
// Ведь он имеет номер 0,
// и при вычитании из него единицы мы получим минус
// первый месяц.

let months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];
// console.table(months);

let days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];
// console.table(days);

console.log("task 1");

console.log(months[new Date(2025, -1, 1).getMonth()]);

console.log("В JS проблем не будет");

// №2⊗jsPmSMMA
// Определите, какой день недели был месяц назад в
//  такой же день месяца, как сегодня.

let currentYear = new Date().getFullYear(); // текущий год
let currentMonth = new Date().getMonth(); // текущий месяц
let currentDay = new Date().getDate(); // текущее число

let dayMonthBefore = new Date(
  currentYear,
  currentMonth - 1,
  currentDay
).getDay();

console.log(days[dayMonthBefore]);
