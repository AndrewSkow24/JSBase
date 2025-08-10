// №1⊗jsPmSMMA
// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.

function getArithmeticMean(...rest) {
  let sum = 0;
  for (let element of rest) {
    sum += element;
  }
  return sum / rest.length;
}

console.log(getArithmeticMean(1, 2, 3));
