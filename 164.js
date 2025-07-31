// Дан массив:

let arr = [10, 20, 30, 40, 21, 32, 51];
// Возьмите из этого массива те элементы,
// у которых первая цифра 1 или 2, и найдите их сумму.

let newArr = [];

for (let element of arr) {
  if (String(element)[0] === "1" || String(element)[0] === "2")
    newArr.push(element);
}

console.log(newArr);

let sum = 0;

for (let el of newArr) {
  sum += el;
}

console.log("Сумма элементов с первой цифрой 1 или 2:", sum);
