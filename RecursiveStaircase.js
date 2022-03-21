//count every stair
//not efficient, recursive creates a tree which causes duplicate function calls.
const num_ways = function (n) {
  if (n > 2) {
    return num_ways(n - 1) + num_ways(n - 2);
  } else if (n === 2) {
    return 2;
  } else if (n === 1) {
    return 1;
  } else if (n < 1) {
    return 0;
  }
};

/*

 var climbStairs = function(n) {
  if(n <= 1){//0 or 1
      return 1;
  }else{
      return climbStairs(n-1) + climbStairs(n-2);
  }
};

// if (n > 2) {
//   return climbStairs(n - 1) + climbStairs(n - 2);
// } else if (n === 2) {
//   return 2;
// } else if (n === 1) {
//   return 1;
// } else if (n < 1) {
//   return 0;
// }
*/

var climbStairs = function (n) {
  let previous = 1;
  let beforePrevious = 1;

  const newArray = [];

  //starting at 2 because we know 2 values before it
  for (let i = 1; i < n; i++) {
    //first set current value
    const currentValue = previous + beforePrevious;
    newArray.push(currentValue);

    //update previous values previous values
    const previousTemp = previous; //store current previous value, it'll be updated below

    previous = currentValue; // previous += beforePrevious;
    beforePrevious = previousTemp;
  }

  return newArray[newArray.length - 1];
};

// console.log(climbStairs(3));

var climbStairsTwo = function (n) {
  if (n === 0 || n === 1) return 1;

  const nums = [];
  nums[0] = 1;
  nums[1] = 1;
  for (let i = 2; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }

  return nums;
};
console.log(climbStairsTwo(2));
