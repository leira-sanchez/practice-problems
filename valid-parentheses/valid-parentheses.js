/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
            console.log(s[i])
            if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
                stack.push(s[i]);
            } else if (stack.length === 0) {
              return false;
            } else if (s[i] ===  ")" && (stack[stack.length - 1] === "(")) {
                console.log("here")
                stack.pop();
            } else if (s[i] ===  "}" && (stack[stack.length - 1] === "{")) {
                stack.pop();
            } else if (s[i] ===  "]" && (stack[stack.length - 1] === "[")) {
                console.log("hello")
                stack.pop();
            } else {
                break;
            }

    }
    return stack.length === 0;
};