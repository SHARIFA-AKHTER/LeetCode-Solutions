/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;

    const sign = x < 0 ? -1 : 1;

    let num = Math.abs(x);

while (num > 0) {
    const lastDight = num % 10;
    reversed = (reversed * 10) + lastDight;

    num = Math.floor(num / 10);
}
reversed = reversed *sign;
const MIN_INT = Math.pow(-2, 31);
    const MAX_INT = Math.pow(2, 31) - 1;

    if (reversed < MIN_INT || reversed > MAX_INT) {
        return 0;
    }
    return reversed;
};