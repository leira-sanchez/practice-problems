/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(str1, str2) {
    if (str1.length !== str2.length) return false;

    let frequency = {};

    for (let val of str1) {
        frequency[val] = frequency[val] ? frequency[val] + 1 : 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (!frequency[str2[i]]) return false;
        else frequency[str2[i]] -= 1;
    }
    return true;
};