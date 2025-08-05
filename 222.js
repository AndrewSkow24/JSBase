/* Объекты в отличие от примитивов передаются по ссылке.
Это значит, что изменение объекта внутри функции 
также приведёт к изменениям снаружи функции. */

// №1⊗jsPmFVPO
// Определите, не запуская код, что выведется в консоль:
console.log("task 1");
function func(obj) {
  obj.a = "!";
}

let obj = { a: 1, b: 2, c: 3 };
func(obj);
console.log(obj); // {a: '!', b: 2, c: 3"}

// №2⊗jsPmFVPO
// Определите, не запуская код, что выведется в консоль:
console.log("task 2");
function func2(arg) {
  arg = "!";
}

obj = { a: 1, b: 2, c: 3 };
func2(obj.a);
console.log(obj); // никаких изменений так как передавался примитив, а не весь объект

// №3⊗jsPmFVPO
// Определите, не запуская код, что выведется в консоль:
console.log("task 3");
function func(obj) {
  obj = "!";
}

obj = { a: 1, b: 2, c: 3 };
func(obj.a);
console.log(obj); // изменений с исходным объектом не произойдёт

// №4⊗jsPmFVPO
// Определите, не запуская код, что выведется в консоль:
console.log("task 4");
function func4(arr) {
  arr.splice(1, 1); // удаляем 1 символ с позиции 1
}

let arr = [1, 2, 3];
func4(arr);
console.log(arr); // [1, 3]

// №5⊗jsPmFVPO
// Определите, не запуская код, что выведется в консоль:
console.log("task 5");
function func5(arr) {
  arr.slice(1, 1); // slice - не изменяет исходный массив
}

arr = [1, 2, 3];
func5(arr);
console.log(arr); // без изменений

// №6⊗jsPmFVPO
// Определите, не запуская код, что выведется в консоль:
console.log("task 6");
function func(arr) {
  let newArr = arr;
  newArr[0] = "!";
}

arr = [1, 2, 3];
func(arr);
console.log(arr); // ['!', 2, 3]
