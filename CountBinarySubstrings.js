/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let total = 0;
  let prevCount = 0;
  let char = null; //wil be 0 or 1
  let currCount = 0; //count of how many chars are there

  // loop past end of array, using s[s.length] (undefined) as a sentinel to trigger the s[i] !== char condition on the last group
  for (let i = 0; i <= s.length; i++) {
    //when do we want to update curr & and compare it prev? whenever char changes
    if (s[i] !== char) {
      //why is total being calculated here?
      //we only know actual currCount after a char was changed(we have it here as at the end a new currCount would be created), do this comparision when you know both previous & current fields are updated to their max before needing a change.
      total += Math.min(prevCount, currCount); //adding to total which is returned at end of func

      prevCount = currCount; //set prev to curr, then start new (val for) curr

      currCount = 1; //1 because 0+1 as it's counting first char type
      char = s[i]; //change charactor type to the one that we are currently on
    } else {
      currCount++; //if char is same, then just add to it
    }
  }

  return total;
};
console.log(countBinarySubstrings('01'));

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var countBinarySubstrings = function (s) {
//   const subArr = [];

//   //putting all substrings in subArr
//   const numArr = s.split('');
//   for (let i = 0; i < s.length; i++) {
//     let subString = numArr[i];
//     for (let j = i + 1; j < s.length; j++) {
//       subString += numArr[j];
//       subArr.push(subString);
//     }
//   }

//   // console.log(subArr);

//   return filterBinary(subArr);
//   // console.log(subArr)
//   // console.log(foundZero, foundOne);
// };

// const filterBinary = function (subArr) {
//   console.log(subArr);

//   // let foundZero = false;
//   // let foundOne = false;

//   //go through every elm
//   for (let i = 0; i < subArr.length; i++) {
//     let countZero = 0;
//     let countOne = 0;
//     let foundZero = false;
//     let foundOne = false;
//     const currNumberArr = subArr[i].split(''); //split number to array

//     //go through every elm's charactor
//     for (let j = 0; j < currNumberArr.length; j++) {
//       const currentElm = currNumberArr[j];
//       const prevElm = currNumberArr[j - 1];
//       // const lastElm = currNumberArr[currNumberArr.length - 1];

//       if (currentElm == 0 && prevElm == 1 && foundZero == true) {
//         // foundZero = false;
//         // foundOne = false;

//         subArr.splice(i, 1);
//         i--;
//         break;
//         // return false; //remove current charactor
//       }

//       if (currentElm == 1 && prevElm == 0 && foundOne == true) {
//         // foundZero = false;
//         // foundOne = false;

//         subArr.splice(i, 1);
//         i--;
//         break;
//         // return false; //remove current charactor
//       }

//       if (currentElm == 0) {
//         //&& foundZero !== true
//         //no point setting to true when already true
//         countZero++;
//         foundZero = true;
//       }
//       if (currentElm == 1) {
//         //&& foundOne !== true
//         countOne++;
//         foundOne = true;
//       }

//       if (j === currNumberArr.length - 1) {
//         //countZeros/Ones are still being updated, hence at the end of forloop
//         if (countZero !== countOne) {
//           subArr.splice(i, 1); //shifts entire array to left to fill empty spot, so our point point 1 extra to right
//           i--; //brings pointer back to 1 to left, pointers moves on next iteration in for loop (i++)
//           break;
//         }
//       }
//     }
//   }

//   //goal: 00110 to be printed 1 time
//   console.log(subArr);
//   return subArr.length;
// };

// // console.log(filterBinary(['00110']));
// // console.log(filterBinary(['00', '001', '0011', '00110', '01', '011', '0110', '11', '110', '10']));
// console.log(countBinarySubstrings('00110'));
// // console.log(filterBinary(['00', '001']));
// // console.log(filterBinary(['001', '0011', '00110'])); //'00',
