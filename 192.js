// Дана строка '1-2-3-4-5'.
// Поменяйте все дефисы на точки.

let str = "1-2-3-4-5";
while (str.includes("-")) {
  str = str.replace("-", ".");
}
console.log(str);
