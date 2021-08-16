/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let midpoint;
    
    for (let i = 0; i < numbers.length; i++) {
        const aim = target - numbers[i];
        left = 0;
        right = numbers.length - 1;
        while (left <= right) {
            midpoint = left + Math.floor((right - left) / 2);
                // console.log({aim}, {midpoint}, numbers[midpoint])
            if (numbers[midpoint] === aim && i !== midpoint) {
                return [i + 1, midpoint + 1];
            } else if (numbers[midpoint] > aim) {
                right = midpoint - 1;
            } else {
                left = midpoint + 1;
            }
        }
    }
    // i = 1
    // aim = 75
    // midpoint =  
    // numbers[midpoint] = 75
    // left = 2
    // right = 2
};