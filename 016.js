// несколько let для одной переменной

/* Одну и ту же переменную нельзя объявить несколько раз 
через let. Следующий код приведёт к ошибке */

let a = 1;
console.log(a);

// SyntaxError: Identifier 'a' has already been declared

// let a = 2;
// console.log(a);

// правильное решение - сначала объявить переменную, а затем
// делать операции с нею

let myNewVar;

myNewVar = 1;
console.log(myNewVar);

myNewVar = 2;
console.log(myNewVar);
