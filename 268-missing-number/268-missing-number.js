/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // order them
    // go one by one and figure out if it's equal to the previous one plus 1
    const ordered = nums.sort((a,b) => a - b);
    for (let i = 1; i < ordered.length; i++) {
        if (ordered[i] !== ordered[i - 1] + 1) return ordered[i - 1] + 1;
    }
    if (ordered[0] > 0) return ordered[0]-1;
    return ordered[ordered.length - 1] + 1;
};