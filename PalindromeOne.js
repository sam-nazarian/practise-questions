/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (string) {
//   const regex = /[^A-Za-z0-9]/g;

//   /** @type {Array} */
//   const forwardArr = string.toLowerCase().replace(regex, '').split('');
//   /** @type {Array} */
//   const backwardArr = string.toLowerCase().replace(regex, '').split('').reverse();

//   for (let i = 0; i < forwardArr.length; i++) {
//     if (forwardArr[i] === backwardArr[i]) {
//       continue;
//     } else {
//       return false;
//     }
//   }

//   return true;

//   console.log(forwardArr, backwardArr);
// };

// console.log(isPalindrome('1221'));

var isPalindrome = function (string) {
  const regex = /[^A-Za-z0-9]/g;
  /** @type {Array} */
  const forwardArr = string.toLowerCase().replace(regex, '').split('');

  // if (forwardArr.length % 2 === 1) return false; //palin can't be odd number💥IT'S POSSIBLE FOR PALIN TO BE ODD THIS WAS WRONG

  let i = 0;
  let j = forwardArr.length - 1; //last index of j

  //no need to check numbers that are the same, so no equal is needed
  while (i < j) {
    if (forwardArr[i] === forwardArr[j]) {
      i++;
      j--;
    } else {
      return false; //first & last not equal is false
    }
  }

  return true;
};

console.log(isPalindrome('12212'));
