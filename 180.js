// №1⊗jsPmMuAOO
// Дан следующий массив работников:
console.log("task 1");
let employees = [
  {
    name: "name1",
    salary: 300,
  },
  {
    name: "name2",
    salary: 400,
  },
  {
    name: "name3",
    salary: 500,
  },
];
// Выведите на экран данные каждого работника в
// формате имя - зарплата.
for (let employee of employees) {
  console.log(employee.name + " - " + employee.salary);
}

// №2⊗jsPmMuAOO
// Дан следующий массив работников:
console.log("task 2");
employees = [
  {
    name: "name1",
    salary: 300,
  },
  {
    name: "name2",
    salary: 400,
  },
  {
    name: "name3",
    salary: 500,
  },
];
// Выведите на экран сумму зарплат всех работников.
let sumSalary = 0;
for (let employee of employees) {
  sumSalary += employee.salary;
}
console.log("Суммарная зарплата: ", sumSalary);

// №3⊗jsPmMuAOO
// Дан следующий массив работников:
console.log("task 3");
employees = [
  {
    name: "name1",
    salary: 300,
    age: 28,
  },
  {
    name: "name2",
    salary: 400,
    age: 29,
  },
  {
    name: "name3",
    salary: 500,
    age: 30,
  },
  {
    name: "name4",
    salary: 600,
    age: 31,
  },
  {
    name: "name5",
    salary: 700,
    age: 32,
  },
];
// Выведите на экран сумму зарплат тех работников,
// возраст которых равен или более 30 лет.
sumSalary = 0;
for (let employee of employees) {
  if (employee.age >= 30) sumSalary += employee.salary;
}
console.log(sumSalary);
