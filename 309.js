// // дестуктуризация параметров функций в JavaScript

// function func([year, month, day]) {
//   console.log(year);
//   console.log(month);
//   console.log(day);
// }

// func([2025, 12, 31]);

// // №1⊗jsPmSMMA
// // Переделайте следующий код через деструктуризацию согласно изученной теории:
console.log("task 1");
function func([name, surname, department, position, salary]) {
  console.log(name, surname, department, position, salary);
}
func(["John", "Smit", "development", "programmer", 2000]);

// №2⊗jsPmSMMA
// Переделайте следующий код через деструктуризацию согласно изученной теории:
console.log("task 2");
function func2([name, surname, ...info]) {
  console.log(name, surname, info);
}

func2(["John", "Smit", "development", "programmer", 2000]);

// №3⊗jsPmSMMA
// Переделайте следующий код через деструктуризацию согласно изученной теории:
console.log("task 3");
function func3([name, surname, department, position = "джуниор"]) {
  console.log(name, surname, department, position);
}

func3(["John", "Smit", "development"]);

// №4⊗jsPmSMMA
// Переделайте следующий код через деструктуризацию согласно изученной теории:
console.log("task 4");
function func4(department, [name, surname], [year, month, day]) {
  console.log(department, name, surname, year, month, day);
}

func4("development", ["John", "Smit"], [2018, 12, 31]);
