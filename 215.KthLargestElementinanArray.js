/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a,b) => b-a)

    return nums[k]
};

findKthLargest([3,2,1,5,6,4],2)


// console.log(nums)
// console.log(nums[k])

// console.log(nums)
// console.log(k)