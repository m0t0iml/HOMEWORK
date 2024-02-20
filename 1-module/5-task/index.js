/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
    let mainstr;
    let lengthstr = str.length;
    if (lengthstr > maxlength) {
        mainstr = str.slice(0, maxlength-1) + "…";
        return mainstr;
    }
    return str;
}

console.log(truncate('ahrhhaharqeh', 5));
