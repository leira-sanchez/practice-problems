/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length < 2) return nums[0];
    let max = nums[0];
    let currSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        max = currSum > max ? currSum : max
        
        if(currSum < 0) {
            currSum = 0;
        }   
    }
    
    return max;
};

// var maxSubArray = function(nums) {
//   if(!nums) return 0;
//   if(nums.length < 2) return nums[0];
//   let prevHigh = nums[0];
//   let high = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     prevHigh = Math.max(nums[i], prevHigh + nums[i]);
//     high = Math.max(prevHigh, high);
//   }
//   return high;
// }