/**
 * @param {number[]} nums
 * @return {number}
 */
const minMaxGame = function (nums) {
    // console.log(nums)
    //
    while (nums.length > 1) {

        const newNums = [];
        let minOrMax = 'min';
        for (let i = 0; i < nums.length; i += 2) {
            if (minOrMax === 'min') newNums.push(Math.min(nums[i], nums[i + 1]));
            if (minOrMax === 'max') newNums.push(Math.max(nums[i], nums[i + 1]));

            minOrMax = minOrMax === 'max' ? 'min' : 'max';
        }
        nums = newNums;
    }

    // console.log(nums)
    return nums[0]
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]))
console.log(minMaxGame([3]))