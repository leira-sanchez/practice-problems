/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // return nums.length !== new Set(nums).size;
     let map = {};
    for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]]) return true;
      map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    }
    return false;
};