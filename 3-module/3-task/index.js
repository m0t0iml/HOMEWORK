/**
 * @param {string} str
 * @returns {string}
 */

function camelize(str) {
  return str
    .split('-')
    .map((item, index, arr) => {
      if ((arr[index - 1] === '' && item !== '') || (item !== '' && index !== 0)) {
        item = item[0].toUpperCase() + item.slice(1);
        return item;
      }
      return item;
    })
    .join('');
}
