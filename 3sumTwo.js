// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     const result = [];
//
//     for(let i = 0; i < nums.length; i++) {
//         let low = i+1, high = nums.length-1, sum = 0;
//
//         while(low < high) {
//             sum = nums[i] + nums[low] + nums[high];
//
//             if(sum === 0) {
//                 result.push([nums[i], nums[low], nums[high]]);
//                 while(nums[low+1] === nums[low]) low++;
//                 while(nums[high-1] === nums[high]) high--;
//                 low++;
//                 high--;
//             } else if(sum < 0) low++;
//             else high--;
//         }
//         while(nums[i+1] === nums[i]) i++;
//     }
//     return result;
// };
//
// console.log(threeSum([-1,0,1,2,-1,-4]))


//if you just do arr.sort() it will sort the negative nums in desc & posetive numbers in asc
const arr = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
arr.sort()
console.log(arr)
// [
//   -1, -1, -2, -3, -4,
//    0,  0,  1,  2,  3,
//    4
// ]

console.log('///////////////////////////////')

const arr2 = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
arr2.sort((a,b) => a-b)
console.log(arr2)
// [
// -4, -3, -2, -1, -1,
//     0,  0,  1,  2,  3,
//     4
// ]
