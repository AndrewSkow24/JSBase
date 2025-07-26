// №1⊗jsPmSMMA
// Код должен проверить сумму чисел:

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
  console.log("+++");
} else {
  console.log("---");
} // ошибки нет

// №2⊗jsPmSMMA
// Код должен проверить сумму чисел:

num1 = "1";
num2 = "2";

if (Number(num1) + Number(num2) === 3) {
  console.log("+++");
} else {
  console.log("---");
}

// №3⊗jsPmSMMA
// Код должен проверить сумму чисел:

num1 = "1";
num2 = "2";

if (Number(num1) + Number(num2) === 3) {
  console.log("+++");
} else {
  console.log("---");
}

// №4⊗jsPmSMMA
// Код должен проверить первую цифру числа:

let num = 123;

if (String(num)[0] == 1) {
  console.log("+++");
} else {
  console.log("---");
}

// №5⊗jsPmSMMA
// Код должен проверить первую цифру числа:

num = 123;

if (String(num)[0] == 1) {
  console.log("+++");
} else {
  console.log("---");
}

// №6⊗jsPmSMMA
// Код должен проверить первую цифру числа:

num = 123;

if (String(num)[0] == 1) {
  console.log("+++");
} else {
  console.log("---");
}

// №7⊗jsPmSMMA
// Код должен проверить первую цифру числа:

num = 123;
let first = String(num)[0];

if (first === "1") {
  console.log("+++");
} else {
  console.log("---");
}

// №8⊗jsPmSMMA
// Код должен проверить, что в числе ровно две цифры:

num = 12;

if (String(num).length === 2) {
  console.log("+++");
} else {
  console.log("---");
}

// №9⊗jsPmSMMA
// Код должен проверить, что в числе ровно две цифры:

num = 12;
let str = String(num);
console.log(str.length);
if (str.length === 2) {
  console.log("+++");
} else {
  console.log("---");
}

// №10⊗jsPmSMMA
// Код должен проверить, что в числе ровно две цифры:

num = 12;

if (String(num).length === 2) {
  console.log("+++");
} else {
  console.log("---");
}

// №11⊗jsPmSMMA
// Код должен проверить, что в числе ровно две цифры:

num = 12;

if (String(num).length === Number(2)) {
  console.log("+++");
} else {
  console.log("---");
}

// №12⊗jsPmSMMA
// Код должен проверить, что в числе ровно две цифры:

num = 12;

if (String(num).length === 2) {
  console.log("+++");
} else {
  console.log("---");
}

// №13⊗jsPmSMMA
// Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:

num = "123033"; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = Number(num[0]) + +num[1] + +num[2];
let sum2 = +num[3] + +num[4] + +num[5];

if (sum1 == sum2) {
  console.log("суммы равны");
} else {
  console.log("суммы не равны");
}
