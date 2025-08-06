// №1⊗jsPmFNOFP
// Определите, не запуская код, что выведется в консоль:
// console.log("task 1");
// function test(num1, num2) {
//   function func() {
//     console.log(num1 + num2);
//   }

//   func();
// }

// test(1, 2); // 3
// №2⊗jsPmFNOFP
// Определите, не запуская код, что выведется в консоль:
console.log("task 2");
function test(num1, num2) {
  function func() {
    console.log(num1 + num2);
  }

  num1 = 2;
  func();
}

test(1, 2); // 4
