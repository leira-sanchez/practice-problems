/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
// 88 ms
//     const map = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         map[nums[i]] = map[i] > 0 ? map[i]++ : 1;
//     }
    
//     for (let i = 0; i < nums.length + 1; i++) {
//         if (!map[i]) return i;
//     }
    
// };

var missingNumber = function(nums) {
    nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
    return nums.length;
};