// поиск по строкам
// includes (что_ищем, откуда начать поиск-необязательный_параметр)
// startWith (что_ищем, откуда начать проверку-необязательно)
// endWith  (что_ищем, длина_строки - необязательно)
// indexOf(что_ищем, откуда_начать - необязательно) - возвращает true или -1
// lastIndexOf (что_ищем, откуда_начать - необязательно) - возвращает true или -1

// №1⊗jsPmSMSS
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
let str = "http://code.mu";
let str2 = "https://code.mu";
console.log(str.startsWith("http://")); // true
console.log(str2.startsWith("http://")); // false

// №2⊗jsPmSMSS
// Дана строка. Проверьте, заканчивается ли эта
// строка на '.html'.

let str3 = "index.html";
console.log(str3.endsWith(".html")); // true
