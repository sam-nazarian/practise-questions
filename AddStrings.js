//much more efficient, DO NOT DO nested ifs, try to use only const variables
var addStrings = function (num1, num2) {
  let i = num1.length - 1; //pointer for num1
  let j = num2.length - 1; //pointer for num2
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0) {
    const numI = num1[i] ? num1[i] * 1 : 0;
    const numJ = num2[j] ? num2[j] * 1 : 0;

    const additionVal = (numI + numJ + carry) % 10; //last value

    result.unshift(additionVal);

    carry = Math.floor((numI + numJ + carry) / 10);

    i--;
    j--;
  }

  if (carry !== 0) result.unshift(carry);

  result = result.join('');
  return result;
};

console.log(addStrings('6994', '36'));
console.log(addStrings('1', '9'));

//problems with code: nested ifs, duplicate code
//duplicate code for ifs
//let value of value which constantly changes, hard to keep track of it
// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var addStrings = function (num1, num2) {
//   let res = [];
//   let remainder = new Array(5).fill(0);

//   //pointers
//   let i = num1.length - 1; //digit of num1, starts from last index
//   let j = num2.length - 1; //digit of num2, starts from last index
//   let r = remainder.length - 1;

//   while (i >= 0 || j >= 0) {
//     const num1i = Number(num1[i]);
//     const num2j = Number(num2[j]);
//     //if remainder not empty then add it
//     if (!isNaN(num1i) && !isNaN(num2j)) {
//       let value = num1i + num2j;
//       value += remainder[r];

//       if (value >= 10) {
//         remainder[--r] = Number(value.toString()[0]);
//         value = Number(value.toString()[1]);
//       } else {
//         r--;
//       }
//       res.unshift(value);
//     } else if (!isNaN(num1i)) {
//       //Nan cause Number converts undefined to NaN

//       let value = num1i + remainder[r];

//       if (value >= 10) {
//         remainder[--r] = Number(value.toString()[0]);
//         value = Number(value.toString()[1]);
//       } else {
//         r--;
//       }

//       res.unshift(value);
//     } else if (!isNaN(num2j)) {
//       // res.unshift(num2j + remainder[r--]);
//       let value = num2j + remainder[r];

//       if (value >= 10) {
//         remainder[--r] = Number(value.toString()[0]);
//         value = Number(value.toString()[1]);
//       } else {
//         r--;
//       }

//       res.unshift(value);
//     }

//     i--;
//     j--;
//   }

//   console.log(r);
//   if (remainder[r] != 0) res.unshift(remainder[r]);

//   console.log(remainder);
//   const resJoined = res.join('');
//   console.log(resJoined);
//   return resJoined;
// };
// addStrings('6994', '36'); //7030
// addStrings('11', '123'); //134
// // addStrings('1', '9');

// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var addStrings = function (num1, num2) {
//   // return String(Number(num1) + Number(num2));
//   //can't convert num1 to integer, but it's possible to convert each letter of num1 to an Integer

//   let res = [];
//   // let remainder = [];
//   let remainder = 0;
//   let i = num1.length - 1; //digit of num2, starts from last index
//   let j = num2.length - 1; //digit of num2, starts from last index
//   while (i >= 0 || j >= 0) {
//     const num1i = Number(num1[i]);
//     const num2j = Number(num2[j]);
//     //if remainder not empty then add it
//     if (num1i && num2j) {
//       let value = num1i + num2j;
//       if (value >= 10) {
//         value = Number(value.toString()[1]);
//         value += remainder;

//         remainder = Number(value.toString()[0]);
//       } else {
//         remainder = 0;
//       }
//       res.unshift(value);
//     } else if (num1i) {
//       res.unshift(num1i);
//     } else if (num2j) {
//       res.unshift(num2j);
//     }

//     i--;
//     j--;
//   }

//   console.log(res);
//   // const resJoined = res.join('');
//   // console.log(resJoined);
//   // return resJoined;
// };
