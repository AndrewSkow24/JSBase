// В следующем коде части массива записываются в соответствующие переменные:

let arr = ["John", "Smit", "development", "programmer", 2000];

let department = arr[2];
let position = arr[3];
console.log(department);
console.log(position);

// Переделайте этот код через деструктуризацию согласно изученной теории.

let [, , department2, position2] = arr;
console.log(department2);
console.log(position2);
