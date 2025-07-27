// Практика на условия if-else в JavaScript

// №1⊗jsPmSMMA
// В переменной month лежит какое-то число из интервала
// от 1 до 12. Определите в какую пору года попадает
// этот месяц (зима, лето, весна, осень).
console.log("task 1");
function timeOfYear(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Зима");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Весна");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Лето");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Осень");
      break;
    default:
      console.log("Некорректное значение месяца");
  }
}
timeOfYear(12);
timeOfYear(1);
timeOfYear(6);
timeOfYear(11);
timeOfYear(16);

// №2⊗jsPmSMMA
// Дана строка, состоящая из символов, например,
//  'abcde'. Проверьте, что первым символом этой
// строки является буква 'a'. Если это так - выведите
//  'да', в противном случае выведите 'нет'.
console.log("\ntask2");
function startA(str) {
  if (str[0] == "a") {
    console.log("да");
  } else console.log("нет");
}
startA("abcd");
startA("bcd");

// №3⊗jsPmSMMA
// Дано число, например, 12345.
// Проверьте, что первым символом этого числа является
//  цифра 1, 2 или 3. Если это так - выведите 'да',
// в противном случае выведите 'нет'.
console.log("\ntask3");
function start123(num) {
  num = String(num);
  num[0] == "1" || num[0] == "2" || num[0] == "3"
    ? console.log("да")
    : console.log("нет");
}
start123(1234);
start123(324);
start123(23);
start123(9902);

// №4⊗jsPmSMMA
// Дано трехзначное число.
// Найдите сумму цифр этого числа.

function sumOfThreeDigits(num) {
  num = String(num);
  if (num.length != 3) {
    console.log("некорректное число");
  } else {
    let sum = +num[0] + +num[1] + +num[2];
    console.log(sum);
  }
}

sumOfThreeDigits(123);
sumOfThreeDigits(321);
sumOfThreeDigits(2222);
sumOfThreeDigits(22);

// №5⊗jsPmSMMA
// Дано число из 6-ти цифр.
// Проверьте, что сумма первых трех цифр равняется
// сумме вторых трех цифр. Если это так - выведите 'да',
// в противном случае выведите 'нет'.
console.log("task5");
let num = "123321";

if (+num[0] + +num[1] + +num[2] === +num[3] + +num[4] + +num[5]) {
  console.log("да");
} else console.log("нет");
