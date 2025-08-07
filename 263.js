// №1⊗jsPmClCNG
// Определите, не запуская код, что выведется в консоль:
// console.log("task 1");
// let counter = 0;

// function test() {
//   return function () {
//     console.log(counter);
//     counter++;
//   };
// }

// let func = test;

// let func1 = func();
// let func2 = func();
// // переменная глобальная, поэтому у них общие переменные в замыкании
// func1(); // 0
// func2(); // 1
// func1(); // 2
// func2(); // 3

// №2⊗jsPmClCNG
// Определите, не запуская код, что выведется в консоль:
// console.log("task 2");
// function test() {
//   let counter = 0;

//   return function () {
//     return function () {
//       console.log(counter);
//       counter++;
//     };
//   };
// }

// let func = test()(); //
// из-за того, что счётчик объявлен как глобальная
// переменная, каждая последующая функция будет её изменять

// let func1 = func;
// let func2 = func;
// func1(); // 0
// func2(); // 1
// func1(); // 2
// func2(); // 3

// №3⊗jsPmClCNG
// Определите, не запуская код, что выведется в консоль:
console.log("task 3");
function test() {
  let counter = 0;

  return function () {
    return function () {
      console.log(counter);
      counter++;
    };
  };
}

let func = test();

let func1 = func();
let func2 = func();
func1(); // 0
func2(); // 1
func1(); // 2
func2(); // 3
