/**
 * @param {number[][]} boxTypes - [[numberOfBoxes i, numberOfUnitsPerBox i]]:
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {

    boxTypes.sort((a, b) => {
        return b[1] - a[1];
    })

    let truckSizeVar = truckSize;
    let maxUnits = 0;
    for(let i=0; i<boxTypes.length; i++){
        const unitsAllowedToAdd = Math.min(boxTypes[i][0], truckSizeVar);

        maxUnits += unitsAllowedToAdd * boxTypes[i][1];
        truckSizeVar -= unitsAllowedToAdd;

        if(truckSizeVar <= 0 ) break;
    }

    console.log('maxUnits', maxUnits)

    return maxUnits;
}

// for(let j=0; j<boxTypes[i][0]; j++){
//     if(truckSizeVar <= 0 ) break;
//
//     maxUnits += boxTypes[i][1];
//     truckSizeVar--;
// }
// console.log(`Above's I Value`, i)

const boxTypes = [[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]] //76
maximumUnits(boxTypes, 35);

// Below works but inefficient O(n^2)
// /**
//  * @param {number[][]} boxTypes
//  * @param {number} truckSize
//  * @return {number}
//  */
// var maximumUnits = function(boxTypes, truckSize) {
//
//     boxTypes.sort((a, b) => {
//         return b[1] - a[1];
//     })
//
//     let truckSizeVar = truckSize;
//     let maxUnits = 0;
//     for(let i=0; i<boxTypes.length; i++){
//
//         for(let j=0; j<boxTypes[i][0]; j++){
//             if(truckSizeVar <= 0 ) break;
//
//             maxUnits += boxTypes[i][1];
//             truckSizeVar--;
//         }
//         console.log(`Above's I Value`, i)
//     }
//
//     console.log('maxUnits', maxUnits)
//
//     return maxUnits;
// }
//
// const boxTypes = [[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]]
// maximumUnits(boxTypes, 35);

//     while (truckSizeVar > 0) { //i starts at 0
//         for(let j=0; j<boxTypes[i][0]; j++){
//             console.log('hello')
//             maxUnits += boxTypes[i][1];
//             truckSizeVar--;
//         }
//
//         console.log('hello22')
//         i++;
//     }
//
//     console.log(maxUnits)
// };

// for(let i=truckSizeVar; i>0 ; i--){
//     for(let j=0; j<number[i,0]; i++){
//     }
//     maxUnits += x;
// }

//for sort each subArr acs
//then sort the arr by the first letter of it's subarr
// const arr = [[4,3,5,1], [3,5,6,8,1], [1,3,5,0,1], [1,4,6,1,0], [1,4,7,1,0]]
//
// //sort subArr acs
// arr.forEach( (subArr)=> {
//     subArr.sort((a,b) => {
//         return a-b;
//     })
// })
// console.log(arr)
//
// //sort the arr by the first letter of it's subArr
// arr.sort((a,b) => {
//     return a[0]-b[0];
// })
// console.log(arr)

// const arr = [[12, 'AAA'], [58, 'BBB'], [28, 'CCC'], [18, 'DDD']];
//
// console.log(arr)
// arr.sort(function(a,b) {
//     return a[0]-b[0]
// });
// console.log(arr)