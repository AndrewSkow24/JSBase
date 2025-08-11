// В следующем коде части объекта записываются в соответствующие переменные:

let options = {
  width: 400,
  height: 500,
};

let { color: c = "black", width: w, height: h } = options;

console.log(c);
console.log(w);
console.log(h);

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
