/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const sqArr = nums.map(num => num * num);
    return sqArr.sort((a,b) => a - b);
};