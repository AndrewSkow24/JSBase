/* Сделайте функцию test, параметрами принимающую 3 функции. 
Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, 
возвращающую 3. Выведите в консоль сумму результатов функций. */

function test(function1, function2, function3) {
  console.log(function1() + function2() + function3());
}

test(
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  }
);
