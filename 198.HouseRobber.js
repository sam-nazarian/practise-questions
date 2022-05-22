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


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const rob = function(nums) {
//
//     let max = -Infinity;
//
//     dfs([], nums, 0)
//     function dfs(res, remainArr, currCount){
//         if(remainArr.length === 0){
//             // console.log(currCount)
//             max = Math.max(max, currCount)
//             return;
//         }
//
//         for(let i=0; i<remainArr.length; i++){
//             //remove adj elm of push
//             const newRemainArr = [];
//             for(let j=0; j<remainArr.length; j++){
//                 if(j === i) continue; //avoid any adjacent elms
//                 if(j === i-1) continue;
//                 if(j === i+1) continue;
//                 newRemainArr.push(remainArr[j])
//             }
//
//             res.push(remainArr[i])
//             //don't need res arr, as we only need count
//             // console.log(res)
//             dfs(res, newRemainArr, currCount+remainArr[i])
//             res.pop();
//         }
//     }
//
//     return max;
// }




// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const rob = function(nums) {
//
//     //base cases
//     if (!nums.length) return 0;
//     if (nums.length === 1) return nums[0];
//     if (nums.length === 2) return Math.max(nums[0], nums[1]);
//
//     let maxAtTwoBefore = nums[0];
//     let maxAtOneBefore = Math.max(nums[0], nums[1]);
//
//     for (let i = 2; i < nums.length; i++) {
//         const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
//
//         maxAtTwoBefore = maxAtOneBefore;
//         maxAtOneBefore = maxAtCurrent;
//     }
//
//     return maxAtOneBefore;
// };


// const rob = function(nums) {
//
//     if(nums.length === 0) return 0;
//     if(nums.length === 1) return nums[0];
//     let totals = [nums[0], Math.max(nums[0], nums[1])];
//
//     for(let i = 2; i < nums.length; i ++){
//         totals[i] = Math.max(totals[i - 1], totals[i - 2] + nums[i]); //an arr that updates, with the max val that we could have so far
//     }
//
//     console.log(totals)
//
//     return totals[totals.length - 1];
// };









// const rob = function(nums) {
//     if(nums.length === 1) return nums[0];
//     // if(nums.length === 1) return max();
//
//     let total = [ nums[0], Math.max(nums[0], nums[1]) ];
//     for(let i=2; i<nums.length; i++){
//         total[i] = Math.max(total[i-2]+nums[i], total[i-1] );
//     }
//
//     return total[total.length-1]
// };
console.log( rob([2,1,1,2,7,4]))

// console.log( rob([1,2,3,4,5,6,7]))
// console.log( rob([2,11,7,3,4,5,6]))
// console.log( rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]))
// console.log( rob([1,2,3,1]))
// console.log( rob([2,7,9,3,1]))