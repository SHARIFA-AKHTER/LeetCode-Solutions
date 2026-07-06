/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // Define 32-bit signed integer boundaries
    const INT_MIN = -Math.pow(2, 31);      // -2147483648
    const INT_MAX = Math.pow(2, 31) - 1;   //  2147483647
    
    let i = 0;
    const n = s.length;
    
    // Step 1: Skip leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }
    
    // Step 2: Check for sign
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        if (s[i] === '-') {
            sign = -1;
        }
        i++;
    }
    
    // Step 3: Convert digits and handle clamping
    let res = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';
        
        // Check for 32-bit overflow/underflow before modifying res
        if (res > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        res = res * 10 + digit;
        i++;
    }
    
    return res * sign;
};