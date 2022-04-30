// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function(grid) {
//
//     /**
//      * @param index{character[]} index
//      * @return {void} changes connected 1s to 0s so, we don't count it again
//      */
//     const removeOnes = function(index){
//         const row = index[0];
//         const col = index[1];
//
//         if(row >= grid.length || col >= grid[0].length || row<0 || col<0) return;  //check if row & col are in range, otherwise return false
//         if(grid[row][col] !== '1') return;
//
//         //at this point grid[row][col] must be '1':
//         grid[row][col] = '0';//set that grid val to 0, so we don't count it again
//
//         removeOnes([row, col+1]);
//         removeOnes([row, col-1]);
//         removeOnes([row+1, col]);
//         removeOnes([row-1, col]);
//     }
//
//     let count = 0; //number of islands
//
//     for(let i=0; i<grid.length; i++){
//         for(let j=0; j<grid[i].length; j++){
//             if(grid[i][j] !== '1') continue;
//
//             //we only get here, if grid[i][j] === 1
//             count++;
//             removeOnes([i,j]); //if you pass grid[i][j] then you are passing the value of that
//         }
//     }
//
//     // console.log('gridFinal', grid)
//     return count;
// };

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    /**
     * @param index{character[]} index
     * @return {void} changes connected 1s to 0s so, we don't count it again
     */
    const removeOnes = function(row,col){

        if(row >= grid.length || col >= grid[0].length || row<0 || col<0) return;  //check if row & col are in range, otherwise return false
        if(grid[row][col] !== '1') return;

        //at this point grid[row][col] must be '1':
        grid[row][col] = '0';//set that grid val to 0, so we don't count it again

        removeOnes(row, col+1);
        removeOnes(row, col-1);
        removeOnes(row+1, col);
        removeOnes(row-1, col);
    }

    let count = 0; //number of islands

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] !== '1') continue;

            //we only get here, if grid[i][j] === 1
            count++;
            removeOnes(i,j); //if you pass grid[i][j] then you are passing the value of that
        }
    }

    // console.log('gridFinal', grid)
    return count;
};

const ans = numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]);
console.log(ans)


//BELOW ARE COMMENTS:

//if( grid[row][col] === undefined || grid[row][col] === '0' ) return;
// console.log('row,col', row, col)