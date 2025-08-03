// №1⊗jsPmMuSI
// Дана следующая структура с данными:
console.log("task 1");
let data = {
  1: ["data11", "data12", "data13"],
  2: ["data21", "data22", "data23"],
  3: ["data31", "data32", "data33"],
  4: ["data41", "data42", "data43"],
};
// С помощью вложенных циклов выведите на экран
// все строки с данными.

for (let number in data) {
  for (dataString of data[number]) console.log(dataString);
}

// №2⊗jsPmMuSI
// Дана следующая структура с данными:
console.log("task 2");
data = [
  {
    1: "data11",
    2: "data12",
    3: "data13",
  },
  {
    1: "data21",
    2: "data22",
    3: "data33",
  },
  {
    1: "data31",
    2: "data32",
    3: "data33",
  },
];
for (let object of data) {
  for (let keyObject in object) {
    console.log(object[keyObject]);
  }
}
// С помощью вложенных циклов выведите на экран все строки с данными.
// №3⊗jsPmMuSI
// Дана следующая структура с данными:
console.log("task 3");
data = [
  {
    1: ["data111", "data112", "data113"],
    2: ["data121", "data122", "data123"],
  },
  {
    1: ["data211", "data212", "data213"],
    2: ["data221", "data222", "data223"],
  },
  {
    1: ["data411", "data412", "data413"],
    2: ["data421", "data422", "data423"],
  },
];
// С помощью вложенных циклов выведите на экран все строки с данными.

for (let object of data) {
  for (let objectKey in object) {
    // console.log(object[objectKey]);
    for (let dataString of object[objectKey]) {
      console.log(dataString);
    }
  }
}
