/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    const result = [];
    
    if (a < 0 && b < 0) {
        for (let i = 0; i > a; i--) {
            result.push('a');
        }
        
        for (let i = 0; i > b; i--) {
            result.push('b');
        }
        return (result.length * -1);
    } else if (a < 0 && b > 0) {
        for (let i = 0; i < b; i++) {
            result.push('b');
        }
        
        for (let i = 0; i > a; i--) {
            result.pop();
        }
    } else if (a > 0 && b < 0) {
        for (let i = 0; i < a; i++) {
            result.push('a');
        }
        
        for (let i = 0; i > b; i--) {
            result.pop();
        }
        
    } else {
        for (let i = 0; i < a; i++) {
            result.push('a');
        }
        
        for (let i = 0; i < b; i++) {
            result.push('b');
        }
    }
    return result.length;
};