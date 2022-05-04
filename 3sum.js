// /**
//  * works but O(n^3)
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//
//     let finalArr = [];
//
//     for(let i=0; i<nums.length; i++){
//
//         for(let j=i+1; j<nums.length; j++){
//
//             for(let k=j+1; k<nums.length; k++){
//
//                 if(nums[i] + nums[j] + nums[k] === 0){
//                     finalArr.push([nums[i],nums[j],nums[k]])
//                 }
//
//             }
//         }
//     }
//
//     // console.log(finalArr)
//     for(let i=0; i<finalArr.length; i++){
//         finalArr[i].sort();
//     }
//
//     for(let i=0; i<finalArr.length; i++){
//         finalArr[i] = JSON.stringify(finalArr[i])
//     }
//     // console.log(finalArr)
//
//     finalArr = Array.from( new Set([...finalArr]), JSON.parse)
//     // console.log(finalArr)
//     return finalArr;
// };

// threeSum([-1,0,1,2,-1,-4])

// /**
//  * kinda works, O(n^2) but extra unnecessary sorting and set was made * @param {number[]} nums
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum2 = function(nums) {
//
//     const freqMap = new Map();
//     let finalArr = [];
//
//     for(let i=0; i<nums.length; i++){
//         freqMap.set(nums[i], (freqMap.has(nums[i]) ? freqMap.get(nums[i]) : 0) + 1 )
//     }
//     // console.log(freqMap)
//
//
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             const sum = nums[i] + nums[j];
//             const complement = 0 - sum;
//
//             if(freqMap.has(complement)){
//
//                 if((complement === nums[i] || complement === nums[j]) && freqMap.get(complement) < 2) break;
//                 if(complement === nums[i] && complement === nums[j] && freqMap.get(complement) < 3) break;
//
//                 finalArr.push([nums[i],nums[j], complement])
//             }
//         }
//     }
//
//     for(let i=0; i<finalArr.length; i++){
//         finalArr[i].sort();
//     }
//     for(let i=0; i<finalArr.length; i++){
//         finalArr[i] = JSON.stringify(finalArr[i]);
//     }
//
//     finalArr = Array.from( new Set([...finalArr]), JSON.parse)
//
//     return finalArr;
// };
//
// console.log(threeSum2([-1,0,1,2,-1,-4]))
// console.log(threeSum2([0,0]))


/**
 * O(n^2) this is the best possible solution
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum3 = function(nums) {
    const finalArr = [];

    //IMPORTANT: sort() alone sorts negative numbers & positive numbers separately (sort both in asc order, but sorts them separately)
    nums.sort((a, b) => a - b); //changes original array

    for(let i=0; i<nums.length; i++){
        if(i>0 && nums[i] === nums[i-1]) continue; //only compare to prev if i>0
        let l=i+1;
        let r=nums.length-1;
        while(l<r){
            // console.log('l:',l,'r:',r)
            const sum = nums[i] + nums[l] + nums[r];

            if(sum === 0) {
                finalArr.push([nums[i], nums[l], nums[r]]);

                while (nums[l] === nums[l + 1]) l++
                while (nums[r] === nums[r - 1]) r--
                l++
                r--
                // break; //since num of the idxs i,l,r can be same we go to next iteration with a different i
            }else if(sum<0) l++;
            else if(sum>0) r--;
        }
        // while(nums[i+1] === nums[i]) i++;
    }

    return finalArr
}

// console.log(threeSum3([-1,0,1,2,-1,-4])) //[[-1,-1,2], [-1,0,1]]
// console.log(threeSum3([-2,0,0,2,2])) //[[-2,0,2]]
console.log(threeSum3([-2,0,0,1,1,2,2])) //[[-2,0,2]]


// function threeSum(nums) {
//     const results = []
//
//     if (nums.length < 3) return results
//     nums = nums.sort((a, b) => a - b)
//
//     let target = 0
//
//     for (let i = 0; i < nums.length - 2; i++) {
//         // `i` represents the "left" most number in our sorted set.
//         // once this number hits 0, there's no need to go further since
//         // positive numbers cannot sum to a negative number
//         if (nums[i] > target) break
//
//         // we don't want repeats, so skip numbers we've already seen
//         if (i > 0 && nums[i] === nums[i - 1]) continue //SMART TO PUT I>0 SO THAT WE DON'T COMPARE TO UNDFINED
//
//         // `j` represents the "middle" element between `i` and `k`.
//         // we will increment this up through the array while `i` and `k`
//         // are anchored to their positions. we will decrement `k` for
//         // for each pass through the array, and finally increment `i`
//         // once `j` and `k` meet.
//         let j = i + 1
//
//         // `k` represents the "right" most element
//         let k = nums.length - 1
//
//         // to summarize our setup, we have `i` that starts at the beginning,
//         // `k` that starts at the end, and `j` that races in between the two.
//         //
//         // note that `i` is controlled by our outer for-loop and will move the slowest.
//         // in the meantime, `j` and `k` will take turns inching towards each other depending
//         // on some logic we'll set up below. once they collide, `i` will be incremented up
//         // and we'll repeat the process.
//
//         while (j < k) {
//             let sum = nums[i] + nums[j] + nums[k]
//
//             // if we find the target sum, increment `j` and decrement `k` for
//             // other potential combos where `i` is the anchor
//             if (sum === target) {
//                 // store the valid threesum
//                 results.push([nums[i], nums[j], nums[k]])
//
//                 // this is important! we need to continue to increment `j` and decrement `k`
//                 // as long as those values are duplicated. in other words, we wanna skip values
//                 // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
//                 // [[-2,0,2], [-2,0,2]].
//                 //
//                 // (i'm not a fan of this part because we're doing a while loop as we're
//                 // already inside of another while loop...)
//                 while (nums[j] === nums[j + 1]) j++
//                 while (nums[k] === nums[k - 1]) k--
//
//                 // finally, we need to actually move `j` forward and `k` backward to the
//                 // next unique elements. the previous while loops will not handle this.
//                 j++
//                 k--
//
//                 // if the sum is too small, increment `j` to get closer to the target
//             } else if (sum < target) {
//                 j++
//
//                 // if the sum is too large, decrement `k` to get closer to the target
//             } else { // (sum > target)
//                 k--
//             }
//         }
//     }
//
//     return results
// };
//
// console.log(threeSum([-1,0,1,2,-1,-4]))


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const lastVal = finalArr[finalArr.length-1]
// finalArr.push(lastVal)

// const x = JSON.stringify(finalArr) //JSON.stringify does not change original object

// console.log(JSON.stringify(finalArr))

// for(let i=0; i<finalArr.length; i++){
//    finalArr[i] += '3';
// }

// console.log(finalArr)

// const set = new Set([...finalArr])
// console.log(set)


// const set = new Set([...nums]) //removes duplicate elms
// let uniqueArr = [...set]; //... works on all iterable objects