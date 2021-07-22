/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[i] > 0 ? map[i]++ : 1;
    }
    
    for (let i = 0; i < nums.length + 1; i++) {
        if (!map[i]) return i;
    }
    
};