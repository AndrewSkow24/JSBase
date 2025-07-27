// №1⊗jsPmLpNA
// Найдите сумму четных чисел от 2 до 100.
let sumTask1 = 0;
for (let i = 2; i < 100; i++) {
  if (i % 2 == 0) {
    sumTask1 += i;
  }
}
console.log(sumTask1);

// №2⊗jsPmLpNA
// Найдите сумму нечетных чисел от 1 до 99.
let sumTask2 = 0;
for (let i = 1; i < 99; i++) {
  if (i % 2 != 0) {
    sumTask2 += i;
  }
}
console.log(sumTask2);

// №3⊗jsPmLpNA
// Найдите произведение целых чисел от 1 до 20.

let productNum = 1;
for (let i = 1; i < 20; i++) {
  productNum *= i;

  console.log(i, ":", productNum);
}
console.log(productNum);
