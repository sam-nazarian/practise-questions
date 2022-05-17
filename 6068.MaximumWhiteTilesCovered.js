/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function (tiles, carpetLen) {
    for (let i = 1; i < tiles.length; i++) {
        const startCurr = tiles[i][0];
        // const endCurr = tiles[i][1];
        const startNext = tiles[i + 1][0];

        if (tiles[i][1] === tiles[i + 1][0] + 1) {
            //combine the tiles
            tiles.splice(i, 2, [startCurr, startNext]);
        }
    }
};

maximumWhiteTiles([[1, 5], [10, 11], [12, 18], [20, 25], [30, 32]], 10)


// for(let i=1; i<tiles.length; i++){
//     const startCurr = tiles[i][0];
//     // const endCurr = tiles[i][1];
//     const startNext = tiles[i+1][0];
//
//     if(tiles[i][1] === tiles[i+1][0]+1){
//         //combine the tiles
//         tiles.splice(i,2, [startCurr,startNext]);
//     }
// }


//REMEMBER WHERE YOU START THE i, START IT AT CURR
// for(let i=tiles.length; i>=0; i++){
//     const startCurr = tiles[i][0];
//     const endCurr = tiles[i][1];
//     const endPrev = tiles[i-1][1];
//
//     if(startCurr === endPrev+1){
//         //combine the tiles
//         tiles.splice(i,2, [startCurr,startNext]);
//     }
// }