// Напишите, какие недостатки у следующего кода, и исправьте их:
console.log("task 1");
function getArrArithmeticMean(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res / arr.length;
}
console.log(getArrArithmeticMean([1, 3, 5, 7]));

// №2⊗jsPmFBAdv
// Напишите, какие недостатки у следующего кода, и исправьте их:
console.log("task 2");

function getSumElementsArr(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

function getQuotientOfSumArrays(arr1, arr2) {
  let res1 = getSumElementsArr(arr1);
  let res2 = getSumElementsArr(arr2);

  return res1 / res2;
}

console.log(getQuotientOfSumArrays([1, 2, 3], [4, 5, 6]));
// №3⊗jsPmFBAdv
// Напишите, какие недостатки у следующего кода, и исправьте их:

function getProduct(arr) {
  let res = 1;

  for (let elem of arr) {
    res *= elem;
  }

  return res;
}
