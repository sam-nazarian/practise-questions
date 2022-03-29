/**
 * @param {array} arr
 */
const func = function (arr) {
  let i = 0;
  while (arr[i] < arr.length) {
    //length = 3
    console.log(i); //0,1,2,3
    i++;
  }

  console.log(i); //when i is greater than arr.length it stops
};

func([0, 1, 2]);
