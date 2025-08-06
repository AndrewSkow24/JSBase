// функции-коллбэки в JS

/* Функции можно передавать параметрами в другие 
функции. Такие функции-параметры называются колбеками. 

*/

function eachArrElement(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}

// №1⊗jsPmFNClb
// Дан массив с числами.
// С помощью созданной нами функции each увеличьте
// каждый элемент в два раза.

console.log("task 1");
let arr = [1, 2, 3];
let doubleElementsArr = eachArrElement(arr, function (elem) {
  return elem * 2;
});
console.log(doubleElementsArr);

// №2⊗jsPmFNClb
// Дан массив со строками.
// С помощью созданной нами функции each
// переверните символы каждой строки в обратном порядке.

console.log("task 2");
arr = ["string1", "string2", "string3"];
function reverseString(str) {
  let newStrArr = [];
  for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
    newStrArr[j] = str[i];
  }
  return newStrArr.join("");
}
console.log(eachArrElement(arr, reverseString));

// №3⊗jsPmFNClb
// Дан массив со строками.
// С помощью созданной нами функции each сделайте
// заглавным первый символ каждой строки.

console.log("task 3");
function firstSymbolUpper(str) {
  str = str.split("");
  str[0] = str[0].toUpperCase();
  return str.join("");
}

console.log(eachArrElement(arr, firstSymbolUpper));
