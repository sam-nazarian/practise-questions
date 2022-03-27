/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map(); //{value: index}

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      //if nuber already exists/was already added to map
      return true;
    }

    map.set(nums[i], i);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
