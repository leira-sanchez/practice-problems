/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(str1, str2) {
     if (str1.length !== str2.length) return false;

    let frequency1 = {};
    let frequency2 = {};

    for (let val of str1) {
        frequency1[val] = frequency1[val] + 1 || 1;
    }

    for (let val of str2) {
        frequency2[val] = frequency2[val] + 1 || 1;
    }

    for (let key in frequency1) {
        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }
    return true;
};