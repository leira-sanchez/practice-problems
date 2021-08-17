/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let left = 0;
    let right = 1;
    const counts = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (counts[nums[i]]) {
            return nums[i];
        } else {
            counts[nums[i]] = 1;
        }
    }
};