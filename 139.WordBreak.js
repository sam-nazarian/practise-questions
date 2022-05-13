const { performance } = require('perf_hooks');

// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//     //in simple, all words of s (if seperated), must be dict words
//
//     for(let i=0; i<wordDict.length; i++){
//
//         const regExp = new RegExp(wordDict[i], 'g');
//         if( regExp.test(s) ) s = s.replace(regExp, ''); //remove that str, REMEMBER, replace doesn't change original obj, only splice changes original obj
//         // console.log(regExp.test(s))
//         // console.log(s)
//         if(s.length === 0) return true;
//     }
//
//     return false;
// };



// /**
//  * works but time-limit error
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//
//     let ans = false;
//     dfs(0)
//     function dfs(sIdx){
//         // console.log(sIdx)
//         // const word = s.slice(i);
//         if(sIdx === s.length) {
//             ans = true;
//             return;
//         };
//         for(let i=0; i<wordDict.length; i++){
//             const word = s.slice(sIdx, sIdx+wordDict[i].length); //if part of s & wordDict[i] were the same length, would they match?
//             console.log(word)
//             // console.log('word')
//             if(word === wordDict[i]) dfs(sIdx+wordDict[i].length);
//         }
//     }
//
//     return ans
// }


// /**
//  * works but time-limit error
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//
//     let ans = dfs(0)
//     function dfs(sIdx){
//         if(sIdx === s.length) return true //won't work as return exits just this func
//         for(let i=0; i<wordDict.length; i++){
//             const word = s.slice(sIdx, sIdx+wordDict[i].length); //if part of s & wordDict[i] were the same length, would they match?
//
//             console.log(word)
//             if(word === wordDict[i]) {
//                 // return dfs(sIdx + wordDict[i].length);
//                 dfs(sIdx + wordDict[i].length); //NEXT TRY CONST X = dfs(), then return x if it's val = true
//                 return //almost same as return dfs() func
//             }
//             //since there's a return here the forloop will never finish
//             //remember, the df() func happens then, return happens
//
//             // return ; //not exactly same as having return here cause otherwise the NEXT df() func will go through every single option in for loop,
//             //whereas this one will not
//         }
//     }
//
//     if(ans === true) return true;
//     else return false
// }



// /**
//  * works but time-limit error, make improvement, if ans===true, return, will make it stop the recursive funcs, if the ans is found
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//     let ans = false;
//     dfs(0)
//
//     function dfs(sIdx){
//
//         if(sIdx === s.length) ans = true;
//         for(let i=0; i<wordDict.length; i++){
//
//             if(ans === true) return; //improvement over last one
//             const word = s.slice(sIdx, sIdx+wordDict[i].length); //if part of s & wordDict[i] were the same length, would they match?
//             // console.log(word)
//             if(word === wordDict[i]) {
//                 dfs(sIdx + wordDict[i].length);
//             }
//
//         }
//
//     }
//
//     return ans;
// }


// /**
//  * Works Top-down approach using Memoization
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//     const startTime = performance.now()
//
//     let ans = false;
//     const memo = new Map();
//
//     dfs(0)
//     //use memoization
//     function dfs(sIdx){
//         if(memo.has(sIdx)) return //if we have already seen this val the just return(skip it) cause it was already false
//
//         if(sIdx === s.length) ans = true;
//         for(let i=0; i<wordDict.length; i++){
//
//             if(ans === true) return; //improvement over last one
//             const word = s.slice(sIdx, sIdx+wordDict[i].length); //if part of s & wordDict[i] were the same length, would they match?
//             // console.log(word)
//             if(word === wordDict[i]) {
//                 dfs(sIdx + wordDict[i].length);
//             }
//
//         }
//
//         memo.set(sIdx, false); //go through every option, & if none of the options get to a true then set this memo to false
//
//     }
//
//
//     const endTime = performance.now()
//     console.log(`Call to doSomething took ${endTime - startTime} milliseconds`) //1000 milliseconds in 1 second
//
//     return ans;
// }




// /**
//  * Iterative-Solution
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//
//     let table = new Array(s.length + 1).fill(false);
//     table[0] = true;
//
//     for(let i = 0; i <= s.length; i++){
//         if(table[i] === true){
//             for(let word of wordDict){
//                 if(s.slice(i, i + word.length) === word){
//                     table[i + word.length] = true;
//                 }
//             }
//         }
//     }
//
//     console.log(table)
//     return table[s.length];
// };


// console.log(wordBreak('leetcode', ["leet","code"])) //Expected: true
// console.log(wordBreak('applepenapple', ["apple","pen"])) //Expected: true
// console.log(wordBreak('catsandog', ["cats","dog","sand","and","cat"])) //Expected: false



/**
 * Iterative-practise, DP
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let arr = new Array(s.length+1).fill(false); //represents whether at a pos/idx, a wordDic would match that idx
    //1 bigger cause arr[0] = true
    arr[0] = true;

    // console.log(arr)
    for(let i=0; i<s.length; i++){
        if(arr[i] !== true) continue;
        //here arr[i] === true

        for(const word of wordDict){
            const sWord = s.slice(i, i+word.length);
            if(sWord === word) arr[i+word.length] = true;
        }
    }
    console.log(arr)

    return arr[s.length] //last idx of arr same as arr[arr.length-1]
}


// console.log(wordBreak("cars", ["car","ca","rs"])) //Expected: true
console.log(wordBreak('leetcode', ["leet","code"])) //Expected: true

// console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaab",
//     ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"] )) //Expected: false