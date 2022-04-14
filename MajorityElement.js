/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //num : freq
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    //in every case we want to add 1, and set nums[i]
    map.set(nums[i], (map.has(nums[i]) ? map.get(nums[i]) : 0) + 1);
  }

  let largestVal = -Infinity;
  let largestKey = -1;
  for (const [key, val] of map.entries()) {
    if (val > largestVal) {
      largestVal = val;
      largestKey = key;
    }
  }

  return largestKey;
};

console.log(majorityElement([3, 2, 3]));

//learn Boyer Moore Majority Vote Algorithm
