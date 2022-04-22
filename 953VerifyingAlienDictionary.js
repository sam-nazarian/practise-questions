// /**
//  * using comparator
//  * @param {string[]} words
//  * @param {string} order
//  * @return {boolean}
//  */
// var isAlienSorted = function(words, order) {
//
//     const words2 = [...words];
//
//     //order[i] : alphabetic val
//     //i.e   h : 20
//     const alphabetMap = new Map();
//     for(let i=0; i<order.length; i++){
//         alphabetMap.set(order[i], i);
//     }
//
//     words2.sort((a,b) => {
//         //compare letter by letter of every word
//         const length = Math.max(a.length, b.length);
//
//         if(a === b) return 0;
//         for(let i=0; i<length; i++){
//             const aAlphabetAti = alphabetMap.get(a[i]); //word a's char, alphabetic value
//             const bAlphabetAti = alphabetMap.get(b[i]);
//
//             if(aAlphabetAti < bAlphabetAti) return -1 ;
//             if(aAlphabetAti > bAlphabetAti) return 1 ;
//         }
//
//         //we get here if all letters matched
//         if(a.length < b.length) return -1;
//         if(a.length > b.length) return 1;
//
//         return 0; //if they are equal
//     })
//     // console.log('words2 after being sorted', words2)
//
//     //NOW COMPARE words1Arr & words2Arr to see if they are equal, return boolean based on that
//     for(let i=0; i<words.length; i++){
//         if(words[i] !== words2[i]) return false;
//     }
//
//     return true;
// };
//
// console.log(isAlienSorted(["hello","leetcode"], 'hlabcdefgijkmnopqrstuvwxyz')) //true
// console.log(isAlienSorted(["word","world","row"], 'worldabcefghijkmnpqstuvxyz')) //false
// console.log( isAlienSorted(["apple","app"], 'abcdefghijklmnopqrstuvwxyz') ) //false


/**
 * using compare curr & compare prev
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted2 = function(words, order) {
    const alphabetMap = new Map();
    for(let i=0; i<order.length; i++){
        alphabetMap.set(order[i], i);
    }

    for(let i=1; i<words.length ;i++){
        let curr = words[i];
        let prev = words[i-1];
        let length = Math.max(curr.length, prev.length);

        //go through every char of word, compare prev[i] & curr[i]
        for(let j=0; j<length; j++){

            // console.log('curr:', curr[j], 'prev:', prev[j],'\tj', j)
            // console.log(alphabetMap.get(curr[j]), alphabetMap.get(prev[j]))
            // console.log('//////')

            if(curr[j] === undefined) return false; //curr must be bigger it's okay for prev[i] to not have any elm(as it's supposed to be smaller)
            if(alphabetMap.get(curr[j]) === alphabetMap.get(prev[j])) continue;
            if(alphabetMap.get(curr[j]) > alphabetMap.get(prev[j])) break; //skip char for loop, go to next word
            if(alphabetMap.get(curr[j]) < alphabetMap.get(prev[j])) return false;
        }

    }

    return true;
}
console.log(isAlienSorted2(["hello","leetcode"], 'hlabcdefgijkmnopqrstuvwxyz')) //true
console.log(isAlienSorted2(["word","world","row"], 'worldabcefghijkmnpqstuvxyz')) //false
console.log( isAlienSorted2(["apple","app"], 'abcdefghijklmnopqrstuvwxyz') ) //false
console.log( isAlienSorted2(["app","apple"], "abcdefghijklmnopqrstuvwxyz") ) //true

console.log(isAlienSorted2(["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"], "zkgwaverfimqxbnctdplsjyohu"))

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted3 = function(words, order) {
    let newMap = new Map();
    for (let i = 0; i < order.length; i++) {
        newMap.set(order[i], i);
    }

    for (let j = 1; j < words.length; j++) {
        let prev = words[j-1]; //is a word curr[0] is 1st char of words
        let curr = words[j]; //is a word

        if (newMap.get(prev[0]) > newMap.get(curr[0])) {
            return false;
        } else if (prev[0] === curr[0]) {
            let pointer = 1;

            //while pointers are the same
            while (prev[pointer] === curr[pointer] && pointer < Math.max(curr.length, prev.length)) {
                pointer++;
            }

            console.log(pointer)

            //see if prev exists & curr exists then there's false
            if ((newMap.get(prev[pointer]) >= 0 && !newMap.get(curr[pointer])) || newMap.get(prev[pointer]) > newMap.get(curr[pointer])) {
                return false;
            }
        }
    }
    return true;
}

// console.log( isAlienSorted3(["word","world","row"], 'worldabcefghijkmnpqstuvxyz') )




// before removing comments & cleaning code
// /**
//  * @param {string[]} words
//  * @param {string} order
//  * @return {boolean}
//  */
// var isAlienSorted = function(words, order) {
//
//     const words2 = [...words];
//
//     //order[i] : index
//     const map = new Map();
//     for(let i=0; i<order.length; i++){
//         map.set(order[i], i);
//     }
//
//     // console.log('map', map)
//
//     words2.sort((a,b) => {
//         // return a.localeCompare(b);
//         // console.log('map of a:', map.get(a));
//         // console.log('Val of a:', a);
//         // console.log('Val of b:', b);
//
//         //compare letter by letter of every word
//         const length = Math.max(a.length, b.length);
//
//         if(a === b) return 0;
//         for(let i=0; i<length; i++){
//             const aCharIndex = map.get(a[i]);
//             const bCharIndex = map.get(b[i]);
//
//             if(aCharIndex < bCharIndex) return -1 ;
//             if(aCharIndex > bCharIndex) return 1 ;
//
//             // if(aCharIndex === bCharIndex) continue;
//             // console.log('a:',aCharIndex, '\tb:', bCharIndex)
//         }
//
//         //we get here if all letters matched
//         //if one is bigger than the other the return -1 for the smallest one
//         if(a.length < b.length) return -1;
//         if(a.length > b.length) return 1;
//
//         return 0; //if they are equal
//
//     })
//
//
//     console.log('words2 after sorting', words2)
//     //NOW COMPARE words1Arr & words2Arr to see if they are equal => return boolean based on that
//     for(let i=0; i<words.length; i++){
//         if(words[i] !== words2[i]) return false;
//     }
//
//     return true;
// };




/////////////////////////////////////////////////////////////////////////////////////
// console.log(i)
// if(i===length-1 && aVal[i]=== bVal[i]) return 0;
// if(aVal[i] === bVal[i]) continue;
// if(aVal[i] < bVal[i]) return -1;
// if(aVal[i] > bVal[i]) return 1;