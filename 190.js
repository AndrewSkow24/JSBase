// вырезание строк в JavaScript

// substr
// substring
// slice

// строка.substr(откуда_резать, сколько_символов)
// строка.substring(откуда_начать_резать, докуда_дорезать)
// строка.slice(откуда_резать, докуда_дорезать)

// Дана строка 'я учу javascript!'.
// Вырежьте из нее слово 'учу' и слово 'javascript'
// тремя разными способами (через
// substr, substring, slice).
let str = "я учу javascript";

// substr - устаревший вариант
let substr1 = str.substr(2, 3);
console.log(substr1);
let substr2 = str.substr(6);
console.log(substr2);

// substring - игнорирует отрицательные значения
substr1 = str.substring(2, 5);
console.log(substr1);
substr2 = str.substring(6);
console.log(substr2);

// slice - поддерживает отрицательные индексы (с конца строки)
substr1 = str.slice(2, 5);
console.log(substr1);
substr2 = str.slice(6);
console.log(substr2);
