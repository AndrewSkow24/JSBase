// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.

let currentDate = new Date();

const addZero = (num) => {
  if (num >= 0 && num < 10) return "0" + num;
  else return num;
};

let formattedDate =
  addZero(currentDate.getHours()) +
  ":" +
  addZero(currentDate.getMinutes()) +
  ":" +
  addZero(currentDate.getSeconds()) +
  " " +
  addZero(currentDate.getDate()) +
  "." +
  addZero(currentDate.getMonth() + 1) +
  "." +
  currentDate.getFullYear();
console.log(formattedDate);
