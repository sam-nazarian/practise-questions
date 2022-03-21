/**
 *
 * @param {number} n
 * returns fibonacci number at position n
 */
const fib = function (n) {
  //counting from 0
  if (n >= 2) {
    return fib(n - 2) + fib(n - 1); //Recursive case
  } else {
    return 1; //Base case
  }
};

console.log(fib(5));
