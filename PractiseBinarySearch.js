/**
 *
 * @param {array} arr where to search
 * @param {number} x the number that needs to match
 * @returns {number} index of found x
 */
const binarySearch = function (arr, x) {
  let left = 0; //index
  let right = arr.length - 1;
  let middIndex;

  while (left <= right) {
    middIndex = Math.floor((left + right) / 2);

    if (arr[middIndex] === x) {
      return middIndex;
    } else if (arr[middIndex] < x) {
      left = middIndex + 1;

      //5,2 [1,2,3,5]
    } else if (arr[middIndex] > x) {
      // middIndex -= 1; WRONG
      right = middIndex - 1;
    }
  }

  // We reach here when element is not in array
  return -1;
};

const arr = [2, 3, 4, 10, 40];
const x = 10;

console.log(binarySearch(arr, x));
