// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[][]}
//  */
// var findDifference = function (nums1, nums2) {
//   const differenceOne = [];

//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       //compare nums1[i] & nums2[j]

//       if (nums1[i] === nums2[j]) {
//         break;
//       }

//       if (nums1[i] !== nums2[j]) {
//         differenceOne.push(nums1[i]);
//       }
//     }
//   }

//   return differenceOne;
// };

// /*
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[][]}
//  */
//  var findDifference = function (nums1, nums2) {
//   let differentNums1 = [...nums1];
//   let differentNums2 = [...nums2];

//   nums1 = [...new Set(nums1)];
//   nums2 = [...new Set(nums2)];

//   const map = new Map();
//   for (let i = 0; i < nums2.length; i++) {
//     map.set(nums2[i], i);
//   }

//   for (let i = 0; i < nums1.length; i++) {
//     const indexOfSameValueInNums2 = map.get(nums1[i]);

//     if (indexOfSameValueInNums2 !== undefined) {
//       nums1.splice(i, 1);
//       i--;
//       nums2.splice(differentNums2, 1);
//     }
//   }

//   let final = [nums1, nums2];
//   return final;
// };
// */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let differentNums1 = [...nums1];
  let differentNums2 = [...nums2];

  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];

  const map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], i);
  }

  for (let i = 0; i < nums1.length; i++) {
    const indexOfSameValueInNums2 = map.get(nums1[i]);

    if (indexOfSameValueInNums2 !== undefined) {
      nums1.splice(i, 1);
      i--;
      delete nums2[indexOfSameValueInNums2];
      // nums2.splice(differentNums2, 1);
    }
  }

  // nums2.filter((num) => num.length >= 1);
  const x = nums2.filter(Number);

  let final = [nums1, x];
  return final;
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3], [1, 2]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
console.log(findDifference([80, 5, -20, 33, 26, 29], [-69, 0, -36, 52, -84, -34, -67, -100, 80]));

Input: [80, 5, -20, 33, 26, 29][(-69, 0, -36, 52, -84, -34, -67, -100, 80)];
Output: [
  [5, -20, 33, 26, 29],
  [-69, -36, 52, -84, -34, -67, -100],
];
Expected: [
  [33, -20, 5, 26, 29],
  [0, -34, -67, -36, -84, -100, -69, 52],
];
