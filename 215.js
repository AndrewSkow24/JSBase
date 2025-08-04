// №1⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
console.log("task 1");
function sumArrElements(arr) {
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  return sum;
}
console.log(sumArrElements([1, 2, 3, 4, 5]));

// №2⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
console.log("task 2");
function dividerNum(num) {
  let dividerArr = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) dividerArr.push(i);
  }
  return dividerArr;
}
console.log("Массив делителей: ", dividerNum(217));
console.log("Массив делителей: ", dividerNum(363));
console.log("Массив делителей: ", dividerNum(1001));

// №3⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
console.log("task 3");
function stringToArr(str) {
  return str.split("");
}

console.log(stringToArr("Моя строка"));

// №4⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
console.log("task 4");
function reverseString(str) {
  let reverseStr = [];
  for (let i = str.length - 1; i >= 0; i--) reverseStr.push(str[i]);
  return reverseStr.join("");
}
console.log(reverseString("Телефон"));

// №5⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
console.log("task 5");
function toUpperFirstSymbol(str) {
  str = str.replace(str[0], str[0].toUpperCase());
  return str;
}
console.log(toUpperFirstSymbol("строка"));

// №6⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова
// этой строки.
console.log("Task 6");
function toUpperCaseEveryWord(str) {
  let wordsArr = str.split(" ");
  let returnedString = [];
  for (let word of wordsArr) {
    returnedString.push(toUpperFirstSymbol(word));
  }
  return returnedString.join(" ");
}
console.log(toUpperCaseEveryWord("Моя длинная строка из нескольких слов"));

// №7⊗jsPmFBPrm
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
console.log("task 7");
function createIntArr(stop) {
  let arr = [];
  for (let i = 0; i <= stop; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(createIntArr(10));

// №8⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
console.log("task 8");
function sumOfDigitNum(num) {
  num = String(num);
  let sumDigit = 0;
  for (let digit of num) sumDigit += +digit;
  return sumDigit;
}
console.log(sumOfDigitNum(123));

// №9⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2015));

// №10⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток,
//  соответствующих этим секундам.
console.log("task 10");
function secondsToDays(seconds) {
  const secondsInDays = 60 * 60 * 24; // 86400
  return (seconds / secondsInDays).toFixed(2);
  console.log(secondsInDays);
}
console.log(secondsToDays(123000));

// №11⊗jsPmFBPrm
// Сделайте функцию, которая будет возвращать случайный элемент из массива.
console.log("task 11");

function randomElementOfArr(arr) {
  randomElement = Math.round(Math.random() * arr.length);
  console.log("рандомный элемент:", randomElement);
  return arr[randomElement];
}
console.log(randomElementOfArr([1, 2, 3]));

// №12⊗jsPmFBPrm
// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
console.log("task 12");
function isNumSimple(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isNumSimple(7));
console.log(isNumSimple(33));
console.log(isNumSimple(13));
