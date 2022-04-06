
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

    // console.log('leftMap:', left)
    // console.log('rightMap:', right)
    // console.log('countMap:', count)

    const degree = Math.max( ...count.values() );
    let shortestSubarray = Infinity;

    for(let i=0; i<nums.length; i++){
        //check their frequency
        if( count.get(nums[i]) ===  degree){
            shortestSubarray = Math.min(shortestSubarray,( right.get(nums[i]) - left.get(nums[i]) ) + 1);
        }
    }

    return shortestSubarray;
}

const numArr = [5,5,5,6,7,1,1,2,2,2,1,8,9,0,5];
console.log(findShortestSubArray(numArr))