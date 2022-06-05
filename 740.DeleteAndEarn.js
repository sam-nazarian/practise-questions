// /**
//  * using Map & opportunity cost idea, but doesn't work, gives err at "[8,7,3,8,1,4,10,10,10,2]"
//  * @param {number[]} nums
//  * @return {number}
//  */
// const deleteAndEarn = function(nums) {
//
//     let ans = 0
//     //nums[i] , [freq, sum, opportunityCost]
//     const map = new Map();
//
//     for(let i=0; i<nums.length; i++){
//         if( !map.has(nums[i]) ) map.set(nums[i], [1,0,0]);
//         else if( map.has(nums[i]) ) {
//             const arr = map.get(nums[i]);//gets arr
//             arr[0] += 1 //update that arr
//             map.set(nums[i],arr);//set the arr again
//         }
//     }
//
//     for(const[key, arr] of map.entries()){
//         arr[1] = key*arr[0];
//         map.set(key, arr);
//     }
//
//
//     for(const[key, arr] of map.entries()) {
//
//         //can't read val of undefined thus can't type map.get(key-1)[1]
//         const prevSum = map.get(key-1) ? map.get(key-1)[1] : 0; //if not found val will undefined
//         const afterSum = map.get(key+1) ? map.get(key+1)[1] : 0;
//
//         // const opportunityCost = arr[1] / (prevSum+ afterSum);
//         const opportunityCost = arr[1] - (prevSum+ afterSum); //both formulas work
//
//
//         arr[2] = opportunityCost;
//         map.set(key, arr);
//     }
//
//     //find biggest key, add it's sum, remove it's before & after
//
//
//     while(map.size !== 0) {
//         let largestKey = -1;
//         let largest = -Infinity;
//         for (const [key, arr] of map.entries()) {
//
//             if (largest < arr[2]) {
//                 largest = arr[2];
//                 largestKey = key;
//             }
//         }
//         map.delete(largestKey - 1);
//         map.delete(largestKey + 1);
//         ans += map.get(largestKey)[1]
//         map.delete(largestKey);
//     }
//
//     return ans
// };

// console.log(deleteAndEarn([2,2,3,3,3,4]))
// console.log(deleteAndEarn([3,4,2])) //expected: 6




// /**
//  * using Map & opportunity cost idea, but doesn't work, gives err at "[8,7,3,8,1,4,10,10,10,2]"
//  * @param {number[]} nums
//  * @return {number}
//  */
// const deleteAndEarn = function(nums) {
//
//     let ans = 0
//     //nums[i] , [freq, sum, opportunityCost]
//     const map = new Map();
//
//     for(let i=0; i<nums.length; i++){
//         if( !map.has(nums[i]) ) map.set(nums[i], [1,0,0]);
//         else if( map.has(nums[i]) ) {
//             const arr = map.get(nums[i]);//gets arr
//             arr[0] += 1 //update that arr
//             map.set(nums[i],arr);//set the arr again
//         }
//     }
//
//     //calc sum
//     for(const[key, arr] of map.entries()){
//         arr[1] = key*arr[0];
//         map.set(key, arr);
//     }
//
//
//
//
//     while(map.size !== 0) {
//
//     //calc opportunityCost
//     for(const[key, arr] of map.entries()) {
//
//         //can't read val of undefined thus can't type map.get(key-1)[1]
//         const prevSum = map.get(key-1) ? map.get(key-1)[1] : 0; //if not found val will undefined
//         const afterSum = map.get(key+1) ? map.get(key+1)[1] : 0;
//
//         // const opportunityCost = arr[1] / (prevSum+ afterSum);
//         const opportunityCost = arr[1] - (prevSum+ afterSum); //both formulas work
//
//
//         arr[2] = opportunityCost;
//         map.set(key, arr);
//     }
//
//     //find biggest key, add it's sum, remove it's before & after
//
//
//         let largestKey = -1;
//         let largest = -Infinity;
//         for (const [key, arr] of map.entries()) {
//
//             if (largest < arr[2]) {
//                 largest = arr[2];
//                 largestKey = key;
//             }
//         }
//         map.delete(largestKey - 1);
//         map.delete(largestKey + 1);
//         ans += largestKey;
//
//         const arr = map.get(largestKey)
//         arr[2] -= largestKey;
//         arr[1] -= 1;
//
//         if(arr[2] <= 0) map.delete(largestKey)
//         else map.set(largestKey, arr)
//
//         console.log(map)
//         // map.delete(largestKey);
//     }
//
//     return ans
// };
// console.log(deleteAndEarn([8,7,3,8,1,4,10,10,10,2])) //expected: 52


/**
 * IMPROVEMENT WHEN MOVING WHILE LOOP UP, BUT NOW GETS STUCK AS
 * using Map & opportunity cost idea, but doesn't work, gives err at "[3,7,10,5,2,4,8,9,9,4,9,2,6,4,6,5,4,7,6,10]"
 * Expected is 66, but output 65
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function(nums) {

    let ans = 0
    //nums[i] , [freq, sum, opportunityCost]
    const map = new Map();

    //calc freq
    for(let i=0; i<nums.length; i++){
        if( !map.has(nums[i]) ) map.set(nums[i], [1,0,0]);
        else if( map.has(nums[i]) ) {
            const arr = map.get(nums[i]);//gets arr
            arr[0] += 1 //update that arr
            map.set(nums[i],arr);//set the arr again
        }
    }

    //calc sum, freq*nums[i]
    while(map.size > 0) {

    for(const[key, arr] of map.entries()){
        arr[1] = key*arr[0];
        map.set(key, arr);
    }

    //calc opportunity cost
    for(const[key, arr] of map.entries()) {

        //can't read val of undefined thus can't type map.get(key-1)[1]
        const prevSum = map.get(key-1) ? map.get(key-1)[1] : 0; //if not found val will undefined
        const afterSum = map.get(key+1) ? map.get(key+1)[1] : 0;

        // const opportunityCost = arr[1] / (prevSum+ afterSum);
        const opportunityCost = arr[1] - (prevSum+ afterSum); //both formulas work


        arr[2] = opportunityCost;
        map.set(key, arr);
    }

    //find biggest key, add its sum to ans, remove it's before & after
        let largestKey = -1;
        let largest = -Infinity;
        for (const [key, arr] of map.entries()) {

            if (largest < arr[2]) {
                largest = arr[2];
                largestKey = key;
            }
        }
        map.delete(largestKey - 1);
        map.delete(largestKey + 1);
        ans += map.get(largestKey)[1]
        map.delete(largestKey);
    }

    return ans
};

console.log(deleteAndEarn([8,7,3,8,1,4,10,10,10,2]))
console.log(deleteAndEarn([3,7,10,5,2,4,8,9,9,4,9,2,6,4,6,5,4,7,6,10])) //expected 66
