/* const arr = new Array(4);

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr.push(3);

console.log(arr); */

// /**
//  * @param {number} size
//  */
// const MovingAverage = function (size) {
//   this.queue = [];
//   this.size = size;
// };

// /**
//  * @param {number} val
//  * @returns {number} average of
//  */
// MovingAverage.prototype.next = function (val) {
//   if (this.queue.length < this.size) {
//     this.queue.push(val);
//     return this.calcAverage();
//   }

//   if (this.queue.length >= this.size) {
//     this.queue.shift();
//     this.queue.push(val);
//     return this.calcAverage();
//   }
// };

// MovingAverage.prototype.calcAverage = function () {
//   let sum = 0;
//   for (let i = 0; i < this.queue.length; i++) {
//     sum += this.queue[i];
//   }

//   // console.log(sum / this.queue.length);
//   return sum / this.queue.length; //return average
// };

// before slight optimazation
// /**
//  * @param {number} val
//  * @returns {number} average of
//  */
// MovingAverage.prototype.next = function (val) {
//   if (this.queue.length < this.size) {
//     this.queue.push(val);
//     this.sum += val;

//     return this.sum / this.queue.length;
//   }

//   if (this.queue.length >= this.size) {
//     const removedElm = this.queue.shift();
//     this.sum -= removedElm;
//     // this.sum -= this.queue.shift(); //only thing that changes

//     this.queue.push(val);
//     this.sum += val;

//     return this.sum / this.queue.length;
//   }
// };

const MovingAverage = function (size) {
  this.queue = [];
  this.size = size;
  this.sum = 0;
};

// after slight optimazation
/**
 * @param {number} val
 * @returns {number} average of
 */
MovingAverage.prototype.next = function (val) {
  if (this.queue.length >= this.size) {
    //deque, and subtract sum
    this.sum -= this.queue.shift(); //only thing that changes
  }

  this.queue.push(val);
  this.sum += val;

  return this.sum / this.queue.length;
};

const obj = new MovingAverage(3);
console.log(obj.next(1));
console.log(obj.next(10));
console.log(obj.next(3));
console.log(obj.next(5));

// obj.next(1);
// console.log(obj.queue);

// obj.next(10);
// console.log(obj.queue);

// obj.next(3);
// console.log(obj.queue);

// console.log(obj.next(5));
// console.log(obj.queue);
// obj.calcAverage();

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
