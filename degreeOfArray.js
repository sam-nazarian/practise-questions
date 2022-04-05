
/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function(nums){

                             //keys : values

    const left = new Map();  //num : index
    const right = new Map(); //num : index
    const count = new Map(); //num : frequency (of that number)


    for(let i=0; i<nums.length; i++){
        //first time seeing number at
        if(!left.has(nums[i])) left.set(nums[i], i); //first index elm was found
        right.set(nums[i], i); //last index elm was found

        count.set(nums[i], (count.has(nums[i]) ? count.get(nums[i]) : 0) + 1);
    }

    console.log('leftMap:', left)
    console.log('rightMap:', right)
    console.log('countMap:', count)


    let shortestSubarray = Infinity;
    for(let i=0; i<nums.length; i++){
        //check their frequency
        if( count.get(nums[i]) === Math.max( ...count.values() ) ){
            console.log(nums[i])
            shortestSubarray = Math.min(shortestSubarray,( left.get(nums[i]) + right.get(nums[i]) ) + 1);
            console.log(left.get(nums[i]), right.get(nums[i]))
            console.log('shortestSubArr: ', shortestSubarray)
        }
    }

    return shortestSubarray;
}

const numArr = [5,5,5,6,7,1,1,2,2,2,1,8,9,0,5];
console.log(findShortestSubArray(numArr))