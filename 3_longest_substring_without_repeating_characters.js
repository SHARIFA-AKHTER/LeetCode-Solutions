/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let Left = 0;
    let maxLength = 0;

for (let right = 0; right < s.length; right++){

    while (charSet.has(s[right])){
        charSet.delete(s[Left ]);
        Left++
    }
    charSet.add(s[right]);
   maxLength = Math.max(maxLength, right - Left + 1);
}
return maxLength;
};