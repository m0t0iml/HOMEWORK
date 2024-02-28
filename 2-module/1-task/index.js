/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    isPayed: false
  }

function sumSalary(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            sum += obj[key];
        }
    }
    return sum; 
}

console.log(sumSalary(salaries));


