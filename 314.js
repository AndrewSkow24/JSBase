let currentDate = new Date();

// №1⊗jsPmSMMA
// Выведите на экран номер текущего дня недели.
console.log("task 1");
let daysObject = {
  0: "воскресенье",
  1: "понедельник",
  2: "вторник",
  3: "среда",
  4: "четверг",
  5: "пятница",
  6: "суббота",
};

console.log(
  `Сегодня ${currentDate.getDay()}-й день недели - ${
    daysObject[currentDate.getDay()]
  }`
);

// №2⊗jsPmSMMA
// Определите, является ли текущий день недели
//  выходным или рабочим днем.
console.log("task 2");
currentDate.getDay() == 0 || currentDate.getDay() == 6
  ? console.log("Выходной день")
  : console.log("НЕвыходной день");
// №3⊗jsPmSMMA
// Определите сколько дней осталось до ближайшего воскресенья.
console.log("task 3");
console.log(`До ближайшего воскресенья осталось: ${7 - currentDate.getDay()}`);
