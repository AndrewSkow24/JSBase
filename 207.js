// №1⊗jsPmFBRN
// Что выведется в консоль в результате выполнения следующего кода:
console.log("task 1");
function func(num) {
  return num;

  let res = num ** 2;
  return res;
}

console.log(func(3)); // выведется 3, потому что после return код не выполняется
// Объясните почему.

// №2⊗jsPmFBRN
// Что выведется в консоль результате выполнения следующего кода:
console.log("task 2");
function func2(num) {
  if (num <= 0) {
    return Math.abs(num);
  } else {
    return num ** 2;
  }
}

console.log(func2(10)); // 100, так как при этом условии параметр возводится в квадрат
console.log(func2(-5)); // 5, т.к. при этом условии при этом возвращается абсолютное значение параметра
// Объясните почему.

// №3⊗jsPmFBRN
// Что выведется в консоль результате выполнения следующего кода:
console.log("task 3");
function func3(num) {
  if (num <= 0) {
    return Math.abs(num);
  }

  return num ** 2;
}
// условия такие же как и в предыдущей задаче
console.log(func3(10)); // 100
console.log(func3(-5)); // 5
// Объясните почему.
