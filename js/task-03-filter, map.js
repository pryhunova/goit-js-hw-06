// filter, map
// Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender).

// Используй деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
//     Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// Write code under this line

/*const users = [
  { name: 'Moore Hensley', gender: 'male' },
  { name: 'Ross Vazquez', gender: 'male' },
  { name: 'Carey Barr', gender: 'female' },
  { name: 'Blackburn Dotson', gender: 'male' },
];*/

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(({ name }) => name);

//console.log(getUsersWithGender(users, 'male'));
