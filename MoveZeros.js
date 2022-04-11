/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //switch all none-0 elmt with 0 elements

  const n = nums.length;

  let left = 0;
  let right = 0; //points to non-0 number

  //go through every elm
  while (right < n) {
    if (nums[right] === 0) {
      right++; //we want to only switch non-0 numbers with 0 numbers
      //since right skipped 0, but left didn't then we can do a switch between right & left
    } else {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      //we will be stuck in forever loop, if we don't do any addition here
      right++;
      left++;
    }
  }

  console.log(nums);
};

moveZeroes([0, 1, 0, 12]); //[1,3,12,0,0]

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function (nums) {
//   //go through every non-0 elm

//   let n = nums.length;
//   if(n===0 || n===1) return;

//   let left = 0;
//   let right = 0;
//   let temp;

//   while(right < n){
//     if(nums[right] === 0){
//       right++;
//     }else{ //if right!==0 - switch right & left
//       temp = nums[left]; //change the var that we created it's temp for, first
//       nums[left] = nums[right];
//       nums[right] = temp;
//       left++;
//       right++;
//     }
//   }

//   console.log(nums)
// };

// moveZeroes([0, 1, 0, 12]); //[1,3,12,0,0]

// var moveZeroes = function (nums) {
//   //go through every elm
//   //if elm is '0', add put it's count to map
//   //and remove the 0
//   //at the end get count of '0' from map
//   //add all 0s back to array
//
//   const countZeros = new Map(); // 0: countOfZeros
//
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       countZeros.set(0, (countZeros.has(0) ? countZeros.get(0) : 0) + 1);
//       nums.splice(i, 1); //shifts left to fill whole
//       i--;
//     }
//   }
//
//   const amountZeros = countZeros.has(0) ? countZeros.get(0) : 0;
//   for (let i = 0; i < amountZeros; i++) {
//     nums.push(0);
//   }
//
//   // console.log(nums);
//   // console.log(countZeros);
// };
//
// moveZeroes([0, 1, 0, 0, 3, 12]); //[1,3,12,0,0]
