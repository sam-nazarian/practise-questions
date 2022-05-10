// Below works but is inefficient, gets a timeout error
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//     this.capacity = capacity
//     this.arr = [];
// };
//
// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//
//     for(let i=0; i<this.arr.length; i++) {
//      this.arr[i][2] = this.arr[i][2]+1;
//     }
//
//     for(let i=0; i<this.arr.length; i++){
//         if(this.arr[i][0] == key){
//             this.arr[i][2] = 0;//set it's LRU to 0
//             return this.arr[i][1]; //return the val of it
//         }
//     }
//
//     return -1;
// };
//
// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//
//     for(let i=0; i<this.arr.length; i++){
//            if(this.arr[i][0] === key){
//                this.arr.splice(i,1)
//                break;
//            }
//     }
//     this.arr.push([key, value, 0]);
//
//     let max = -Infinity;
//     let indexOfMax = -1;
//     //add to LRU(least recently used val)
//     for(let i=this.arr.length-2; i>=0; i--){
//         this.arr[i][2] = this.arr[i][2]+1;
//
//         if(this.arr[i][2] > max){
//             max = this.arr[i][2];
//             indexOfMax = i;
//         }
//     }
//
//     if(this.arr.length > this.capacity) this.arr.splice(indexOfMax,1);
//
//     // if(this.arr[i][2] === this.capacity) this.arr.splice(i,1); //capacity is passed since it's LRU is 0-based
// };
//
// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */

// const obj = new LRUCache(2);
// obj.put(2,1)
// obj.put(2,2)
//
// console.log(obj)
// console.log(obj.get(2)) //expected: 2

// console.log(obj)
// console.log()


const LRUCache = class {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); //key: val
    }

    get(key){
        if( !this.map.has(key) ) return -1;

        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val); //add val at end of map

        return val;
    }

    put(key,val){
        if(this.map.has(key)) this.map.delete(key); //delete it so that setting it will put it at the end of map, as the recently used element
        this.map.set(key, val);

        if(this.capacity < this.map.size){
            //remove the first elm of map, which is the LRU elm
            this.map.delete(this.map.keys().next().value)
        }
    }
}


const obj = new LRUCache(2);
obj.put(1,1)
obj.put(2,2)
obj.put(3,3)
obj.put(4,4)

console.log(obj)
console.log(obj.get(4))



//PROPERTIES OF A MAP
//when you set a new val in map its order will be in the way you wrote it
//but when you update the vals that already exist in a map, then the order will stay where it already was, just the val of it will change

const map = new Map();
map.set(1,1)
// console.log(map.keys().next().)


// map.get(2)
// map.set(1,2)
// map.set(99,2)
// map.set(0,2)
//
//
// map.set(99,44333)
// console.log(map)
// console.log(map.entries().next().value)