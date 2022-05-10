/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let l = 0
    let r = 0;

    let sum = 0;
    let max = -Infinity; //set max to worst, possible scenario

    while(r<nums.length){

        sum += nums[r];

        if( r-l === k-1){
            //calc average from l to r
            const avg = sum/k;
            console.log(avg)
            max = Math.max(max, avg);

            //subtract sum from left
            sum -= nums[l];
            l++;
        }

        r++;
    }

    return max;
};


console.log(findMaxAverage([1,12,-5,-6,50,3], 4)) //12.75
console.log(findMaxAverage([5], 1)) //5