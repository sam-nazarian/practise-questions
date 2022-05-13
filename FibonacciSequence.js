// /**
//  *
//  * @param {number} n
//  * returns fibonacci number at position n
//  */
// const fib = function (n) {
//   //counting from 0
//   if (n >= 2) {
//     return fib(n - 2) + fib(n - 1); //Recursive case
//
//     console.log('this will never get run since there is a return above it')
//   } else {
//     return 1; //Base case
//   }
// };
//
// console.log(fib(5));



//whenever you do recursive problems, think of what you want to happen at a specific node
// /**
//  * Top-down Approach, using Memoization
//  * @param {number} n
//  * @return {number}
//  */
// var fib = function(n) {
//
//   // n : results
//   const memo = new Map(); //memoization
//   const ans = helper(n)
//
//   function helper(n) {
//     if (n > 1) {
//       if (memo.has(n)) return memo.get(n)
//       const addition = helper(n - 1) + helper(n - 2)
//       memo.set(n, addition);
//       return addition;
//     }
//     if (n === 1) return 1; //base-cases
//     if (n === 0) return 0;
//   }
//
//   return ans
// }


// /**
//  * Bottom-up Approach, using DP
//  * @param {number} n
//  * @return {number}
//  */
// var fib = function(n) {
//   if(n === 0) return 0;
//   if(n === 1) return 1;
//
//   let prev2 = 0; //prevPrev
//   let prev1 = 1; //prev
//   let curr = 0;
//   for(let i=2; i<=n; i++){
//     curr = prev1 + prev2;
//
//     //switch prev1 & prev2
//     let temp = prev1;
//     prev1 = curr;
//     prev2 = temp;
//   }
//
//   return curr
// }


/**
 * Bottom-up Approach, using DP
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

  let arr = [];

  arr[0] = 0;
  arr[1] = 1;
  for(let i=2; i<=n; i++){
    arr[i] = arr[i-1] + arr[i-2];
  }

  return arr[n]
}
//Bottom-up is opposite of top down, instead of starting at curr elm we start at. We start from last(bottom) elm that we're supposed to be at.

console.log( fib(5) );
