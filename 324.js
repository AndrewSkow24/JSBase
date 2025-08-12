// Определите, какой день недели будет 31 декабря
// текущего года.

let currentYear = new Date().getFullYear();
console.log("Текущий год:", currentYear);

let days = ["вс", "пн", "вт", "ср", "чт", "сб"];

console.log(
  "31 декабря текущего года: ",
  days[new Date(currentYear, 11, 31).getDay()]
);
