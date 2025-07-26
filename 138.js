// №1⊗jsPmSMMA
// Дана переменная, содержащая некоторую строку.
// Проверьте, что эта строка начинается на символ 'a'.

const startA = (str) => {
  if (str[0] === "a" || str[0] === "A") {
    console.log("Строка начинается с латинской буквы A");
  } else {
    console.log("Строка не начинается с латинской буквы A");
  }
};
console.log("task 1");
startA("abcds");
startA("vvsad");
startA("ABDK");

// №2⊗jsPmSMMA
// Дана переменная, содержащая некоторую строку.
//  Проверьте, что эта строка заканчивается на символ 'x'.
console.log("\ntask 2");
function endX(str) {
  if (str[str.length - 1] == "x" || str[str.length - 1] == "X") {
    console.log("Строка заканчивается на латинскую букву x");
  } else console.log("String doesn't end 'X'");
}

endX("asax");
endX("sdad");
endX("dasADDX");

// №3⊗jsPmSMMA
// Дана переменная, содержащая некоторую строку.
// Проверьте, что эта строка начинается на символ 'a'
//  или символ 'b'.
console.log("\ntask3");
function startAorB(str) {
  if (str[0] == "a" || str[0] == "b" || str[0] == "A" || str[0] == "B") {
    console.log("Строка начинается на большую или строчную A или B");
  } else {
    console.log("строка не начинается на a или b");
  }
}
startAorB("abcd");
startAorB("bcssa");
startAorB("dasda");
