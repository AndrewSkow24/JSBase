// №1⊗jsPmLpFl
// Дан массив:

let arr = ["a", "b", "c", "d", "e"];

let existC = false;

for (let element of arr) {
  if (element === "c") {
    existC = true;
    break;
  }
}

existC ? console.log("+++") : console.log("---");

// Проверьте, что в этом массиве есть элемент 'c'.
//  Если есть - выведите '+++', а если нет -
// выведите '---'.

// №2⊗jsPmLpFl
// Напишите код, который будет проверять
//  число на то, простое оно или нет.
// Простое число делится только на единицу
// и на само себя, и не делится на другие числа.

function isPrimeNumber(num) {
  isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      //   console.log(i);
      if (i>2 && )
      isPrime = false;
    }
  }

  isPrime
    ? console.log(`Число ${num} - простое`)
    : console.log(`Число ${num} не является простым`);
}

isPrimeNumber(17);
isPrimeNumber(21);
isPrimeNumber(35);
isPrimeNumber(257);
