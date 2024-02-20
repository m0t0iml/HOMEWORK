/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let upperstr = str.toUpperCase();
    if ((upperstr.indexOf('1XBET') == -1) && (upperstr.indexOf('XXX') == -1)) {
        return false;
    }
    return true;

}

console.log(checkSpam('fff'));