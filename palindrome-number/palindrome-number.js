/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const num = String(x);
    if(num[0] === "-") return false;
    
    let start = 0;
    let end = num.length - 1;
    
    while (start < end) {
        if(num[start] !== num[end]) return false;
        start++;
        end--;
    }
    return true;
    
};