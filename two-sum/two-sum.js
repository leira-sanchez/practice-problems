/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//brute force
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target && i !== j) {
//                 return [i, j]
//             }
//         }
//     }
// };

// use memoization
// var twoSum = function(nums, target) {
//     const memo = {};
//     for (let i = 0; i < nums.length; i++) {
//         const m = target - nums[i];
//         if (memo.hasOwnProperty(m)) return [i, memo[m]]
//         else memo[nums[i]] = i
//     }
// }

var twoSum = function(nums, target) {
    const sortedArr = [...nums].sort((a, b) => a -b);
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        if (sortedArr[left] + sortedArr[right] === target) {
            return [nums.indexOf(sortedArr[left]), nums.lastIndexOf(sortedArr[right])];
        }
        else if (sortedArr[left] + sortedArr[right] > target) right--;
        else left++;
    }
}






