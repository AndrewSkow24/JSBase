// №1⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 1");
let date = new Date(2018, 1, 35);
// в феврале 2018 28 дней
// 29 февраля = 1 марта
// 30 февраля = 2 марта
// 31 февраля = 3 марта
// 32 февраля = 4 марта
// 33 февраля = 5 марта
// 34 февраля = 6 марта
// 35 февраля = 7 марта
console.log(date); // какая дата будет? - 7 марта

// №2⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 2");
date = new Date(2018, 15, 1); // 2019 год 4 месяц 1 число
// 12 месяц - 0
// 13 месяц - 1
// 14 месяц - 2
// 15 месяц - 3
console.log(date); // какая дата будет?

// №3⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 3");
date = new Date(2018, 3, 31); // 2018 май 1
console.log(date); // какая дата будет?

// №4⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 4");
date = new Date(2018, 1, 31); // 3 марта 2018
console.log(date); // какая дата будет?

// №5⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 5");

date = new Date(2018, 12, 33);
// день 2
// февраль
// 2019
console.log(date); // какая дата будет?

// №6⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 6");
date = new Date(2018, 33, 33);
// 33 месяца быть не может
/* 
11 - декабрь 
0 - январь 
... 
12 - январь (2019)
13 - февраль
14 - март ...
24 - январь (2020)
33 - август 2020
*/
// в августе не может быть 33 дня
// поэтому 2 сентября 2020
console.log(date); // какая дата будет?
// №7⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 7");
date = new Date(2018, 5, 0);
// 0 июня = 31 мая 2018
console.log(date); // какая дата будет?
// №8⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 8");
date = new Date(2018, 0, 0); // 31 декабря 2017
console.log(date); // какая дата будет?
// №9⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 9");
date = new Date(2018, -12, -33);
console.log(date); // какая дата будет?
// 2016 год 28 ноября

/* 
0 - январь 
-1 - декабрь 
-2 - ноябрь
-3 - октябрь 
-4 - сентябрь 
-5 - август 
-6 - июль
-7 - июнь
-8 - май
-9 - апрель
-10 - март
-11 - февраль 
-12 январь 
*/

// №10⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 10");
date = new Date(2018, 0, 1, 23, 0, 60);
// 2018 год январь 1 число 23 часа 1 минута 1 секунда
console.log(date); // какая дата будет?
// №11⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 11");
date = new Date(2018, 0, 1, 23, 60, 0);
// 2018 январь 2, 00: 00: 00
console.log(date); // какая дата будет?
// №12⊗jsPmSMMA
// Определите, в какую дату JavaScript преобразует следующий момент времени:
console.log("task 12");
date = new Date(2018, 0, 1, 100, 100, 100);
checkingData = new Date(2018, 0, 1, 100, 100, 100);
console.log(date); // какая дата будет?
console.log(correctData(2018, 0, 1, 100, 100, 100));

function correctData(
  year,
  month,
  day = 0,
  hours = 0,
  minutes = 0,
  seconds = 0
) {
  if (month < 12 && month >= 0) {
    month = month;
  } else {
    year += Math.floor(month / 12);
    month %= 12;
  }
  if (!(seconds >= 0 && seconds <= 59)) {
    minutes += Math.floor(seconds / 60);
    seconds %= 60;
  }
  if (!(minutes >= 0 && minutes <= 59)) {
    hours += Math.floor(minutes / 60);
    minutes %= 60;
  }
  if (!(hours >= 1 && hours <= 23)) {
    day += Math.floor(hours / 24);
    hours %= 24;
  }

  return [year, month, day, hours, minutes, seconds];
}
