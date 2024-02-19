/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
'usestrict'
function factorial(n) {
    let  f = 1;
    for (let i = 1; i < n+1; i++) {
        f = f * i;
    }
    return f;
}
console.log(factorial(5));