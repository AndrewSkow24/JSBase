// №1⊗jsPmFNIFS
// Определите, не запуская код, что выведется в консоль:
// console.log("task 1");
// function test() {
//   let num = 1;

//   function func() {
//     console.log(num);
//   }

//   func(); // 1
// }

// test(); // 1
// №2⊗jsPmFNIFS
// Определите, не запуская код, что выведется в консоль:
// console.log("task 2");
// function test() {
//   let num = 1;

//   function func() {
//     console.log(num);
//   }
// }

// test(); // ничего, так как func определили но нигде не вызвали
// №3⊗jsPmFNIFS
// Определите, не запуская код, что выведется в консоль:
console.log("task 3");
function test() {
  let num = 1;

  function func() {
    console.log(num);
  }

  func();
}
// ничего, т.к. функцию test() нигде не вызывали

// №4⊗jsPmFNIFS
// Определите, не запуская код, что выведется в консоль:
console.log("task 4");
function test() {
  let num;

  function func() {
    console.log(num);
  }

  num = 1;
  func();

  num = 2;
  func();
}

test(); // 1, затем 2
