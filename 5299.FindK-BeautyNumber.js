/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {

    let numArr = num.toString()

    let count = 0;
    let left = 0;
    let right = k-1;//make is 0-indexed
    while(right<numArr.length){
        const currNum = numArr.slice(left,right+1) * 1;

        if(num % currNum === 0) count++;

        left++
        right++;
    }

    // console.log(count)

    return count;
};

divisorSubstrings(430043,2)