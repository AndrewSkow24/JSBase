// №1⊗jsPmFNSNP
// Определите, не запуская код, что выведется в консоль:

// function test(num) {
//   function func(num) {
//     console.log(num);
//   }

//   func(num);
// }

// test(1); // 1

// №2⊗jsPmFNSNP
// Определите, не запуская код, что выведется в консоль:

// function test(num) {
//   function func(num) {
//     num = 2;
//   }

//   func(num);
//   console.log(num);
// }

// test(1); // 1

// №3⊗jsPmFNSNP
// Определите, не запуская код, что выведется в консоль:

// function test(num) {
//   function func(num) {
//     console.log(num);
//   }

//   num = 2;
//   func(num);
// }

// test(1); // 2

// №4⊗jsPmFNSNP
// Определите, не запуская код, что выведется в консоль:

function test(num) {
  function func(num) {
    console.log(num);
  }

  func(num);
  num = 2;
}

test(1); // 1
