/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1)return "";
    let start =0;
    let end = 0;
function expandAroundCenter(left, right){
    while (left >= 0 && right < s.length && s[left] ===s[right]){
        left--;
        right++;
    }
    return right -left;

}
for (let i = 0; i <s.length; i++){
    let len1 =  expandAroundCenter(i, i)
    let len2 =  expandAroundCenter(i, i + 1);
    let maxLength = Math.max(len1,len2);

if (maxLength > (end - start)) {
            start = i - Math.floor((maxLength - 1) / 2);
            end = i + Math.floor(maxLength / 2);
        }

}

return s.substring(start, end + 1);
};