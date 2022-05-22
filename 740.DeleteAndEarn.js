/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function(nums) {

    //nums[i] , [freq, sum, opportunityCost]
    const map = new Map();

    for(let i=0; i<nums.length; i++){

        if( !map.has(nums[i]) ) map.set(nums[i], [1,0,0]);
        else if( map.has(nums[i]) ) {
            const arr = map.get(nums[i]);//[0]+1 gets arr
            arr[0] += 1
            map.set(nums[i],arr);//[num, 0, 0]
        }
    }

    console.log(map)

};

deleteAndEarn([3,4,2,2])