// №1⊗jsPmFNOIP
// Определите, не запуская код, что выведется в консоль:

// function test(num) {
//   function func(localNum) {
//     console.log(localNum);
//   }

//   func(num); // 1
// }

// test(1); // 1

// №2⊗jsPmFNOIP
// Определите, не запуская код, что выведется в консоль:

// function test(num) {
//   function func(localNum) {
//     console.log(localNum);
//   }

//   func(num + 1);
// }

// test(1); // 2

// №3⊗jsPmFNOIP
// Определите, не запуская код, что выведется в консоль:

// function test(num) {
//   function func(localNum) {
//     console.log(num);
//   }

//   func(num + 1);
// }

// test(1); // 1

// №4⊗jsPmFNOIP
// Определите, не запуская код, что выведется в консоль:

// function test(num) {
//   function func(localNum) {
//     localNum = 2;
//   }

//   func(num);
//   console.log(num);
// }

// test(1); // 1

// №5⊗jsPmFNOIP
// Определите, не запуская код, что выведется в консоль:

// function test(num) {
//   function func(localNum) {
//     localNum = 2;
//   }

//   func(num);
//   console.log(localNum); // ошибка
// }

// test(1);

// №6⊗jsPmFNOIP
// Определите, не запуская код, что выведется в консоль:

function test(num) {
  function func(localNum) {
    num = 2;
  }

  func(num);
  console.log(num);
}

test(1); // 2
