//shift array 2 to left
//[1,2,3,4] should be [3,4]

const arr = [1, 2, 3, 4];
let size = 4;

let i = 0;
let j = 2;
while (j <= arr.length) {
  //
  arr[i++] = arr[j++];
}
size = -2;

console.log(arr, size);
