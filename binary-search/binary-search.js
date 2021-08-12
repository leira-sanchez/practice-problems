/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1;
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    
    let left = 0;
    let right = nums.length - 1;
    let midpoint = left + Math.floor((right - left + 1) / 2);
    
    while (left <= right) {
        midpoint = left +  Math.floor((right - left + 1) / 2);
        if (nums[midpoint] === target) return midpoint;
        if (nums[midpoint] < target) left = midpoint + 1;
        if (nums[midpoint] > target) right = midpoint - 1;
    }
    return -1;
};