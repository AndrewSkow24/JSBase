// Решите аналогичную задачу, только определите в
// какую треть часа попадает указанное количество минут.

function thirdHour(min) {
  if (min >= 0 && min <= 20) {
    console.log("1-я треть часа");
  } else if (min > 20 && min <= 40) {
    console.log("2-я треть часа");
  } else if (min > 40 && min < 60) {
    console.log("3-я треть часа");
  } else {
    console.log("некорректное значение минут");
  }
}

thirdHour(1); // 1
thirdHour(15); // 1
thirdHour(20); // 1
thirdHour(25); // 2
thirdHour(30); // 2
thirdHour(35); // 2
thirdHour(41); // 3
thirdHour(49); // 3
thirdHour(55); // 3
thirdHour(65);
