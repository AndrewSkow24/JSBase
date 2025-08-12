let days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

let currentYear = new Date().getFullYear(); // текущий год
let currentMonth = new Date().getMonth(); // текущий месяц
let currentDay = new Date().getDate(); // текущее число

// №1⊗jsPmSMMA
// Определите, какой день недели будет 31 декабря следующего года.
console.log("task 1");
console.log(days[new Date(currentYear + 1, 11, 31).getDay()]);
// №2⊗jsPmSMMA
// Определите, какой день недели будет через год в такую же дату, как сегодня.
console.log("task 2");
console.log(days[new Date(currentYear + 1, currentMonth, currentDay).getDay()]);
// №3⊗jsPmSMMA
// Определите, какой день недели был год назад в такую же дату, как сегодня.
console.log("task 3");
console.log(days[new Date(currentYear - 1, currentMonth, currentDay).getDay()]);
