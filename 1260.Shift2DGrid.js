// /**
//  * @param {number[][]} grid
//  * @param {number} k
//  * @return {number[][]}
//  */
// var shiftGrid = function(grid, k) {
//     const rowLength = grid.length;
//     const colLength = grid[0].length;
//
//     const temp = grid[rowLength-1][colLength-1];
//     // grid[rowLength-1][colLength-1] = grid[0][0];
//     grid[0][0] = temp;
//
//     console.log(grid)
//
//
// };



// /**
//  * @param {number[][]} grid
//  * @param {number} k
//  * @return {number[][]}
//  */
// var shiftGrid = function(grid, k) {
//     const arr = []
//     const colLength = grid[0].length;
//
//     //make 2d to 1d in arr
//     for(let i=0; i<grid.length; i++){
//         for(let j=0; j<grid[i].length; j++){
//             arr.push(grid[i][j])
//         }
//     }
//
//     //shift for k amount of times
//     while(k>0) {
//         const finalElm = arr[arr.length - 1];
//         for (let i = arr.length - 1; i > 0; i--) {
//             arr[i] = arr[i - 1]
//         }
//         arr[0] = finalElm;
//         k--;
//     }
//
//     //pout 1d arr in 2d arr
//     //just do count 4, after 4 is reached then push to that arr (make row until row is complete then after push that row to arr)
//     const finalArr = [];
//
//     let rowArr = [];
//     let count = 0;
//     for(let i=0; i<arr.length; i++) {
//
//         rowArr.push(arr[i]);
//         count++;
//         if(count === colLength) {
//             finalArr.push(rowArr)
//             rowArr = [];
//             count = 0; //reset count
//         }
//     }
//
//     console.log(finalArr)
//
//     return finalArr
// };



// works but uses arr.splice()
// var shiftGrid = function (grid, k) {
//     var arr = grid.flat(),
//         len = grid[0].length,
//         res = [];
//
//     //put final elm to the beginning for the amount of Ks
//     while (k--) {
//         arr.unshift(arr.pop());
//     }
//
//     // console.log(arr)
//     //while arr is not empty
//     while (arr.length !== 0) {
//
//         //delete 1st 4 elms, & put them in an array(rowArr), then put them in result array
//
//         res.push(arr.splice(0, len)); //returns an arr of the deleted elms
//     }
//
//     console.log(res)
//     return res;
// };



const shiftGrid = function (grid, k) {
    const colLength = grid[0].length;
    const arr = grid.flat();
    const res = [];

    while(k>0){
        arr.unshift(arr.pop())
        k--
    }

    console.log(arr)

    for(let i=colLength; i<=arr.length; i+=colLength){
        const tempArr = arr.slice(i-colLength, i); //anything - itself is 0
        // console.log(tempArr)
        // console.log(i)
        res.push(tempArr);
    }


    return res;
}

shiftGrid([[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]], 4)

// for(let i=0; i<arr.length; i++){
//     arr[i] = arr[i+1];
// }