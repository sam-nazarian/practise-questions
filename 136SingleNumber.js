// /**
//  * works but spacing is not efficient
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//
//     const freqMap = new Map();
//     // const indexMap = new Map();
//     for(let i=0; i<nums.length; i++){
//         //first time happened set to 0 otherwise add 1
//         freqMap.set(nums[i], (freqMap.has(nums[i]) ? freqMap.get(nums[i]) : 0) + 1 );
//     }
//
//     console.log(freqMap)
//
//     for(const [num,freq] of freqMap.entries()){
//         if(freq === 1) return num;
//     }
//
//     // console.log(singleNumber)
//     // return nums.indexOf(singleNumber)
//
// };

// console.log(singleNumber([2,2,1]))



/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer;
    for(let i=0; i<nums.length; i++){
        answer ^= nums[i];
        //Xor
    }

    return answer;
};
console.log(singleNumber([4,1,2,1,2]))