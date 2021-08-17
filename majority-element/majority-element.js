/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     const counts = {};
//     nums.forEach(num => {
//         counts[num] = counts[num] ? counts[num] + 1 : 1
//     })
//     let max = 0;
//     let maxKey;
//     for (const [key, value] of Object.entries(counts)) {
//         if(value > max) {
//             max = value;
//             maxKey = key;
//         }
//     }
//     return maxKey;
// };

var majorityElement = function(nums) {
    const majority = nums.length/2;
    const count = {};
    
    let max = 0;
    let maxKey = 0;
    
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = count[nums[i]] + 1 || 1;
        if (count[nums[i]] > max) {
            max = count[nums[i]];
            maxKey = nums[i];
        }
    }
    return maxKey;
    
    
    
};