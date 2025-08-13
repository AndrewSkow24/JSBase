// №1⊗jsPmSMMA
// Получите объект с датой, содержащий текущий момент времени.
// Получите объект с датой, содержащий полдень текущего дня.
// Сравните два этих объекта и определите, был ли уже полдень или нет.

let currentDate = new Date();
let noon = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  12,
  0,
  0
);

if (currentDate > noon) {
  console.log("Полдень текущего дня уже был");
} else console.log("Полдень ещё не наступил");

// №2⊗jsPmSMMA
// Получите объект с датой, содержащий текущий момент времени.
// Получите объект с датой, содержащий 15 число текущего месяца.
// Сравните два этих объекта и определите,
// прошла ли уже половина месяца или нет.

let halfOfMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  15
);

if (currentDate > halfOfMonth) console.log("Половина месяца прошла");
else console.log("Ещё не наступила половина месяца");
