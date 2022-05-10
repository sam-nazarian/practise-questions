// /**
//  * works but is inefficient O(n^2)
//  * @param {string} s
//  * @return {number}
//  */
// var calculate = function(s) {
//     const arr = s.match(/(\d+)|\+|\-|\*|\//g); //put anything except a space in arr, (opposite of \s) //before is was \s+
//
//     console.log(arr)
//
//     //check for '/' or '*'
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === '/'){
//             const ans = Math.floor( arr[i-1]*1 / arr[i+1]*1 );
//             arr[i-1] = ans;
//             arr.splice(i,2)
//             i--;//cause curr idx is removed, & we move to left as the whole which was created was filled by shifting to left
//         }
//         else if(arr[i] === '*'){
//             const ans = Math.floor(arr[i-1]*1 * arr[i+1]*1 );
//             arr[i-1] = ans;
//             arr.splice(i,2)
//             i--;
//         }
//     }
//
//     console.log(arr)
//
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === '+'){
//             const ans = Math.floor( arr[i-1]*1 + arr[i+1]*1 );
//             arr[i-1] = ans;
//             arr.splice(i,2)
//             i--;//cause curr idx is removed, & we move to left as the whole which was created was filled by shifting to left
//         }
//         else if(arr[i] === '-'){
//             const ans = Math.floor(arr[i-1]*1 - arr[i+1]*1 );
//             arr[i-1] = ans;
//             arr.splice(i,2)
//             i--;
//         }
//     }
//
//     console.log(arr)
//
//     return arr[0];
//
//     //check for '+' or '-'
// };

// console.log(calculate(" 3+5 / 2 "))
// console.log(calculate("42"))
// console.log(calculate("0-2147483647"))



// var calculate = function(s) {
//
//     // s = s.replace(/\s/g,'');//replaces all spaces with nothing
//
//     const arr = s.match(/(\d+)|\+|\-|\*|\//g);
//
//     let operator = '+';
//     let stack = [];
//
//     for(let i=0; i<arr.length; i++){
//         // console.log(stack)
//
//         //update stack based on arr[i]
//         if(arr[i].match(/\d/)){
//             const curr = arr[i]*1;
//             if(operator === '+') stack.push(curr)
//             if(operator === '-') stack.push(-curr)
//             if(operator === '*') {
//                 const popElm = stack.pop()*1
//                 stack.push(Math.trunc(popElm * curr))
//             }
//             if(operator === '/') {
//                 const popElm = stack.pop()*1
//                 stack.push(Math.trunc(popElm / curr)) //Math.floor doesn't work for negative numbers
//             }
//         }
//         // else{
//         //     operator = arr[i] //this would also work
//         // }
//
//         //update operator based on curr arr[i]
//         if(arr[i] === '+') operator = '+'
//         if(arr[i] === '-') operator = '-'
//         if(arr[i] === '*') operator = '*'
//         if(arr[i] === '/') operator = '/'
//     }
//
//     // console.log(stack)
//     let final = 0;
//     for (const elm of stack) {
//         //goes from top to bottom of stack
//         final += elm;
//     }
//
//     // console.log(stack)
//     return final;
// }

// calculate('10 -  4 + 3*2 + 10/ 5')
// console.log(calculate('3+2*2'))
// console.log(calculate('3/2'))
// console.log(calculate('3+  5 / 2'))
// console.log(calculate("14-3/2")) //expected: 13




const calculate = (s) => {
    if (s == null || s.length === 0) return null;

    // remove space
    s = s.replace(/\s/g, '');

    let st = [];
    let n = 0;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
        const c = s[i]; //current number

        // keep doing this until no sign is reached
        if (/\d/.test(c)) n = n * 10 + Number(c);  // e.g. '14' -> 1 * 10 + 4

        console.log(n)

        // sign or last number
        if (/\D/.test(c) || i === s.length - 1) { //could just use \D opposite of digit to test for sign
            if (sign === '-') st.push(-n);
            else if (sign === '+') st.push(n);
            else if (sign === '*') st.push(st.pop() * n);
            else if (sign === '/') st.push(~~(st.pop() / n));

            sign = c;
            n = 0;
        }
    }
    return st.reduce((a, b) => a + b);
};
console.log(calculate('33+2'))