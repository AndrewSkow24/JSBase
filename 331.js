// №1⊗jsPmSMMA
// Рассмотрите промежуток от 2000 года до текущего года.
// Определите, сколько раз 1 января в этом промежутке попадало на выходной день,
//  то есть на субботу или на воскресенье.

let currentYear = new Date().getFullYear();

let counter = 0;

for (let year = 2000; year <= currentYear; year++) {
  let dayOfWeek = new Date(year, 0, 1).getDay();
  if (dayOfWeek == 0 || dayOfWeek == 6) {
    counter++;
  }
}
console.log(counter);
