/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    console.log(nums)
    const finalArr = []

    for(let i=0; i<nums.length; i++){
        // finalArr[nums[i]] = nums[i];

        finalArr[i] = nums[nums[i]];
    }


    return finalArr;
};

console.log(buildArray([0,2,1,5,3,4]))