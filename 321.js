// в js последний день месяца - это нулевой день следующего месяца

// №1⊗jsPmSMMA
// Оформите этот способ решения проблемы в
// виде функции, которая параметрами будет
// принимать месяц и год и возвращать
// номер последнего дня этого месяца.
function nameLastDayOfMonth(month, year) {
  // передавать в функцию нужно привычный номер месяца
  let objectDate = new Date(year, month, 0);
  console.log(year);
  console.log(objectDate);
  let nameDays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  return nameDays[objectDate.getDay()];
}

console.log(nameLastDayOfMonth(8, 2025));

// №2⊗jsPmSMMA
// Определите, какой день недели будет в
// последнем дне пятого месяца 2025 года.
console.log("task 2");
console.log(nameLastDayOfMonth(5, 2025));
