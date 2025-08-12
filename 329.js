// №1⊗jsPmSMMA
// Определите, сколько часов прошло между началом дня и текущим моментом времени.

let currentDate = new Date();
let startDayTime = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  0,
  0,
  0
);

let difference = currentDate - startDayTime;
console.log(Math.floor(difference / 1000 / 3600));
