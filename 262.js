// №1⊗jsPmClCNL
// Определите, не запуская код, что выведется в консоль:
// console.log("task 1");
// function func() {
//   let num = 0;

//   return function () {
//     console.log(num);
//     num++;
//   };
// }
// каждый раз создаётся новая функция с новым лексическим окружением
// func()(); // 0
// func()(); // 0
// func()(); // 0

// №2⊗jsPmClCNL
// Определите, не запуская код, что выведется в консоль:
console.log("task 2");
function func() {
  let num = 0;

  return function () {
    console.log(num);
    num++;
  };
}

let test = func;

test()(); // 0
test()(); // 0
test()(); // 0
