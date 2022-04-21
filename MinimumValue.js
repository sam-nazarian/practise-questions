/**
 * Below works well, but could be more efficient
 * @param {number[]} nums
 * @return {number}
 */
// var minStartValue = function (nums) {
//   let answerFound = false;
//
//   let startVal = 1;
//
//   //do this until number is found
//   while (answerFound === false) {
//     let numsArr = [...nums];
//
//     numsArr.unshift(startVal);
//     for (let i = 1; i < numsArr.length; i++) {
//       numsArr[i] = numsArr[i - 1] + numsArr[i];
//
//       if (numsArr[i] <= 0) {
//         startVal++;
//         break;
//       }
//
//       if (i === numsArr.length - 1) answerFound = true;
//     }
//   }
//
//   //if loop finishes then return startVal
//   console.log(startVal);
//   return startVal;
// };
// console.log(minStartValue([-3, 2, -3, 4, 2]));

/**
 * Below works well, but could be more efficient
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {

  const isStartValStepSumLessThanOne = function(startVal){
    const numsArr = [...nums];
    numsArr.unshift(startVal);

    for(let i=1; i<numsArr.length; i++){
      numsArr[i] = numsArr[i-1] + numsArr[i];

      if(numsArr[i] < 1) return true;

      if(numsArr.length - 1 === i){
        return false;
      }
    }
  }

  // console.log(isStartValStepSumLessThanOne(4))

  let m = 100;

  //left & right & mid are pointing to startValue (right is max possible start val), (left is least possible start value)
  let left = 1;
  let right = m * nums.length + 1;
  let mid;
  let res;

  while(left <= right){

    mid = Math.floor( (left + right) / 2 );

    //if startVal was midVal then would step sum be greater than 1
    if(isStartValStepSumLessThanOne(mid) === false){ //step sum greater than 1
      res = mid
      // console.log('mid greater than 1', mid)
      right = mid-1;
    }

    //if startVal was midVal then would step sum be less than 1
    if(isStartValStepSumLessThanOne(mid) === true){ //step less than than 1
      // console.log('mid less than 1', mid)
      left= mid+1;
    }
  }

  return res;

}

console.log(minStartValue([-3, 2, -3, 4, 2])); //5
console.log(minStartValue([1,2])); //1
console.log(minStartValue([1,-2,-3])); //5

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
