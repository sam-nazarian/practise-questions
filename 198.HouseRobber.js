// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const rob = function(nums) {
//     let max = -Infinity;
//
//     let loopCount = 0;
//     for(let i=0; i<nums.length; i+=2){
//         loopCount += nums[i];
//     }
//     max = Math.max(max, loopCount);
//
//     loopCount = 0;
//     for(let i=1; i<nums.length; i+=2){
//         loopCount += nums[i];
//     }
//     max = Math.max(max, loopCount)
//
//     return max;
// };


/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {

}
console.log( rob([1,2,3,1]))
console.log( rob([2,7,9,3,1]))