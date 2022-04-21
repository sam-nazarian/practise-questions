// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// var digitSum = function (s, k) {
//
//     //instead of RegExp literal, I need RegExp object
//     const res = s.match( new RegExp('.{1,' + k + '}' , 'g' ) );
//     console.log(res)
//
//
//     // var str = "1234.00";
//     // var digits = 2;
//     // var re = new RegExp("(\\d)(\\d{" + digits + "})");
//     // var str2 = str.replace(re,"$1,$2-");
//     //
//     // console.log(str2)
//
//     // const re = new RegExp('/.{1, '+ 3 + '}/g' )
//
//
//
//
//     // let inputString = "I'm John, or johnny, but I prefer john.";
//     // let replaceThis = "John";
//     // let re = new RegExp(`\\b${replaceThis}\\b`, 'gi'); //can only put RegExp objects as vars inside of RegExp
//     // console.log( inputString.replace(re, "Jack") ); // I'm Jack, or johnny, but I prefer Jack.
//
//
//
//
//     //stops if s.length >= k
//     // while(s.length > k){
//     //     //1) split s into 3 parts
//     //     //split a string into n characters javascript
//     //
//     // }
// };

//works but is inefficient
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    // let arr = new Array(4).fill(0);
    while(s.length > k) {
        r = new RegExp(`.{1,${k}}`, 'g') //when using regExp object, need to add '\' before a special character
        let arr = s.match(r);

        let newS = '';
        // console.log('newS1', newS);

        //i is each group of number(consist of 3 numbers)
        //j is each number in that group
        for (let i = 0; i < arr.length; i++) {
            let sum = 0;

            for (let j = 0; j < arr[i].length; j++) {
                sum += arr[i][j] * 1;   //add all of the numbers in a group together
                // if (j === arr[i].length - 1) arr[i] = sum;
            }
            newS += sum;
        }

        // console.log('newS2', newS)
        // console.log(s)
        s = newS;
    }
    return s;

};
console.log(digitSum("01234567890", 2))

/*
//this would also be possible
const d = '\\d' //did this to remind myself this works
r = new RegExp(`${d}{1,${10}}`, 'g') //when using regExp object, need to add '\' before a special character
*/


// const digitSum2 = (s, k) => {
//     while (s.length > k) {
//
//         let t = ''; // each round accumalate new string t
//         for (let i = 0; i < s.length; i += k) {
//             let sum = 0;
//             let sub = s.slice(i, i + k)
//             console.log(sub)
//             for (const c of sub) sum += c*1; // sum of each digits
//             console.log(sum)
//             t += sum; // rebuild new string with sum
//         }
//         s = t; // update new string to s
//
//     }
//     return s;
// };
//
// console.log(digitSum2("11111222223", 3))



// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// var digitSum = function(s, k) {
//     // let arr = new Array(4).fill(0);
//     while(s.length > k) {
//         r = new RegExp(`.{1,${k}}`, 'g') //when using regExp object, need to add '\' before a special character
//         let arr = s.match(r);
//         console.log('arr1',arr);
//
//         //i is each group of number(consist of 3 numbers)
//         //j is each number in that group
//         for (let i = 0; i < arr.length; i++) {
//             let sum = 0;
//
//             for (let j = 0; j < arr[i].length; j++) {
//                 sum += arr[i][j] * 1;   //add all of the numbers in a group together
//                 if (j === arr[i].length - 1) arr[i] = sum;
//             }
//         }
//         console.log('arr2', arr)
//
//         s = arr.join('')
//     }
//     return s;
//
// };