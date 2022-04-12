/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let answerFound = false;

  let startVal = 1;

  //do this until number is found
  while (answerFound === false) {
    let numsArr = [...nums];

    numsArr.unshift(startVal);
    for (let i = 1; i < numsArr.length; i++) {
      numsArr[i] = numsArr[i - 1] + numsArr[i];

      if (numsArr[i] <= 0) {
        startVal++;
        break;
      }

      if (i === numsArr.length - 1) answerFound = true;
    }
  }

  //if loop finishes then return startVal
  console.log(startVal);
  return startVal;
};

console.log(minStartValue([-3, 2, -3, 4, 2]));

//while loop practise

// const testFunction = function () {
//   let n = 0;
//   while (n < 3) {
//     for (let i = 0; i < 5; i++) {
//       console.log('hello', i);
//       break;
//     }
//     n++;
//   }
// };

// testFunction();
