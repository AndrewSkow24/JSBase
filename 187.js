// Math.random - возвращает случайное число от 0 до 1

console.log(Math.random());

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInt(1, 100));

// №2⊗jsPmSMMRa
// С помощью цикла заполните массив 10-ю случайными целыми числами.

let randomArr = [];
for (let i = 0; i < 10; i++) {
  randomArr.push(Math.random());
}

console.table(randomArr);
