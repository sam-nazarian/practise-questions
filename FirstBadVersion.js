/**
 * @param {integer} version number
 * @returns {boolean} whether bersion is bad, true if version is bad, otherwise false
 */
const isBadVersion = function (version) {
  switch (version) {
    case 1:
      return true;
      break;

    case 2:
      return false;
      break;

    case 3:
      return true;
      break;

    case 4:
      return true;
      break;

    default: //version is good
      return false;
      break;
  }
};

// isBadVersion could be a class that solution extends with a function named isBadVersion() inisde of that extended class
// firstBadVersion is function that is returned, need to do solution(isBadVersion)(2) to use n param.
/**
 * @param {function} isBadVersion()
 * @returns {function} call of this function would return another function, which could then also be called
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @param {integer} The first bad version
   */
  return (firstBadVersion = function (n) {
    // console.log(n);

    return 4444;
  });
};

const x = solution(isBadVersion);

console.log(x(22));
