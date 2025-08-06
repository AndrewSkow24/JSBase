// // счётчик на замыканиях в JavaScript

// function test() {
//   let num = 1;

//   return function () {
//     console.log(num);
//     num++;
//   };
// }

// let func = test();
// func(); // 1
// func(); // 2
// func(); // 3

// №1⊗jsPmClCr
// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.
console.log("task 1");
function counterCall() {
  let counter = 1;

  return function () {
    console.log(counter);
    counter++;
  };
}

let myFirstCounter = counterCall();
myFirstCounter(); // 1
myFirstCounter(); // 2
myFirstCounter(); // 3

// №2⊗jsPmClCr
// Пусть функция в замыкании хранит число 10.
// Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.
console.log("task 2");
function reverseCounter() {
  let num = 10;
  return function () {
    num--;
    console.log(num);
  };
}

let mySecondCounter = reverseCounter();
mySecondCounter(); // 9
mySecondCounter(); // 8
mySecondCounter(); // 7

// №3⊗jsPmClCr
// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0,
// а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.
console.log("task 3");
function reverseCounter2() {
  let num = 10;
  return function () {
    if (num === 0) {
      console.log("Отсчёт окончен");
    } else {
      num--;
      console.log(num);
    }
  };
}

let myThirdCounter = reverseCounter2();
for (let i = 0; i <= 15; i++) myThirdCounter();
