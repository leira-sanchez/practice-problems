/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
//     const counts = {};
//     const result = [];
    
//     for (let i = 0; i < nums.length; i++) {
//         if (counts[nums[i]]) {
//             counts[nums] = counts[nums[i]] + 1;
//             result.push(nums[i]);
//         } else {
//             counts[nums[i]] = 1;
//         }
//     }
//     return result;
// };

var findDuplicates = function(nums) {
    const result = [];
    let otherIndex;
    
    for (let i = 0; i < nums.length; i++) {
        otherIndex = Math.abs(nums[i]) - 1;
        
        if (nums[otherIndex] > 0) {
            nums[otherIndex] *= -1;
        } else {
            result.push(Math.abs(nums[i]));
        }
    }
    return result;
};