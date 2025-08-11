// №1⊗jsPmSMMA
// Переделайте следующий код через деструктуризацию согласно изученной теории:
console.log("task 1");
function func({ color, width, height }) {
  console.log(color, width, height);
}

func({ color: "red", width: 400, height: 500 });

// №2⊗jsPmSMMA
// Переделайте следующий код через деструктуризацию согласно изученной теории:
console.log("task 2");
function func2({ width, height, color = "black" }) {
  console.log(width, height, color);
}

func2({ color: "red", width: 400, height: 500 });
