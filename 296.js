// операция деструктуризации

/* данная операция предназначена для массовой 
записи элементов в переменные в одну строчку кода

let [переменная1, переменная2, переменная3] = массив */

let arr = [2025, 12, 31];

let [year, month, day] = arr;

console.log(year);
console.log(month);
console.log(day);

// В следующем коде части массива записываются в соответствующие переменные:

arr = ["John", "Smit", "development", "programmer", 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

let [name, surname, department, position, salary] = arr;
console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary);
