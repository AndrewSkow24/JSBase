// №1⊗jsPmSMMA
// Дано целое число. Напишите условие, которое проверит,
// равна ли последняя цифра этого числа нулю.
function endNumber0(num) {
  let lastSymbolNum = String(num)[String(num).length - 1];
  lastSymbolNum === "0"
    ? console.log("последний цифра числа равна нулю")
    : console.log("последняя цифра числа НЕ равна нулю");
}

endNumber0(80);
endNumber0(901);
endNumber0(-1234);

// №2⊗jsPmSMMA
// Пусть в переменной num хранится число.
//  Определите, четное число или нет.
//  Число будет четным, если последний символ равен
//  0, 2, 4, 6 или 8, и нечетным в противном случае.

function isEvenNumber(num) {
  let lastSymbolNum = String(num)[String(num).length - 1];
  if (
    lastSymbolNum == "0" ||
    lastSymbolNum == "2" ||
    lastSymbolNum == "4" ||
    lastSymbolNum == "6" ||
    lastSymbolNum == "8"
  ) {
    console.log("Число чётное");
  } else console.log("Число НЕ чётное ");
}

isEvenNumber(123);
isEvenNumber(10);
