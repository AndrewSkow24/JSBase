// лишние элементы при деструктиризации массива в JS

let arr = [2025, 12];
let [year, month, day] = arr;
console.log(year); // 2025
console.log(month); // 12
console.log(day); // undefined

/* если в массиве больше элементов, чем переменных, то 
лишние элементы просто никуда не запишутся, и ничего страшного не произойдёт */

arr = [2025, 12, 31, 23, 59, 59, 59];

let [year2, month2, day2] = arr;
console.log(year2);
console.log(month2);
console.log(day2);
