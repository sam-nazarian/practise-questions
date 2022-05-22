// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//     let count = 0;
//
//     coins.sort((a,b)=> b-a);
//     for(let i=0; i<coins.length; i++){
//         if(amount === 0) break;
//         count += Math.floor( amount / coins[i] );
//         amount = amount % coins[i];
//         // console.log('amount', amount)
//     }
//
//     console.log(amount)
//     console.log(count)
//
//     // console.log(count)
//     if(amount !== 0) return -1;
//     return count;
//
//     // if(count !== 0) return count;
// };
// console.log(coinChange([1,2,5],11))
// console.log(coinChange([2], 3))
// console.log(coinChange([186,419,83,408], 6249)); //expected 20



// /**
//  * This method doesn't work cause a different pattern of coins could get to 0, not necessarily largest to smallest
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//     let count = 0;
//
//     coins.sort((a,b)=> b-a);
//     for(let i=0; i<coins.length; i++){
//         if(amount === 0) break;
//         count += Math.floor( amount / coins[i] );
//         amount = amount % coins[i];
//         // console.log('amount', amount)
//     }
//     // console.log(count)
//
//     if(count !== 0) return count;
//     return -1;
// };




// /**
//  * Doesn't work as didn't finish dfs properly
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//     /** Whether there's enough coins in that arr
//      * @param arr {array} Coins Array
//      * @return {number}
//      */
//     function calcCoinRequired(arr){
//         let count = 0;
//
//         arr.sort((a,b)=> b-a);
//         for(let i=0; i<arr.length; i++){
//             if(amount === 0) break;
//             count += Math.floor( amount / arr[i] );
//             amount = amount % arr[i];
//         }
//         if(amount !== 0) return -1;
//         return count; //same as return -1
//     }
//
//
//     const x = dfs([],coins,false)
//     console.log(x)
//
//     /** Gets every permutation of num
//      * @param res {array}
//      * @param remaining {array}
//      * @param countFound {boolean}
//      */
//     function dfs(res, remaining, countFound){
//         //base-cases
//         if(countFound === true) return countFound;
//         if(res.length === coins.length) {
//             const count = calcCoinRequired(res);
//             if(count !== -1) countFound = true; //if count exists then return it
//             return;
//         }
//
//         for(let i=0; i<arr.length; i++){
//             res.push(res[i]);
//             dfs(res, remaining, countFound);
//             res.pop();
//         }
//
//         console.log(res)
//     }
//
// };


// /**
//  * Doesn't work, as we want the "fewest number of coins that you need to make up that amount"
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//     /** Whether there's enough coins in that arr
//      * @param arr {array} Coins Array
//      * @return {number}
//      */
//     function calcCoinRequired(arr){
//         let count = 0;
//
//         // arr.sort((a,b)=> b-a);
//         for(let i=0; i<arr.length; i++){
//             if(amount === 0) break;
//             count += Math.floor( amount / arr[i] );
//             amount = amount % arr[i];
//         }
//         if(amount !== 0) return -1;
//         return count; //same as return -1
//     }
//
//
//     let countFound = false;
//     let finalCount = -1;
//     dfs([],coins)
//
//     //only res & remaining are arrays the arrs we need as params
//     function dfs(res, remaining){
//
//         //base-cases
//         if(countFound === true) return;
//         if(remaining.length === 0){
//             console.log(res)
//             const count = calcCoinRequired(res);
//             if(count !== -1) {
//                 countFound = true;
//                 finalCount = count
//             }
//             return;
//         }
//
//         for(let i=0; i<remaining.length; i++){
//
//             const curr = remaining[i];
//             res.push(curr);
//             remaining.splice(i,1);
//
//             dfs(res, remaining);
//
//             res.pop();
//             remaining.splice(i,0,curr)
//         }
//
//     }
//
//     return finalCount
// };


