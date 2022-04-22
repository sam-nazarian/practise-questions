// /**
//  * @param {string} columnTitle
//  * @return {number}
//  */
// var titleToNumber = function(columnTitle) {
//     //alphabet : position
//     // i.e A : 1
//     let alphabetMap = new Map();
//     const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//
//     for(let i=1; i<=26; i++){
//         alphabetMap.set(alphabet[i-1], i)
//     }
//
//     console.log(alphabetMap)
//
//     let answer = 0;
//     if(columnTitle.length > 1)  answer = (columnTitle.length-1) * 26;
//     console.log(answer)
//
//     answer += alphabetMap.get(columnTitle[columnTitle.length - 1]);
//
//     console.log(answer)
//     return answer;
// };
//
// // titleToNumber('A');
// // titleToNumber('AB');
// titleToNumber('ZY'); //701
// //fullSetToAdd



/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    //alphabet : position
    // i.e A : 1
    let alphabetMap = new Map();
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    for(let i=1; i<=26; i++){
        alphabetMap.set(alphabet[i-1], i)
    }


    let answer = 0;
    let rightIndex = 0;
    let base = 26;
    for(let i=columnTitle.length-1; i>=0; i--){
        const currDigit = columnTitle[i];

        answer += alphabetMap.get(columnTitle[i]) * Math.pow(base, rightIndex);

        rightIndex++;
    }

    console.log(answer)
    return answer
};

// titleToNumber('A');
// titleToNumber('AB');
titleToNumber('ABF'); //701
//fullSetToAdd