/**
 * @param {number[][]} arr
 * @return {void} print 2d arr
 */
const print2dArr = function(arr){
    for(let i=0; i<arr.length; i++){
        //arr[i] points to subArrs
        for(let j=0; j<arr[i].length; j++){
            console.log(arr[i][j])
        }
    }
}

// print2dArr([[1,2,3,4,'DONE'], [1,1,1,1,1,1,1,1,1,'DONE'], [1,1,1,'DONE'], [9,9,9,9,9,9,9,9,'DONE']])


/**
 * @param {array[][]} source
 * @param {array} search
 * @return {boolean} was search arr found inside source arr
 */
const arrContainsArr = function(source, search){

    for(let i=0; i<source.length; i++){
        if(source[i].length !== search.length) continue;

        for(let j=0; j<source[i].length; j++){
            if(source[i][j] !== search[j]) break;

            if(j === source[i].length-1) return true;
        }

    }

    return false;
}



// const doesContain = arrContainsArr([[1,0,1],[2],[1,2,7,1],[1,2],[1,2,2,2],[1,2,3],[1,2,3],[1,1,8],[4,1,0]], [1,2,3,4]);
// console.log(doesContain)


/**
 * @param {source[][]} source
 * @param {seach[]} search
 * @return {boolean} was search arr found inside source arr
 */
const arrContainsArr2 = function(source, search){
    //convert source to string
    // /** @type {string} */
    const sourceS = JSON.stringify(source); //s stands for String
    const searchS = JSON.stringify(search);

    console.log(sourceS)
    console.log(searchS)

    if(sourceS.includes(searchS)) return true;
    return false;
}

const doesContain = arrContainsArr2([[1,0,1],[2],[1,2,7,1],[1,2],[1,2,2,2],[1,2,3,4],[1,2,3],[1,2,3],[1,1,8],[4,1,0]], [1,2,3,4])
console.log(doesContain)



// function arrContainsArr(source, search) {
//     var searchLen = search.length;
//     for (var i = 0, len = source.length; i < len; i++) {
//         // skip not same length
//         if (source[i].length != searchLen) continue;
//         // compare each element
//         for (var j = 0; j < searchLen; j++) {
//             // if a pair doesn't match skip forwards
//             if (source[i][j] !== search[j]) {
//                 break;
//             }
//             return true;
//         }
//     }
//     return false;
// }