// /**
//  * Doesn't work, but not sure why it doesn't work
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//     /** Whether there's enough coins in that arr
//      * @param arr {array} Coins Array
//      * @return {number}
//      */
//     function calcCoinRequired(arr,amount){
//         let count = 0;
//
//         // arr.sort((a,b)=> b-a);
//         for(let i=0; i<arr.length; i++){
//             if(amount === 0) break;
//             count += Math.floor( amount / arr[i] );
//             amount = amount % arr[i];
//         }
//         if(amount !== 0) return -1; //since there's still amount that's left then there weren't exact val of coins left
//         return count; //returning how many coins are required to get to the amount pram
//     }
//
//
//     // console.log( calcCoinRequired([1,5,2]) )
//
//     let finalCount = Infinity;
//     dfs([],coins)
//
//     //only res & remaining are arrays the arrs we need as params
//     function dfs(res, remaining){
//
//         //base-cases
//         if(remaining.length === 0){
//             console.log(res)
//             const count = calcCoinRequired(res, amount);
//             if(count !== -1) finalCount = Math.min(finalCount, count)
//             console.log(count)
//             return;
//         }
//
//         for(let i=0; i<remaining.length; i++){
//             const curr = remaining[i];
//             res.push(curr);
//             remaining.splice(i,1);
//
//             dfs(res, remaining);
//
//             res.pop();
//             remaining.splice(i,0,curr)
//         }
//     }
//
//     if(finalCount === Infinity) return -1;
//     return finalCount
// };


// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// const coinChange = function(coins, amount) {
//     let minCount = Infinity;
//     const set = new Set();
//
//     dfs(amount, 0);
//     function dfs(amount, count) {
//
//         if(set.has(amount)) return;
//
//         if(amount === 0){
//             minCount = Math.min(minCount, count)
//             return;
//         }
//         if(amount < 0) return
//
//         for (let i = 0; i <coins.length; i++) {
//             dfs(amount-coins[i], count+1)
//         }
//
//         set.add(amount)
//     }
//
//     // console.log(minCount)
//
//     if(minCount === Infinity) return -1;
//     return minCount;
// }
// console.log(coinChange([186,419,83,408], 6249)) //Expected
// console.log(coinChange([1,2,5], 11))




// var coinChange = function(coins, amount) {
//     const memo = new Map();
//
//     //left is amount left/remaining
//     function permute(left) {
//         if(memo.has(left)) return memo.get(left)
//         if(left === 0) return 0;
//         let min = Infinity;
//         console.log('minBefore', min)
//         for(let coin of coins) {
//             if(left-coin >= 0) min = Math.min(min, permute(left-coin));
//         }
//         console.log('minBefore', min)
//         memo.set(left, min+1);
//         return min + 1;
//     }
//     const result = permute(amount);
//     return result === Infinity ? -1 : result;
// };
//
// console.log( coinChange([1,2,3],6) )













//Works but no Memoization
// var coinChange = function(coins, amount) {
//
//
//     const ans = dfs(amount)
//     function dfs(amount){
//         if(amount === 0) return 0;
//
//         let min = Infinity; //find shortest branch
//         for(let i=0; i<coins.length; i++){
//             if(amount-coins[i]>=0) min = Math.min( min , dfs(amount-coins[i]));
//         }
//
//         return min+1
//     }
//
//     return ans === Infinity ? -1 : ans;
// }







// /** implemented memoization */
// const coinChange = function(coins, amount) {
//
//     const memo = new Map();
//
//     const ans = dfs(amount)
//     function dfs(amount){
//         if(amount === 0) return 0;
//         if(memo.has(amount)) return memo.get(amount);
//
//         let min = Infinity; //find shortest branch (with least possible count)
//         for(let i=0; i<coins.length; i++){
//             if(amount-coins[i]>=0) min = Math.min( min , dfs(amount-coins[i]));
//         }
//
//         memo.set(amount, min+1)
//         return min+1
//     }
//
//     return ans === Infinity ? -1 : ans;
// }




/** implemented memoization */
const coinChange = function(coins, amount) {
    const amountArr = new Array(amount+1).fill(Infinity);
    amountArr[0] = 0; //no matter how many coins we have, we need 0 coins to reach an amount of 0
    // console.log(amountArr)

    for(let i=1; i<amountArr.length; i++){
        for(let j=0; j<coins.length; j++){
            if(i-coins[j] >= 0) amountArr[i] = Math.min(amountArr[i], amountArr[ i-coins[j] ] + 1)
        }
    }

    return amountArr[amount] === Infinity ? -1 : amountArr[amount];
}

console.log( coinChange([1,2,3],6) )
// console.log(coinChange([186,419,83,408], 6249))
// console.log(coinChange([1,2,5], 11)) //Expected: 11


// T, Th 1:00 PM - 4:00 PM TRY TO FIND A DATE HERE
// M, W 2:30 PM - 5:30 PM