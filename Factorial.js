//This works but let's do it recursivly
/* const factorial = function (number) {
  const answerArray = [];

  let currentNumber = number;
  answerArray.push(currentNumber);
  for (let i = 1; i < number; i++) {
    currentNumber -= 1;
    answerArray.push(currentNumber);
  }

  // const answer = answerArray.join('*');

  let multiplyOfNumber = answerArray[0];
  for (let i = 1; i < answerArray.length; i++) {
    multiplyOfNumber *= answerArray[i];
  }

  return multiplyOfNumber;
};
console.log(factorial(1)); */

/**
 *
 * @param {number} number
 */
/* const factorial = function (n) {
  if (n != 0) {
    //a function call gives return value of that function
    return n * factorial(n - 1);
  } else {
    return 1;
  }
};

console.log(factorial(3)); */
