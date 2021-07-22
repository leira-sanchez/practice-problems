/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = [];
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = nums[i] || 1;
    }
    
    for (let i = 1; i < nums.length + 1; i++) {
        if (!map[i]) result.push(i);
    }
    return result;
};