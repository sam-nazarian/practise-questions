// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortedSquares = function(nums) {
//
//     //negative number will be positive
//     //positive numbers will stay posetive
//
//     //sort number by their absolute val
//     console.log(nums)
//     for(let i=0; i<nums.length; i++){
//
//         if(Math.abs(nums[i]))
//         nums[i] = Math.pow(nums[i],2);
//     }
//
//     console.log(nums)
//
//     nums.sort((a,b) => a-b);
//     return nums;
//
// };



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //negative number will be positive
    //positive numbers will stay posetive

    //get first num that's posetive

    let idxPosetive = null;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>=0){
            idxPosetive = i;
            break;
        }else{
            nums[i] = Math.abs(nums[i]);
        }
    }
    if(idxPosetive === null) idxPosetive = nums.length; //in this case there's no posetive vals
    // console.log(idxPosetive)

    const negNums = nums.slice(0, idxPosetive);
    const posNums = nums.slice(idxPosetive)
    posNums.reverse();//to make it in ascending order

    let finalArr = [];
    while (posNums.length > 0 && negNums.length > 0){
        if(posNums[posNums.length-1] <= negNums[negNums.length-1]){
            finalArr.push(posNums.pop())
        }else{
            finalArr.push(negNums.pop())
        }
    }
    while(posNums.length>0) finalArr.push(posNums.pop())
    while(negNums.length>0) finalArr.push(negNums.pop())

    for (let i=0; i<finalArr.length; i++) {
        finalArr[i] = Math.pow(finalArr[i], 2);
    }

    // console.log(finalArr)

    return finalArr
    // return nums;
};

console.log(sortedSquares([-4,-1,0,3,10])) //[0,1,9,16,100]
console.log(sortedSquares([-5,-3,-2,-1])) //[0,1,9,16,100]