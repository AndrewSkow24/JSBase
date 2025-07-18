// №1⊗jsPmBsStA
// Дано число 12345. Найдите сумму цифр этого числа.

let num = 12345;
let numStr = String(num);
console.log(
  `Сумма чисел ${num}: ${
    +numStr[0] + +numStr[1] + +numStr[2] + +numStr[3] + +numStr[4]
  }`
);

// №2⊗jsPmBsStA
// Дано число 12345. Найдите произведение цифр этого числа.
console.log(
  `Сумма чисел ${num}: ${
    numStr[0] * numStr[1] * numStr[2] * numStr[3] * numStr[4]
  }`
);

// №3⊗jsPmBsStA
// Дано число 12345. Переставьте цифры этого числа в обратном порядке.
let reverseNum = numStr[4] + numStr[3] + numStr[2] + numStr[1] + numStr[0];
console.log(reverseNum);
