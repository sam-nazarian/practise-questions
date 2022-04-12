/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let nArr = n.toString().split('');

  let sum = 0;
  let loopNum = 0;
  while (sum !== 1) {
    sum = 0;
    for (let i = 0; i < nArr.length; i++) {
      sum += Math.pow(nArr[i], 2);
    }
    nArr = sum.toString().split('');

    console.log(nArr);
    loopNum++;
    if (loopNum > 100) return false;
  }

  console.log(loopNum);
  // console.log(nArr);
  return true;
};

console.log(isHappy(2));
