/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) !== undefined) {
      map.set(arr[i], map.get(arr[i]) + 1);
      continue;
    }

    map.set(arr[i], 0);
  }

  const occurrence = new Map();
  for (const value of map.values()) {
    if (occurrence.get(value) !== undefined) return false; //already exists
    occurrence.set(value, value);
  }
  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));

// for (let i = 0; i < map.size; i++) {
//   console.log(map.values());
// }
