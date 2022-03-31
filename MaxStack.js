var MaxStack = function (test) {
  //'this' points to object new keyword creates on MaxStack
  this.arr = [];
  this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  //shift right by 1
  let i = this.arr.length; //lastIndex+1
  let j = this.arr.length - 1; //lastIndex
  while (j >= 0) {
    this.arr[i--] = this.arr[j--];
  }

  this.arr[0] = x;
  this.size++;
  // this.arr[1] = x; //if we were shfting 2 elms & wanted to add 2

  console.log(this.arr);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  //get first index of array
  const poppedElm = this.arr[0];

  let i = 0; //first
  let j = 1; //next
  //shift elms one to left
  while (j <= this.arr.length) {
    this.arr[i++] = this.arr[j++];
  }
  // this.arr.splice(-1); //remove last index which is now undefined
  console.log(this.arr);
  this.size--;
  return poppedElm;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.arr[0];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  let maxSoFar = this.arr[0];
  for (let i = 1; i < this.size; i++) {
    if (this.arr[i] > maxSoFar) {
      maxSoFar = this.arr[i];
    }
  }

  return maxSoFar;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  let maxSoFar = this.arr[0];
  let indexOfMax = 0;
  for (let i = 1; i < this.size; i++) {
    if (this.arr[i] > maxSoFar) {
      maxSoFar = this.arr[i];
      indexOfMax = i;
    }
  }

  this.arr.splice(indexOfMax, 1);

  return maxSoFar;
};

const obj = new MaxStack();
obj.push(0);
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
obj.push(5);
console.log('Start Pop');
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
obj.push(5);
obj.pop();

// console.log(obj); //prints obj created by new MaxStack()

// obj.push(2);
// console.log(obj);

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

//everything here was on push
//shift every elm of array 1 to right
// for (let i = 0, let j = 1 ;this.arr.length; i++) {}
/*   let j = 0;
  let i = 1;
  const length = this.arr.length + 1;
  while (i < length) {
    console.log('test');
    this.arr[i] = this.arr[j];
    console.log(this.arr);
    i++;
    j++;
    //shift elms 1 to right
  } */
