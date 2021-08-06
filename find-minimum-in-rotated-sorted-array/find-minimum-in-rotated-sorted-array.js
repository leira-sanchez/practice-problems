/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//     let min = nums[0];
//     for(let i = 1; i < nums.length; i++) {
//         if(nums[i] < min) {
//             min = nums[i]
//         }
//     }
//     return min
// };

var findMin = function(nums) {
    // sort, then return first element
    return quickSort(nums)[0];
    
};

function quickSort(nums) {
  if (nums.length < 2) return nums;
  
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];
  
  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];

}