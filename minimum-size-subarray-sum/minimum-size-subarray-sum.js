/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if (nums.length < 2 && nums[0] >= target) return nums[0];
    if (nums.indexOf(target) >= 0) return 1;
    
    let left = 0;
    let minSize = Infinity;
    let currSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        
        while (currSum >= target) {
            minSize = Math.min(minSize, i + 1 - left);
            currSum -= nums[left];
            left++;
        }
    }
    
    return minSize != Infinity ? minSize : 0;
};