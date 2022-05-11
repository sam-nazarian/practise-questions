// /**
//  * Doesn't work for example "00011000" cause, at 00011000, at the end we just change 0s to 1s 3 times, & we get a val of 00011111, so it doesn't work
//  * @param {string} s
//  * @return {number}
//  */
// var minFlipsMonoIncr = function(s) {
//     // console.log(s)
//
//     // let dpS = ''; //dynamic str
//
//     const sArr = s.split('');
//     let count = 0;
//     let isMonotone = false;
//     for(let i=1; i<s.length; i++){
//         if(sArr[i] === '0' && sArr[i-1] === '0') isMonotone = true;
//         if(sArr[i] === '1' && sArr[i-1] === '1') isMonotone = true;
//         // if(sArr[i] === '')
//         if(sArr[i] === '0' && sArr[i-1] === '1') isMonotone = false;
//         if(sArr[i] === '1' && sArr[i-1] === '0') isMonotone = true;
//
//
//         if(isMonotone === false){
//             //switch currVal
//             if(sArr[i] === '1') sArr[i] = '0'; //can't do this with a string, can only do it with an array
//             if(sArr[i] === '0') sArr[i] = '1';
//
//             count++;
//         }
//
//         // console.log(sArr)
//     }
//
//     return count;
// };


// /**
//  * @param {string} s
//  * @return {number}
//  */
// var minFlipsMonoIncr = function(s) {
//     let onesAlreadySeen = 0;
//     let res = 0; //min num of flips (can just know as we're returning it)
//
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == '0') {
//             console.log(res)
//
//             res = Math.min(res + 1 /* flip this '0' to '1' */,
//                 onesAlreadySeen /* flip all '1' we've seen before to '0'*/); //remember numberOfOnes is not res
//         } else {
//             // s[i] is '1'
//             onesAlreadySeen++; //since the 1 is increasing we're here so res is not being changed
//         }
//     }
//
//
//     return "Return Value: " + res;
// }
//
// console.log(minFlipsMonoIncr('000111110000000000111100')) //can either change all 1s to 0s, can change 0s to 1s

// console.log(minFlipsMonoIncr('00011000'))
// console.log(minFlipsMonoIncr('00110'))
// console.log(minFlipsMonoIncr('010110'))
// console.log(minFlipsMonoIncr("00011000"))



/**
 * O(n) time-complexity, O(1) space-complexity
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function(s) {
    let minFlips = 0;
    let countOne = 0;

    for(let i=0; i<s.length; i++) {
        if (s[i] === '0') {
            minFlips = Math.min(minFlips+1 ,countOne)
        } else { //s[i] === 1
            countOne++;
        }
    }

    return minFlips;
}

// console.log(minFlipsMonoIncr('00110'))
// console.log(minFlipsMonoIncr('010110'))
// console.log(minFlipsMonoIncr('00011000'))
console.log(minFlipsMonoIncr('00001000011111'))



