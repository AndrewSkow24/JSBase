/* Создайте объект user с ключами 'name', 'surname',
'patronymic' и какими-то произвольными значениями. 
Выведите на экран фамилию, имя и отчество через пробел. */

const user = {
  name: "Иван",
  patronymic: "Иванович",
  surname: "Иванов",
};

console.log(`${user["surname"]} ${user["name"]} ${user["patronymic"]}`);
