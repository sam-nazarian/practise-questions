// /**
//  * @param {array[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     let k = nums.length;
//     const set = new Set();
//
//     for(let i=nums.length; i>=0; i--){
//         if(set.has(nums[i])){
//             // nums[i] = NaN; //put all NaNs to the end
//             nums.splice(i,1);
//             k--
//         }else{
//             set.add(nums[i]);
//         }
//     }
//
//     console.log(nums)
//     return k;
// };
// console.log(removeDuplicates([1,1,2]))



// /**
//  * @param {array[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     let k = nums.length;
//
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] === nums[i-1]) nums[i]
//     }
//
//     return k;
// };


var removeDuplicates = function(nums) {
    let l = 1;
    let r = 1;

    while(r<nums.length){
        //if it's first time we're seeing r, then switch it with l
        if(nums[r] !== nums[r-1]) {
            nums[l] = nums[r];
            l++;
        }
        r++;
    }

    console.log(nums);
    return l
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
