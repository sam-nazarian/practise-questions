// /**
//  * Works but is unnecessarily too long
//  * @param {number[]} nums
//  * @return {string[]}
//  */
// var summaryRanges = function(nums) {
//
//     if(nums.length === 1) {
//         nums[0] = String(nums[0]);
//         return nums;
//     }
//
//     let startChar = nums[0];
//     let finalArr = [];
//
//     for(let i=1; i<nums.length; i++){
//         const diff = nums[i] - nums[i-1];
//         console.log(diff)
//
//         if(diff !== 1){
//             console.log('fs')
//
//             if(startChar === nums[i-1]) {
//                 finalArr.push(`${startChar}`)
//                 startChar = nums[i];
//                 // continue;
//             }else {
//                 finalArr.push(`${startChar}->${nums[i - 1]}`);
//                 startChar = nums[i];
//             }
//         }
//
//         //SINCE ONE MORE COMPARISON NEEDS TO BE DONE IN EITHER WAY THEN, START i=0 (prev) and compare curr to next(i+1)
//         //this will ensure one comparison since at the end we compare prev to undefined(value of i+1) when prev is pointing to last index
//         if(i=== nums.length-1){
//
//             if(startChar === nums[i]) {
//                 finalArr.push(`${startChar}`)
//                 continue;
//             }
//
//             finalArr.push(`${startChar}->${nums[i]}`);
//         }
//
//     }
//
//     // console.log(finalArr)
//
//     // return finalArr.join('')
//
//     return finalArr
//
// };

// console.log(summaryRanges([0,1,2,4,5,7]))
// console.log(summaryRanges([0,2,3,4,6,8,9]))
// console.log(summaryRanges([1]))
// console.log(summaryRanges([1,3]))



// /**
//  * @param {number[]} nums
//  * @return {string[]}
//  */
// var summaryRanges2 = function(nums) {
//
//     const finalArr = [];
//     for(let i=0, startVal=nums[0]; i<nums.length; i++){
//
//         if(nums[i]+1 !== nums[i+1]){
//
//             finalArr.push(startVal !== nums[i] ? `${startVal}->${nums[i]}` : `${startVal}`);
//             startVal = nums[i+1];
//         }
//
//     }
//
//     return finalArr;
// }
//
// console.log(summaryRanges2([0,1,2,4,5,7]))


/**
 * Works but is unnecessarily too long
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges3 = function(nums) {

    if(nums.length === 1) {
        nums[0] = String(nums[0]);
        return nums;
    }

    let startChar = nums[0];
    let finalArr = [];

    for(let i=1; i<nums.length+1; i++){
        const diff = nums[i] - nums[i-1];
        console.log(diff)

        if(diff !== 1){
            if(startChar === nums[i-1]) {
                finalArr.push(`${startChar}`)
                startChar = nums[i];
                // continue;
            }else {
                finalArr.push(`${startChar}->${nums[i - 1]}`);
                startChar = nums[i];
            }
        }

    }

    // console.log(finalArr)
    // return finalArr.join('')

    return finalArr
};

console.log(summaryRanges3([0,1,2,4,5,7]))
// console.log(summaryRanges3([0,2,3,4,6,8,9]))
// console.log(summaryRanges3([1]))
// console.log(summaryRanges3([1,3]))

// /**
//  * @param {number[]} nums
//  * @return {string[]}
//  */
// var summaryRanges2 = function(nums) {
//     var res = [];
//     for (var i = 0, left = nums[0]; i < nums.length; i++) {
//         if (nums[i] + 1 !== nums[i + 1]) {
//             res.push(left === nums[i] ? '' + nums[i] : left + '->' + nums[i]);
//             left = nums[i + 1];
//         }
//     }
//     return res;
// }
//
// console.log([0,1,2,4,5,7]);



// const curr = nums[i];
// const prev = nums[i-1];




// /**
//  * @param {number[]} nums
//  * @return {string[]}
//  */
// var summaryRanges = function(nums) {
//
//
//     let startChar = nums[0];
//     let finalArr = [];
//
//     for(let i=1; i<nums.length; i++){
//         const diff = nums[i] - nums[i-1];
//         console.log(diff)
//
//         if(diff !== 1){
//
//             if(startChar === nums[i-1]) {
//                 finalArr.push(`\"${startChar}\"`)
//                 startChar = nums[i];
//                 continue;
//             }
//
//             finalArr.push(`${startChar}=>${nums[i-1]}`);
//             startChar = nums[i];
//         }
//
//         if(i=== nums.length-1){
//
//             if(startChar === nums[i]) {
//                 finalArr.push(`\"${startChar}\"`)
//                 continue;
//             }
//
//             finalArr.push(`${startChar}=>${nums[i]}`);
//         }
//
//     }
//
//     console.log(finalArr)
//
// };

// /**
//  * @param {number[]} nums
//  * @return {string[]}
//  */
// var summaryRanges = function(nums) {
//
//
//     let startChar = nums[0];
//     let finalArr = [];
//
//     for(let i=1; i<nums.length; i++){
//         const diff = nums[i] - nums[i-1];
//         console.log(diff)
//
//         if(diff !== 1){
//             finalArr.push(`${startChar}=>${nums[i-1]}`);
//             startChar = nums[i];
//         }
//
//         if(i=== nums.length-1){
//             finalArr.push(`${startChar}=>${nums[i]}`);
//         }
//
//     }
//
//     console.log(finalArr)
//
// };