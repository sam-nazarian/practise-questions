// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var subarraySum = function(nums, k) {
//
//     let count = 0;
//     for(let i=0; i<nums.length; i++){
//         let sum = nums[i];
//         if(sum === k) count++
//
//         for(let j=i+1; j<nums.length; j++){
//             sum += nums[j];
//             if(sum === k) count++
//         }
//     }
//
//     return count
// };

// console.log(subarraySum([1,1,1], 2)) //2
// console.log(subarraySum([1,2,3], 3)) //2


// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var subarraySum = function(nums, k) {
//
//     const sumMap = new Map();
//
//     let sum = 0;
//     let count = 0;
//     for(let i=0; i<nums.length; i++){
//       sum += nums[i];
//         console.log(sum)
//       if(sum === k) count++;
//     }
//
//     return count;
// };

// var subarraySum2 = function(nums, k) {
//     let map = new Map();
//     let sum = 0;
//     let count = 0;
//     map.set(0,1);
//     for (let i=0;i<nums.length;i++) {
//         sum += nums[i];
//         if (map.has(sum-k)) count += map.get(sum-k);
//         if (map.has(sum)) map.set(sum, map.get(sum)+1);
//         else map.set(sum, 1);
//     }
//
//     console.log(map)
//     return count;
// }

//k-sum = distance to sum
//sum-k =

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum2 = function(nums, k) {

    //sum : freq
    const map = new Map([[0,1]]);
    let count = 0;
    let sum = 0;

    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        const sumToFind = sum - k;


        if(map.has(sumToFind)) count += map.get(sumToFind);

        map.set(sum, (map.has(sum) ? map.get(sum) : 0) + 1)
    }

    return count;
}

console.log(subarraySum2([1, 2, 3], 3)) //2
// console.log(subarraySum2([1,-1,0], 0)) //3