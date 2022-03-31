/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //change last 3 elms of nums1 to nums2s

  for (let i = 0; i < n; i++) {
    nums1.pop();
  }

  const finalArr = [];

  let i = 0; //for nums1
  let j = 0; //for nums2
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      finalArr.push(nums1[i]);
      i++;
    } else {
      //if(nums1[i] > nums2[j])
      finalArr.push(nums2[j]);
      j++;
    }
    // console.log(i,j)
  }

  //now one of the arrays is done, we need to push rest of the array
  //since one is already done, we can saftely push rest of both
  while (i < nums1.length) {
    finalArr.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    finalArr.push(nums2[j]);
    j++;
  }

  console.log(finalArr);
  for (let i = 0; i < finalArr.length; i++) {
    nums1[i] = finalArr[i];
  }

  //     //starting from m we want to make changes
  //     for(let i=m; i< nums1.length; i++){
  //         nums1[i] = nums2[i-m];
  //     }

  //     const finalArr = nums1.sort(function(a,b){
  //         // return a.localeCompare(b); //only available on strings, not numbers
  //         return a-b;
  //     });

  //     for(let i=0; i<finalArr.length; i++){
  //         finalArr[i] = nums1[i];
  //     }
};

//below works but is abit innefficient
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//     //change last 3 elms of nums1 to nums2s

//     //starting from m we want to make changes
//     for(let i=m; i< nums1.length; i++){
//         nums1[i] = nums2[i-m];
//     }

//     const finalArr = nums1.sort(function(a,b){
//         // return a.localeCompare(b); //only available on strings, not numbers
//         return a-b;
//     });

//     for(let i=0; i<finalArr.length; i++){
//         finalArr[i] = nums1[i];
//     }

// };

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//     // nums1[1] = 222;
//     const finalArr = nums1.concat(nums2);

//     for(let i=0; i< finalArr.length; i++){
//         if(finalArr[i] === 0){
//             finalArr.splice(i,1);
//             i--;
//             // delete finalArr[i]
//         }
//     }

//     finalArr.sort();
//     console.log('finalArr', finalArr);

//     for(let i=0; i< nums1.length; i++){
//         nums1[i] = finalArr[i]
//     }
//     console.log(nums1);

//     //go through every elmt in nums1

// };
