let sum =
  1 +
  (function () {
    return 2;
  })();
console.log(sum); // 3

// Определите, не запуская код, что выведется в консоль:

let result =
  (function () {
    return 1;
  })() +
  (function () {
    return 2;
  })();
console.log(result); // 3
