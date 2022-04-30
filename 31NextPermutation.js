// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var nextPermutation = function(nums) {
//     const permutations = [];
//
//     let p2 = ;
//     let p1 = ;
//     for(let i=0; i<nums.length; i++){
//
//     }
//
// };
//
// nextPermutation([1,2,3])


// const permutator = (inputArr) => {
//     let result = [];
//
//     const permute = (arr, m = []) => {
//         if (arr.length === 0) {
//             result.push(m)
//         } else {
//             for (let i = 0; i < arr.length; i++) {
//                 let curr = arr.slice();
//                 let next = curr.splice(i, 1);
//                 permute(curr.slice(), m.concat(next))
//             }
//         }
//     }
//
//     permute(inputArr)
//
//     return result;
// }
//
// console.log(permutator(['a','b','c','d']))


// /**
//  * Kinda works but doesn't work for larger arrays
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function(nums) {
//
//     if(nums.length <= 1) return [nums]
//
//     const numsSet = new Set();
//     const res = [];
//     res.push([...nums]) //pushing nums won't work since nums will be later changed
//     numsSet.add(`${nums}`)
//
//
//
//     while(true) {
//         for (let i = nums.length - 1; i > 0; i--) {
//             const temp = nums[i];
//             nums[i] = nums[i - 1];
//             nums[i - 1] = temp;
//
//             if (numsSet.has(`${nums}`)) return res //base case
//
//
//             res.push([...nums])
//             numsSet.add(`${nums}`)
//         }
//     }
//
//     // console.log(numsSet)
//     // return res;
// };

// console.log(permute(['1','2','3']))
// console.log(permute([1]))

// console.log(permute([5,4,6,2]))

    /*
    [[5,4,6,2],[5,4,2,6],
    [5,6,4,2],[5,6,2,4],
    [5,2,4,6],[5,2,6,4],
    [4,5,6,2],[4,5,2,6],
    [4,6,5,2],[4,6,2,5],
    [4,2,5,6],[4,2,6,5],
    [6,5,4,2],[6,5,2,4],
    [6,4,5,2],[6,4,2,5],
    [6,2,5,4],[6,2,4,5],
    [2,5,4,6],[2,5,6,4],
    [2,4,5,6],[2,4,6,5],
    [2,6,5,4],[2,6,4,5]]
     */

// /**
//   * Kinda works but doesn't work for larger arrays
//   * @param {number[]} nums
//   * @return {number[][]}
//   */
// var permute = function(nums) {
//
//     if(nums.length <= 1) return [nums]
//
//     const numsSet = new Set();
//     const res = [];
//     res.push([...nums]) //pushing nums won't work since nums will be later changed
//     numsSet.add(`${nums}`)
//
//     let count = 0;
//
//
//     while(true) {
//         for (let i = nums.length - 1; i > 0; i--) {
//             const temp = nums[i];
//             nums[i] = nums[i - 1];
//             nums[i - 1] = temp;
//
//             if (numsSet.has(`${nums}`)) continue; //base case
//
//
//             res.push([...nums])
//             numsSet.add(`${nums}`)
//         }
//         count++;
//
//         if(count === 1000) return res;
//     }
//
//     // console.log(numsSet)
//     // return res;
// };
//
// console.log(permute([5,4,6,2]))



// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// const permute = function(nums) {
//     const result = [];
//     const temp = [];
//
//     findPermutations(temp, nums, result);
//     return result;
// };
//
// /**
//  * @param temp {number[]}
//  * @param nums {number[]}
//  * @param result {number[][]}
//  */
// const findPermutations = (temp, nums, result) => {
//     if (!nums.length) { //if nums.length is falsy value, 0 or undefined
//         result.push([...temp]); //concat adds to Strings together //temp.concat() also works as it creates a shallow copy
//         return;
//     }
//
//     for (var i = 0; i < nums.length; i++) {
//
//
//         const newNum = nums[i];
//         // we've picked our new number to add, so add it to our "picked" array called temp
//         temp.push(newNum);
//         // remember, in the first iteration, after picking 1, we need to pass in [2, 3] as the numbers left.
//         nums.splice(i, 1);
//         findPermutations(temp, nums, result); //recursive call
//         // Remember to "reset" our temp and nums array before our next iteration, where we pick the 2, and leave [1,3]
//
//         // console.log('FINISHED')
//
//         // console.log('Before nums,',nums)
//         // console.log('Before temp,',temp)
//         // console.log('Before result,',result)
//         // console.log('/////////////')
//
//         temp.pop();
//
//         //cause we spliced the i, it no longer exists so we use the var
//         //we use splice cause we used splice to remove it at the beginning, so we do the opposite of that
//         nums.splice(i, 0, newNum);
//         // nums.unshift(newNum)
//
//         // console.log('After nums,',nums)
//         // console.log('After temp,',temp)
//         // console.log('After result,',result)
//         // console.log('/////////////')
//
//     }
// };

// console.log(permute([1,2,3]))

//permutation means different arrangement
/**
 * works but has time limit error
 * @param {number[]} nums
 * @return {void}
 */
const nextPermutation = function(nums) {
    //DFS stands for Depth-first search
    const dfs = function(nums,temp, res){
        if(nums.length === 0){
            res.push(`${[...temp]}`)
            return;
        }

        for(let i=0; i<nums.length; i++){
            const curr = nums[i];

            temp.push(curr)
            nums.splice(i,1);

            dfs(nums,temp,res)

            temp.pop();
            nums.splice(i,0,curr)
        }
    }

    let temp = [];
    let res = [];
    dfs(nums,temp,res);

    res.sort((a,b) => {

        for(let i=0; i<a.length; i++){
            if(a[i] < b[i]) return -1; //a smaller, a will be negative, so it'll come first
            if(a[i] > b[i]) return 1;
            //if they'are equal do nothing
        }
        return 0;
    })

    // console.log(res)


    let indexOfNums = -1;
    for(let i=0; i<res.length; i++){
        if(res[i] === `${nums}`) indexOfNums = i;
    }
    // console.log(indexOfNums)


    if(indexOfNums === res.length-1){
        const nextVal = res[0].replace(/,/g, ''); //nextVal is smallest val of res

        for(let i=0; i<nums.length; i++){
            nums[i] = nextVal[i]
        }
    }else{
        const nextVal = res[indexOfNums+1].replace(/,/g, ''); //nextVal is, next biggest val of res

        for(let i=0; i<nums.length; i++){
            nums[i] = nextVal[i]
        }
    }

    console.log(nums)
}

// console.log( nextPermutation([1,2,3]) )
// console.log( nextPermutation([3,2,1]) )



/**
 * works but has time limit error
 * @param {number[]} nums
 * @return {void}
 */
const nextPermutation2 = function(nums) {

    let changeP;
    for(let i=nums.length-2; i>=0; i--){
        if(nums[i] < nums[i+1]) {
            changeP = i;
            break;
        }
    }

    //find justLargerVal number after changeP
    let justLargerP = changeP+1;
    let justLargerVal = nums[changeP+1];
    for(let i=changeP+1; i<nums.length; i++){
        if(nums[i] > nums[changeP]){
            //nums[i]>changeP but nums[i]<JustLargeVal
            if (nums[i] > justLargerVal) continue;

            justLargerP = i;
            justLargerVal = nums[i];
        }
    }

    console.log(nums[justLargerP])
    console.log(nums[changeP])

    //switch  changeP & smallestP
    const temp = nums[justLargerP];
    nums[justLargerP] = nums[changeP]
    nums[changeP] = temp;

    // console.log(nums)

    //sort after changeP
    const part1 = nums.slice(0, changeP+1);
    const part2 = nums.slice(changeP+1, nums.length);
    part2.reverse();

    // console.log('change P', changeP)
    // console.log(part1, part2)

    const finalArr = part1.concat(part2);

    for(let i=0; i<nums.length; i++){
        nums[i] = finalArr[i];
    }

    console.log(nums)
}

console.log( nextPermutation2([2,3,1]) ) //[3,1,2]

// console.log( nextPermutation2([1,3,2]) ) //[2,1,3]

// console.log( nextPermutation2([2,1,4,3]) )
// console.log( nextPermutation2([1,2,3]) )
// console.log( nextPermutation2([3,2,1]) ) //[1,2,3]







// const temp = nums[nums.length-1];
// nums[nums.length-1] = nums[nums.length-2];
// nums[nums.length-2] = temp;
//
// console.log(nums)

/*
Hi @pongpanut , I used current.slice() to pass a copy of the array to the recursive function, since JavaScript passes Objects & Arrays by reference.
If I were to write the code nowadays with ES6 syntax, I would have used Array destructuring: permutations([...current], [...remaining.slice(0, i), ...remaining.slice(i+1)])
 */

// we are using a common strategy to initialize an 'answer' object, and pass it into
// a recursion helper to modify the values. Sometimes it helps to separate this because
// there are times you will want to have conditionals or a for loop in the top level code
// before you call a recursive function.

// Here it is important to call concat(), just a fancy way of copying the original array.
// See what happens when you remove concat, things will go crazy because you are
// modifying an object that is referenced elsewhere!


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//The lexicographically next permutation is basically the greater permutation.