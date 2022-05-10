/**
 * works but, is inneficient O(n^2)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;

    // chars[i] : idx that would need to switch to, if val was found
    const map = new Map();

    let l = 0;
    let r = 0;

    //when using sliding window methode, there's no need to have an i(forloop), there's 3 pointers, not 2
    while(r<s.length) {
        if (!map.has(s[r])) {
            map.set(s[r], r + 1); //+1, so next time we do map.get() we get the val that we're supposed to get
        }
        else if (map.has(s[r])) { //when duplicate-val is found
            l = Math.max(map.get(s[r]), l); //don't move l backwards
            map.set(s[r], r+1);
        }

        let currMax = (r - l) + 1; //+1 for 1-based

        console.log('currMax', currMax, 'left', l, 'right', r)
        if (currMax > max) {
            max = currMax;
        }

        r++;//either way we go to next char/expand window
    }

    return max;
}

console.log(lengthOfLongestSubstring('abcabcbb')) //3
console.log(lengthOfLongestSubstring('abba')) //2


// if(s.length === 0) return 0;

// for(let i=0; i<s.length; i++){
// }


//WHAT I DID BEFORE
// /**
//  * works but, is inneficient O(n^2)
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//
//     // console.log(s.length)
//
//     if(s.length === 0) return 0;
//
//     let max = 0;
//     const map = new Map();
//
//     let l = 0;
//     let r = 0;
//     for(let i=0; i<s.length; i++){
//
//         if( !map.has(s[i]) ) {
//             r=i//turn to 1-based
//             map.set(s[i], i);
//         }
//         else if( map.has(s[i]) ){
//             r=i
//             l= map.get(s[i])+1; //the first duplicate-val we found
//
//             map.set(s[i], i);
//         }
//
//         let currMax = (r-l)+1;
//
//         console.log('currMax', currMax, 'left',l,'right',r)
//         if(currMax > max){
//             max = currMax;
//         }
//
//     }
//
//     console.log(r)
//
//     return max;
// }