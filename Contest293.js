// /**
//  * @param {string[]} words
//  * @return {array[]}
//  */
// var removeAnagrams = function(words) {
//
//     // console.log(words)
//
//     const map = new Map();
//
//     for(let i=0; i<words.length; i++) {
//         words[i] = words[i].split('');
//     }
//
//     for(let i=0; i<words.length; i++){
//         const val = words[i].join(''); //eg. abba, the old val
//
//         words[i].sort((a,b) => {
//             return a.localeCompare(b); //for strs use localeCompare
//         });
//
//         const key = words[i].join(''); //eg. aabb, the new key
//
//         map.set(key, val);
//     }
//
//
//     console.log(map)
//
//     for(let i=0; i<words.length; i++) {
//         words[i] = words[i].join('');
//     }
//
//     const setArr = Array.from( new Set([...words]) );
//
//
//     console.log(setArr)
//     for(let i=0; i<setArr.length; i++){
//         setArr[i] = map.get(setArr[i]);
//     }
//
//     console.log(setArr)
//     return setArr
// };


// /**
//  * @param {string[]} words
//  * @return {array[]}
//  */
// var removeAnagrams = function(words) {
//
//     const map = new Map();
//
//     const mapCurr = new Map();
//
//     let prev = words.length-1 //since we go right to left prev is pointing to elm on the right of i
//     let i = words.length-2;
//
//     while(i>=0) {
//
//         for (let j = 0; j < words[i].length; j++) {
//             mapCurr.set(words[i][j], (map.has(words[i][j]) ? map.get(words[i][j]) : 0) + 1)
//         }
//
//         console.log(mapCurr)
//
//         for (let k = 0; k < words[prev].length; k++) {
//             let val = mapCurr.get(words[prev][k]);
//             if (!val) {
//                 //remove curr elm, & reset i & prev
//                 words.splice(prev, 1);
//
//                 // i = words.length - 2;
//                 // prev = words.length - 1;
//                 mapCurr.clear();
//                 // break;
//             } //0|null|undefined
//
//             console.log('rr')
//             if (val) {
//                 val--;
//                 mapCurr.set(words[prev][k], val);
//             }
//
//         }
//
//         // console.log(words[i])
//         mapCurr.clear();
//         prev--;
//         i--;
//     }
//
//
//     return words
// }

// console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))
// console.log(removeAnagrams(["a","b","c","d","e"]))
// removeAnagrams(["abba","baba","bbaa","cd","cd"]) //EXPECTED: ["abba","cd"]
// if(mapCurr.has(words[prev][k]))





//O(N) solution using map, & and extra array with the prev being on the array.
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false
//     let map = {}
//
//     for(let i = 0; i < s.length; i++){
//         map[s[i]] = map[s[i]] !== undefined ? map[s[i]] + 1 : 1
//     }
//
//     for(let i = 0; i < t.length; i++){
//         if( !map[t[i]] ) return false
//         map[t[i]]--
//         if(map[t[i]] < 0) return false
//     }
//     return true
// };
//
// var removeAnagrams = function(words) {
//
//     if(words.length === 1) return [words[0]]
//     let result = []
//     // let prev = words[0], next
//     result.push(words[0]) //adding prev to result
//
//     for(let i =  1; i < words.length; i++){
//         next = words[i]
//         if( !isAnagram(result[result.length - 1], next) ){
//             result.push(next)
//         }
//     }
//     return result
// };
//
// console.log( removeAnagrams(["abba","baba","bbaa","cd","cd"]) )
// console.log( removeAnagrams(["a","b","c","d","e"]) )




const isAnagram = function(s1, s2) {
    if(s1.length !== s2.length) return false;
    //necessary as lengths need to be same, cause if all vals of map exist, & lengths aren't equal then it will return true if this condition isn't here

    //char/s[i] : freq
    const map = new Map();

    //adding word1 to map
    for(let i=0; i<s1.length; i++){
        map.set(s1[i], (map.has(s1[i]) ? map.get(s1[i]) : 0) + 1)
    }

    //subtracting word2 from map
    for(let i=0; i<s2.length; i++){
        let val = map.get(s2[i]);
        if(val === undefined) return false; //remember to check for undefined first, as undefined-number = NaN
        val--; //we found matching char
        if(val<0) return false;
        map.set(s2[i], val)
    }
    return true;
}

/**
 * @param {string[]} words
 * @return {array[]}
 */
const removeAnagrams = function(words) {
    const res = []
    res.push(words[0])

    for(let i=1; i<words.length; i++){
        if( !isAnagram(res[res.length-1],words[i]) ) res.push(words[i])
    }

    // console.log(res)
    return res;
}


console.log( removeAnagrams(["abba","baba","bbaa","cd","cd"]) )
console.log( removeAnagrams(["a","b","c","d","e"]) )


// console.log( isAnagram(words[0], words[1]) )
// if(!val) return false; //doesn't work as this also includes 0, but we only wanna return false, when val is negative val
//Try not to use !val, use undefined or 0 instead, more specific