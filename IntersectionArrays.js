/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//
//   const map = new Map();
//   const finalArr = [];
//
//
//   for (let i = 0; i < nums1.length; i++) {
//     //add elm to map if it doesn't already exist
//     if (map.has(nums1[i])) continue;
//     map.set(nums1[i], 0);
//   }
//
//
//   for(let i=0; i<nums2.length; i++){
//     if(map.has(nums2[i]) && map.get(nums2[i]) === 0){
//       map.set(nums2[i], 1);
//       finalArr.push(nums2[i]);
//     }
//   }
//
//   // console.log()
//   return finalArr
// };

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersection = function (nums1, nums2) {

//   const set1 = new Set(nums1);
//   const set2 = new Set();

//   for(let i=0; i<nums2.length; i++){
//     if(set1.has(nums2[i])) set2.add(nums2[i]);
//   }

//   // console.log(set2)

//   return [... set2]

// };

// const nums1 = [1,2,2,1];
// const nums2 = [2,2]
// console.log(intersection(nums1, nums2 ))

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//
//   const map = new Map();
//   const finalArr = [];
//
//
//   for (let i = 0; i < nums1.length; i++) {
//     //add elm to map if it doesn't already exist
//     if (map.has(nums1[i])) continue;
//     map.set(nums1[i], 0);
//   }
//
//
//   for(let i=0; i<nums2.length; i++){
//     if(map.has(nums2[i]) && map.get(nums2[i]) === 0){
//       map.set(nums2[i], 1);
//       finalArr.push(nums2[i]);
//     }
//   }
//
//   // console.log()
//   return finalArr
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) set2.add(nums2[i]);
  }

  // console.log(set2)

  return [...set2];
};

const nums1 = [1, 2, 2, 1,3];
const nums2 = [2, 3,2];
console.log(intersection(nums1, nums2));
