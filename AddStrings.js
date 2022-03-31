/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // return String(Number(num1) + Number(num2));
  //can't convert num1 to integer, but it's possible to convert each letter of num1 to an Integer

  let res = [];
  let remainder = [];
  let i = num1.length - 1; //digit of num2, starts from last index
  let j = num2.length - 1; //digit of num2, starts from last index
  while (i >= 0 || j >= 0) {
    const num1i = Number(num1[i]);
    const num2j = Number(num2[j]);
    //if remainder not empty then add it
    if (num1i && num2j) {
      const value = num1i + num2j;
      if (value >= 10) remainder.unshift(value.toString()[1]);
    } else if (num1i) {
      num1i;
    } else if (num2j) {
      num2j;
    }

    i--;
    j--;
  }

  const resJoined = res.join('');
  console.log(resJoined);
  return resJoined;
};

addStrings([1, 1], [1, 2, 3]);
