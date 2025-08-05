/* function declaration доступны выше своего объявления
function expression не доступны выще своего объявления */

// №1⊗jsPmFTDTD
// Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.
console.log("task 1");
functionDeclaration();
function functionDeclaration() {
  console.log("function declaration");
}

// №2⊗jsPmFTDTD
// Создайте функцию как Function Expression.
// Проверьте то, что она не будет доступна выше места
// своего объявления.
console.log("task 2");
//functionExpression(); // ReferenceError: Cannot access 'functionExpression' before initialization
let functionExpression = function () {
  console.log("function expression");
};
// доступна только ниже объявления
functionExpression();
