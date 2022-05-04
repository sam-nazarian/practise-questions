// /**
//  * O(n^2) the brute-force way
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = function(nums, target) {
//
//     let finalArr;
//
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<=nums.length; j++){
//             if(nums[i] + nums[j] === target) finalArr = [i+1,j+1]
//         }
//     }
//
//     return finalArr;
// };
//
//
// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([2,3,4], 6))
// console.log(twoSum([-1,0], -1))



// /**
//  * O(n) the fast-way But O(n) space complexity
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = function(nums, target) {
//
//     //nums[i] : idx+1 //+1 makes it 1-based, instead of 0 based
//     const map = new Map();
//     for (let i=0; i<nums.length; i++) {
//         map.set(nums[i], i+1);//sets, key : val
//     }
//
//     for(let i=0; i<nums.length; i++){
//         const complement = target - nums[i];
//          if(map.has(complement)){
//              return [i+1, map.get(complement)]; //+1 to make it 1-based
//          }
//     }
// };
//
// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([2,3,4], 6))
// console.log(twoSum([-1,0], -1))

// map.set(nums[i], (map.has(nums[i]) ? map.get(nums[i]) : 1) + 1); //this is for freq, NOT IDX


/**
 * O(n) the fast-way | O(n) space-complexity
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

    let i = 0;
    let j = nums.length - 1;
    while(i<j){
        const sum = nums[i] + nums[j];
        if(sum === target) return [i+1, j+1];

        if(sum>target){
            //we want sum to be smaller
            j--;
        }

        if(sum<target){
            //we want sum to be larger
            i++;
        }
    }

    return -1; //number was not found, (should never happen as question said there's exactly one solution)
};

console.log(twoSum([0,1,2,4,5,10,12], 9))
