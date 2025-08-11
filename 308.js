// объявление переменных при деструктиризации объектов

let obj = {
  year: 2025,
  month: 12,
  day: 31,
};

let year, month, day;

// деструктуризациию обязательно брать в круглые скобки

({ year, month, day } = obj);
console.log(year);
console.log(month);
console.log(day);
