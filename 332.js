let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();
let currentHour = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();

let days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

// №1⊗jsPmSMMA
// Определите, сколько секунд прошло с начала дня до настоящего момента времени.
console.log("task 1");
console.log(
  (currentDate - new Date(currentYear, currentMonth, currentDay, 0, 0, 0)) /
    1000
);
// №2⊗jsPmSMMA
// Определите, сколько секунд осталось до конца дня.
console.log("task 2");
console.log(
  (new Date(currentYear, currentMonth, currentDay, 23, 59, 59) - currentDate) /
    1000
);
// №3⊗jsPmSMMA
// Определите, сколько дней осталось до нового года.
console.log("task 3");
console.log((new Date(currentYear + 1, 0, 1) - currentDate) / 1000 / 3600 / 24);
// №4⊗jsPmSMMA
// Определите, сколько пятниц 13-е в текущем году.
console.log("task 4");
let counterFri13 = 0;
for (let month = 0; month <= 11; month++) {
  let dayOf13 = new Date(currentYear, month, 13);
  if (dayOf13.getDay() == 5) counterFri13++;
}
console.log(counterFri13);

// №5⊗jsPmSMMA
// Определите, какой год был 3 месяца назад.
console.log("task 5");
console.log(new Date(currentYear, currentMonth - 3, currentDay).getFullYear());

// №6⊗jsPmSMMA
// Определите, какой день недели будет в последнем дне текущего месяца.
console.log("task 6");
console.log(days[new Date(currentYear, currentMonth + 1, 0).getDay()]);
// №7⊗jsPmSMMA
// Напишите код, который будет определять, високосный ли текущий год.
function isLeap(year) {
  return new Date(year, 2, 0).getDate() == 29;
}
console.log(isLeap(2024));
console.log(isLeap(293));

// №8⊗jsPmSMMA
// Напишите код, который будет находить предыдущий високосный год.
let year = currentYear;

while (!isLeap(year)) {
  year--;
  if (isLeap(year)) console.log("Предыдущий високосный год:", year);
}
// №9⊗jsPmSMMA
// Напишите код, который будет находить следующий високосный год.
year = currentYear;
console.log("task 9");
while (!isLeap(year)) {
  year++;
  if (isLeap(year)) console.log("Следующий високосный год:", year);
}
