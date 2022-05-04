/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count = 0;

    for(let i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            if(words[i][j] !== s[j]) break;

            if(j === words[i].length-1)  count += 1; //when we are at last index
        }

    }


    return count;
};

console.log( countPrefixes(["a","b","c","ab","bc","abc"], "abc") )
console.log( countPrefixes(['a','a'], 'aa') )
console.log( countPrefixes(["feh","w","w","lwd","c","s","vk","zwlv","n","w","sw","qrd","w","w","mqe","w","w","w","gb","w","qy","xs","br","w","rypg","wh","g","w","w","fh","w","w","sccy"]
,"w" ) );

// console.log(countPrefixes(['w','wh'], 'w'));



// /**
//  * @param {string[]} words
//  * @param {string} s
//  * @return {number}
//  */
// var countPrefixes = function(words, s) {
//     let count = 0;
//
//     for(let i=0; i<words.length; i++){
//         for(let j=0; j<words[i].length; j++){
//             if(words[i][j] !== s[j]) break;
//
//             if(j === words[i][j].length-1)  count += words[i].length; //when we are at last index
//         }
//
//     }
//
//
//     return count;
// };


