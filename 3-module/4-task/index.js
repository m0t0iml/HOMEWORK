/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, age) {
  return users
    .filter(item => item.age <= age)
    .map(item => {
      item = `${item.name}, ${item.balance}`;
      return item;
    })
    .join('\n');
}
