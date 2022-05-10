// /**
//  * O(n^2) using double for loops
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */
// var findAnagrams = function(s, p) {
//     const freqMap = new Map();
//
//     for(let i=0; i<p.length; i++){
//         freqMap.set(p[i], (freqMap.has(p[i]) ? freqMap.get(p[i])  : 0) + 1 )
//     }
//     // console.log(freqMap)
//
//     const res = []
//     for(let i=0; i<s.length; i++){
//         const copyMap = new Map([...freqMap]);
//         if(!copyMap.has(s[i])) continue; //skip current iteration
//
//         //instead of delete subtract by 1, and if it's val is 0 then delete
//
//         const freq = copyMap.get(s[i]);
//         copyMap.set(s[i], freq-1);
//         if(copyMap.get(s[i]) === 0) copyMap.delete(s[i]);
//
//         if(copyMap.size === 0) res.push(i)
//
//         for(let j=i+1; j<j+(p.length-1); j++){ //-1 cause we already got i in first iteration of forloop
//             // console.log(copyMap)
//             if(!copyMap.has(s[j])) break;
//
//             const freq = copyMap.get(s[j]);
//             copyMap.set(s[j], freq-1);
//             if(copyMap.get(s[j]) === 0) copyMap.delete(s[j]);
//
//             if(copyMap.size === 0) res.push(i)
//         }
//
//     }
//
//
//     console.log(res)
//
//     return res;
//
// };


/**
 * O(n) using sliding window
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const freqMap = new Map();

    for(let i=0; i<p.length; i++){
        freqMap.set(p[i], (freqMap.has(p[i]) ? freqMap.get(p[i])  : 0) + 1 )
    }
    // console.log(freqMap)

    const res = []
    for(let i=0; i<s.length; i++){
        const copyMap = new Map([...freqMap]);
        if(!copyMap.has(s[i])) continue; //skip current iteration

        //instead of delete subtract by 1, and if it's val is 0 then delete

        const freq = copyMap.get(s[i]);
        copyMap.set(s[i], freq-1);
        if(copyMap.get(s[i]) === 0) copyMap.delete(s[i]);

        if(copyMap.size === 0) res.push(i)

        for(let j=i+1; j<j+(p.length-1); j++){ //-1 cause we already got i in first iteration of forloop
            // console.log(copyMap)
            if(!copyMap.has(s[j])) break;

            const freq = copyMap.get(s[j]);
            copyMap.set(s[j], freq-1);
            if(copyMap.get(s[j]) === 0) copyMap.delete(s[j]);

            if(copyMap.size === 0) res.push(i)
        }

    }


    console.log(res)

    return res;
};

findAnagrams('cbaebabacd', 'abc')
findAnagrams('abab', 'ab')