/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {

    //nums[i] : idx
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        map.set(nums[i],i);
    }

    // console.log(map)

    //problem is map needs to be updated
    for(let i=0; i<operations.length; i++){
        const idx = map.get(operations[i][0]); //getting idx to replace

        //update the map with new vals
        map.delete(operations[i][0]);
        map.set(operations[i][1], idx)

        nums[idx] = operations[i][1];
    }

    // console.log(nums)

    return nums
};

console.log(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]]))

console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]]))