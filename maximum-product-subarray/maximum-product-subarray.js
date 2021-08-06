// https://leetcode.com/problems/maximum-product-subarray/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length < 2) return nums[0];
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let prevMin = min;
        min = Math.min(nums[i], prevMin * nums[i], nums[i] * max)
        max = Math.max(nums[i], prevMin * nums[i], nums[i] * max);

        prevMin = min;
        result = Math.max(result, max)
    }
    return result;
};