// №1⊗jsPmSMMA
// Определите, сколько часов осталось до конца дня.

let currentDate = new Date();
let endDayTime = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  23,
  59,
  59
);

let difference = endDayTime - currentDate;
console.log(difference / 1000 / 3600);
