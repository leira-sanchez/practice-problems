/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return helper(S) === helper(T);
};

const helper = (str) => {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        str[i] === "#" ? result.pop() : result.push(str[i]);
    }
    return result.join("");
}