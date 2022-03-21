const calcFactorial = function (number) {
  //assuming there' no negative numbers
  if (number > 0) {
    return number * calcFactorial(number - 1);
  } else {
    //equal to 0
    return 1;
  }
};

console.log(calcFactorial(5));
