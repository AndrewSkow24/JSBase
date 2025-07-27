// №1⊗jsPmLpND
// Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
console.log("task 1");
for (let i = 10; i < 1000; i++) {
  let iToString = String(i);
  console.log(`Число: ${i}, первая цифра ${iToString[0]}`);
}

// №2⊗jsPmLpND
// Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.
console.log("task 2");
for (let i = 10; i < 1000; i++) {
  let iToString = String(i);
  console.log(
    `Число: ${i}, сумма первой и второй цифры ${+iToString[0] + +iToString[1]}`
  );
}

// №3⊗jsPmLpND
// Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.
console.log("task 3");
for (let i = 10; i < 1000; i++) {
  let iToString = String(i);
  if (iToString[0] == "1") {
    console.log(i);
  }
}

// №4⊗jsPmLpND
// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
console.log("task 4");
for (let i = 10; i < 1000; i++) {
  let iToString = String(i);
  if (+iToString[0] + +iToString[1] === 5)
    console.log(
      `Число: ${i}, сумма первой и второй цифры ${
        +iToString[0] + +iToString[1]
      }`
    );
}
