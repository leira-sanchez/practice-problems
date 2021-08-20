/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) continue;
        map[nums[i]] = map[nums[i]] + 1 || 1;
     }

    for (let i = 1; i < nums.length + 1; i++) {
        if (!map[i]) return i;
    }

    return nums.length + 1;

};