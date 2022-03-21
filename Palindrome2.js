/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (string) {
  const arr = string.split('');

  let i = 0;
  let j = arr.length - 1; //lastIndex
  //we already know number in same index is a pal, no need for "<="
  while (i < j) {
    if (arr[i] !== arr[j]) {
      if (isPalindrome(i + 1, j, arr) || isPalindrome(i, j - 1, arr)) {
        return true;
      } else {
        return false;
      }

      //array from i to j
      // isPalindrome(i,j,arr);
    }
    i++;
    j--;
  }
  return true; //everything was equal, no other condition was run
};

//i: firstIndex, j:lastIndex
const isPalindrome = function (i, j, arr) {
  //we already know number in same index is a pal, no need for "<="
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true; //everything was equal, no other condition was run
};

//CODE BELOW WORKS 👇, CAN UNCOMMENT EVERYTHING
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var validPalindrome = function (s) {
//   if (s.length === 1) return true;

//   //convert every char of s to arr
//   const originalArray = s.split('');
//   let modifiedArray = [...originalArray];

//   const lastIndex = originalArray.length - 1;

//   //THIS SEGMENT ALSO WORKS👇
//   for (let i = 0; i < modifiedArray.length; i++) {
//     modifiedArray.splice(i, 1);
//     // console.log(modifiedArray)
//     if (isPalindrome(modifiedArray) === true) {
//       return true;
//     }

//     //check if it is palindrome, if no, continue
//     modifiedArray = [...originalArray];
//   }

//   return false;
// };

// /**
//  * @param {array} arr
//  */
// const isPalindrome = function (arr) {
//   const forwardArr = [...arr]; //must deep-copy
//   const reverseArr = [...arr.reverse()];

//   for (let i = 0; i < arr.length; i++) {
//     if (forwardArr[i] === reverseArr[i]) {
//       continue;
//     } else {
//       return false;
//     }
//   }

//   return true; //numbers are plaindrome
// };

/*
//THIS SEGMENT ALSO WORKS, HOWEVER IT'S INCOMPLETE👇
for(let i=lastIndex+1; i>=0; i--){
  modifiedArray.splice(i,1);
  //check if it is palindrome, if no, continue
  console.log(modifiedArray)

}*/
