/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {

    for(let i=0; i<nums.length; i++){

        //calc left average
        let leftSum = 0;
        let leftP= i;
        const leftLength = nums.slice(0, leftP+1).length;
        while(leftP>=0){
            leftSum += nums[leftP];
            leftP--
        }

        //calc right average
        let rightP = i+1;
        let rightSum = 0;
        const rightLength = nums.slice(rightP, nums.length).length;
        while(rightP<nums.length){
            // console.log(nums[rightP])
            rightSum += nums[rightP];
            rightP++;
        }
        console.log('leftSum', leftSum)
        console.log('rightSum', rightSum)

        // console.log('leftLength', leftLength);
        // console.log('rightLength', rightLength)


        let minAvgDifference = Math.round(Math.abs( leftSum / leftLength  - rightSum / rightLength) );

        // console.log(minAvgDifference)


        //add averages together, push into new arr
    }

    console.log('hello')

};


console.log(minimumAverageDifference([2,5,3,9,5,3]))