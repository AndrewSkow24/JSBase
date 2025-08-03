// №1⊗jsPmSMAC
// Дан следующий массив:
console.log("task 1");
let arr1 = [1, 2, 3, 4, 5];
// С помощью метода splice преобразуйте массив в
// следующий:
// [1, 4, 5]
arr1.splice(1, 2);
console.log(arr1);

// №2⊗jsPmSMAC
// Дан следующий массив:
console.log("task 2");
let arr2 = [1, 2, 3, 4, 5];
// С помощью метода splice сделайте из него массив:
// [1, 2, 3, 'a', 'b', 'c', 4, 5]
arr2.splice(3, 0, "a", "b", "c");
console.log(arr2);

// №3⊗jsPmSMAC
// Дан следующий массив:
console.log("task 3");
let arr3 = [1, 2, 3, 4, 5];
// С помощью метода splice сделайте из него массив:
arr3.splice(1, 0, "a", "b");
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
arr3.splice(6, 0, "c");
arr3.splice(8, 0, "e");
console.log(arr3);
