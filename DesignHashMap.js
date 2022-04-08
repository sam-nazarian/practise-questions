
//ANSWER USING ARRAY AS BUCKET
// class MyHashMap {
//     constructor() {
//         this.keySpace = 2069;
//         this.hashMap = [];
//
//         for(let i=0; i<=this.keySpace; i++){
//             this.hashMap[i] = [];
//         }
//     }
//
//     //everything below will be on the prototype of the object
//     put(key, value){
//         const input = [key, value];
//         const hashKey = key % this.keySpace;
//
//         //check if that array has the key
//
//         //this.hashMap[hashKey] points to each bucket which is an array
//         //go through every bucket
//         for(let i=0; i<this.hashMap[hashKey].length; i++){
//             if(this.hashMap[hashKey][i][0] === key){
//                 this.hashMap[hashKey][i] = input;
//                 return;
//             }
//         }
//
//         this.hashMap[hashKey].push(input);
//     }
//
//     get(key){
//         const hashKey = key % this.keySpace;
//         const bucket = this.hashMap[hashKey]; //bucket is arr
//
//         for(let i=0; i<bucket.length; i++){
//             if(bucket[i][0] === key) return bucket[i][1];
//         }
//
//         return -1;
//     }
//
//     remove(key){
//         const hashKey = key % this.keySpace;
//         const bucket = this.hashMap[hashKey]; //bucket is arr
//
//         for(let i=0; i<bucket.length; i++){
//             if(bucket[i][0] === key) {
//                 bucket.splice(i,1);
//                 return
//             }
//         }
//
//         return -1;
//
//     }
// }
//
//
// const map = new MyHashMap();
// map.put(1,1);
// map.put(2,2);
// console.log(map.get(1))
//
// console.log(map)






// THE ANSWER USING BUCKET CLASS AS AN AN ARRAY
class Bucket {
    constructor() {
        this.bucket = [];
        //[[key i, value i]]
    }

    put(key, value){
        for(let i=0; i<this.bucket.length; i++){
            //if key already exists, replace it with new arr
            if(this.bucket[i][0] === key){
                this.bucket[i] = [key, value];
                return;
            }
        }

        this.bucket.push([key, value]);

    }

    get(key){
        for(let i=0; i<this.bucket.length; i++){
            if(this.bucket[i][0] === key) return this.bucket[i][1]
        }

        return -1;
    }

    remove(key){
        for(let i=0; i<this.bucket.length; i++){
            if(this.bucket[i][0] === key) {
                this.bucket.splice(i, 1);
                return;
            }
        }
    }
}

class MyHashMap {
    constructor() {
        this.keySpace = 2906;
        this.hashMap = [];

        for(let i=0; i<this.keySpace; i++){
            this.hashMap.push(new Bucket());
        }
    }

    //everything below is on prototype of object
    put(key, value){
        const hashKey = key % this.keySpace;
        this.hashMap[hashKey].put(key, value);
    }

    get(key){
        const hashKey = key % this.keySpace;
        return this.hashMap[hashKey].get(key);
    }

    remove(key){
        const hashKey = key % this.keySpace;
        this.hashMap[hashKey].remove(key);
    }
}


const myHashMap = new MyHashMap();
myHashMap.put(2,4);
myHashMap.put(2,666);

console.log(myHashMap.get(2))

myHashMap.remove(2);

console.log(myHashMap)






















//ANSWER USING BUCKET CLASS

// class Bucket {
//     constructor() {
//         this.bucket = [];
//     }
//
//     get(key) {
//         for (let [k, v] of this.bucket) {
//             if (k === key) return v;
//         }
//         return -1;
//     }
//
//     update(key, value) {
//         let found = false;
//         this.bucket.forEach((kv, i) => {
//             if (key === kv[0]) {
//                 this.bucket[i] = [key, value];
//                 found = true;
//                 return;
//             }
//         })
//         if (!found) this.bucket.push([key, value]);
//     }
//
//     remove(key) {
//         this.bucket.forEach((kv, i) => {
//             if (key === kv[0]) this.bucket.splice(i, 1);
//         })
//     }
// }
//
// class MyHashMap {
//     constructor() {
//         this.keySpace = 2069;
//         this.hashMap = [];
//         for (let i = 0; i < this.keySpace; ++i) {
//             this.hashMap.push(new Bucket());
//         }
//     }
//
//     put(key, value) {
//         const hashKey = key % this.keySpace;
//         this.hashMap[hashKey].update(key, value);
//     }
//
//     get(key) {
//         const hashKey = key % this.keySpace;
//         return this.hashMap[hashKey].get(key);
//     }
//
//     remove(key) {
//         const hashKey = key % this.keySpace;
//         return this.hashMap[hashKey].remove(key);
//     }
// }
//
// const obj = new MyHashMap();
// obj.put(1,2);
// obj.put(2,3);
// console.log(obj)


// var MyHashMap = function() {
//     this.map = [];
// };
//
// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function(key, value) {
//     //create an arr with values of key, and value [key, value]
//     //find if any values with the same key are in map already
//     //replace that subArr in map with the newArr
//
//     const newArr = [key,value];
//
//     for(let i=0; i<this.map.length; i++){
//         if(this.map[i][0] === key){
//             this.map[i] = newArr;
//             return; //exit function
//         }
//     }
//
//     this.map.push(newArr);
// }
//
//
// /**
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function(key) {
//     for(let i=0; i<this.map.length; i++){
//         if(this.map[i][0] === key) return this.map[i][1];
//     }
//
//     return -1;
// };
//
// /**
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function(key) {
//     for(let i=0; i<this.map.length; i++){
//         if(this.map[i][0] === key) this.map.splice(i,1);
//     }
// };
//
// MyHashMap.prototype.toString = function(){
//     return this.map
// }
//
// /**
//  * Your MyHashMap object will be instantiated and called as such:
//  * var obj = new MyHashMap()
//  * obj.put(key,value)
//  * var param_2 = obj.get(key)
//  * obj.remove(key)
//  */
//
// const obj = new MyHashMap();
// obj.put(1,2);
// obj.put(2,2);
// obj.put(3,2);
// obj.put(2,5);
// obj.remove(3)
// console.log(obj.get(2))
// console.log(obj.toString());