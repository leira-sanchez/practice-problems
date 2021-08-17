/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function(nums) {
//     const counts = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         if (counts[nums[i]]) {
//             return nums[i];
//         } else {
//             counts[nums[i]] = 1;
//         }
//     }
// };

var findDuplicate = function(nums) {
    nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) return nums[i];
    }
};