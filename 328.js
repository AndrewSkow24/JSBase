// Определите, сколько часов прошло между
// вчерашним полднем и текущим моментом времени.

let currentDate = new Date();

let currentYear = new Date().getFullYear(); // текущий год
let currentMonth = new Date().getMonth(); // текущий месяц
let currentDay = new Date().getDate(); // текущее число

let yesterdayNoon = new Date(
  currentYear,
  currentMonth,
  currentDay - 1,
  12,
  0,
  0
);

let difference = currentDate - yesterdayNoon;
console.log("Прошло часов:", Math.floor(difference / 1000 / 3600));
