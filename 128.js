// Пусть в переменной num хранится число.
// Если это число попадает в диапазон от 10 до 99,
// то найдите сумму цифр этого числа.
// Если полученная сумма меньше или равна 9,
// то выведите сообщение о том, что сумма цифр
// однозначна, в противном случае выведите сообщение
// о том, что сумма цифр двухзначна.

let num = 12;
let sumNumbers;

if (num >= 10 && num <= 99) {
  sumNumbers = Number(String(num)[0]) + Number(String(num)[1]);
  console.log("Сумма цифр числа: ", sumNumbers);
  if (sumNumbers <= 9) {
    console.log("сумма цифр однозначна");
  } else console.log("Сумма цифр двузначна");
} else {
  console.log("Число не в диапазоне [10:99]");
}
