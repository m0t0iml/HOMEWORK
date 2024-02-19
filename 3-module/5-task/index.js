/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  let numbers = str
    .split(/\s|, */)
    .filter(item => {
      if (isFinite(item)) {
        return parseFloat(item);
      }
    });
  let result = {};
  result.min = Math.min(...numbers);
  result.max = Math.max(...numbers);
  return result;
}
