// Дана дата в формате год-месяц-день.
// Преобразуйте эту дату в формат день.месяц.год.

let date = "2025-12-31";
let newFormattedDate = date.split("-").reverse().join(".");
console.log(newFormattedDate);
