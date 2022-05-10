/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // nums[i]/char : [freq, idx]
    const map = new Map(); //no need for freq, because without freq we would still know if the elm/nums[i] happened before in the hashMap

    for(let i=0; i<nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], [1, i]);
        }
        else if(map.has(nums[i])){
            const arr = map.get(nums[i]);
            const diff = Math.abs(arr[1] - i);
            if(diff<=k) return true;

            //update idx & freq
            arr[0] += 1; //arr[0] + 1; //updating freq
            arr[1] = i;
            map.set(nums[i], arr);
        }
    }

    return false;
};


console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))