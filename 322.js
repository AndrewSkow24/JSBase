// Сделайте функцию isLeap, которая параметром будет
// принимать год и возвращать true, если этого год
// високосный, и false - если нет.

function isLeap(year) {
  let date = new Date(year, 2, 0); // последний день февраля
  return date.getDate() == 29;
}

console.log(isLeap(2020));
console.log(isLeap(2024));
console.log(isLeap(2023));
