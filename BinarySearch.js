//RECURSIVE WORKS 👇✅
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const start = 0;
  const end = nums.length - 1;

  //keep track of start & end & dynamically update them, thus in parameter
  //we get middleValue from start & end, so no need to store it in parameter
  return binarySearch(nums, target, start, end);
};

const binarySearch = function (nums, target, start, end) {
  if (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);
    const middleValue = nums[middleIndex];

    if (middleValue === target) {
      return middleIndex;
    }

    if (middleValue < target) {
      return binarySearch(nums, target, middleIndex + 1, end); //recursive make tree like structure, goes down until there's a return then goes up when return is found
    }

    if (middleValue > target) {
      return binarySearch(nums, target, start, middleIndex - 1); //recursive make tree like structure, goes down until there's a return then goes up when return is found
    }
  }

  return -1;
};

//below below works👇😃 but code could be refractord into 2 functions, for better clearality
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target, start = 0, end = nums.length-1) { //no need for middleIndex here
//     //keep track of start & end & dynamically update them, thus in parameter
//     //we get middleValue from start & end, so no need to store it in parameter

//     // start = 0;
//     // if(end === undefined){ //0 is truthy value, so do undefined instead
//     //     end = nums.length-1;
//     // }

//         const middleIndex = Math.floor((start+end)/2);
//         const middleValue = nums[middleIndex];

//         if(middleValue === target){
//             // const x = middleIndex
//             return middleIndex;
//            }

//         if(start > end){//means we went through every elm in list, & couldn't find it
//             return -1;
//            }

//         if(middleValue < target){
//             start = middleIndex+1;
//            }

//         if(middleValue > target){
//             end = middleIndex-1;
//         }

//     return search(nums, target, start, end)//recursive make tree like structure, goes down until there's a return then goes up when return is found

//     // return x;
//     // return 4444
//     // return middleIndex;
//     // return 4; //num wasn't found
// };

//this doesn't work as only returns of functions are what is received in a recursive chain, not the finalValue
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target, start = 0, end, middleIndex, finalValue) {

//     // start = 0;
//     if(!end){
//         end = nums.length-1;
//     }

//         middleIndex = Math.floor((start+end)/2);
//         const middleValue = nums[middleIndex];

//         if(middleValue === target){
//             // const x = middleIndex
//             finalValue = middleIndex;
//             return finalValue;
//            }

//         if(middleValue < target){
//             start = middleIndex+1;
//            }

//         if(middleValue > target){
//             end = middleIndex-1;
//         }

//     search(nums, target, start, end, middleIndex)

//     // return x;
//     // return 4444
//     return finalValue;
//     // return 4; //num wasn't found
// };

//below works, in O(log n) NOT RECURSIVE, USING WHILE✅👇
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     let start = 0;
//     let end = nums.length-1;

//     while (start<=end){
//         const middleIndex = Math.floor((start+end)/2);
//         const middleValue = nums[middleIndex];

//         if(middleValue === target){
//             return middleIndex;
//            }

//         if(middleValue < target){
//             start = middleIndex+1;
//            }

//         if(middleValue > target){
//             end = middleIndex-1;
//         }
//     }

//     return -1; //num wasn't found
// };

// works but it's O(n)
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         let currentElm = nums[i];
//         if(currentElm === target){
//             return i;
//         }
//     }

//     return -1;
// };
