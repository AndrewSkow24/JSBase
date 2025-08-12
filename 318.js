// №1⊗jsPmSMMA
// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
console.log("task 1");
let myDate1 = new Date(1988, 2, 1);
let myDate2 = new Date(2000, 0, 10);
let difference = myDate2.getTime() - myDate1.getTime();
// допущено, что в месяце 30 дней
let differenceInMonth = difference / 1000 / 60 / 60 / 24 / 30;
console.log(differenceInMonth);

// №2⊗jsPmSMMA
// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.
console.log("task 2");
let currentDate = new Date().getTime();
// 17 июля 1993
let myBirthday = new Date(1993, 6, 17).getTime();
let differenceInMonth2 = (currentDate - myBirthday) / 1000 / 60 / 60 / 24 / 30;

console.log(differenceInMonth2);
