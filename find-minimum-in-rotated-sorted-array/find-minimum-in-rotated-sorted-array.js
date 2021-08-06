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

function findMin(nums) {
    if(nums.length < 1) return -1;
    if(nums.length === 1) return nums[0];
    
    let left = 0;
    let right = nums.length - 1;
    let midpoint;
    
    while (left < right) {
        midpoint = Math.floor((left + right)/2);
        if(midpoint > 0 && nums[midpoint] < nums[midpoint-1]) {
            return nums[midpoint];
        }
        if(nums[left] <= nums[midpoint] && nums[midpoint] > nums[right]) {
            // return nums[left];
            left = midpoint + 1;
            
        } else {
            right = midpoint - 1;
        }
    }
    return nums[left]
}