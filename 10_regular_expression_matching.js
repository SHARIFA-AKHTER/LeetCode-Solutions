/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = {};

    function dp(i, j) {

        const key = `${i},${j}`;
        if (key in memo) return memo[key];

        if (j === p.length) {
            return i === s.length;
        }

        const firstMatch = (i < s.length && (p[j] === s[i] || p[j] === '.'));

        let result;

        if (j + 1 < p.length && p[j + 1] === '*') {
     
            result = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
        } else {

            result = firstMatch && dp(i + 1, j + 1);
        }
        memo[key] = result;
        return result;
    }

    return dp(0, 0);
};