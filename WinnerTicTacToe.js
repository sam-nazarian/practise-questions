// /**
//  * THIS WORKS BUT COULD BE SIMPLIFIED
//  * @param {number[][]} moves
//  * @return {string}
//  */
// var tictactoe = function(moves) {
//     const xMoves = [];
//     const oMoves = [];
//
//     //x+=2 is being done after a loop has finished
//     for(let x=0; x<moves.length; x+=2){
//         xMoves.push(moves[x]);
//     }
//     for(let o=1; o<moves.length; o+=2){
//         oMoves.push(moves[o]);
//     }
//
//     console.log('xMoves:', xMoves);
//     console.log('oMoves', oMoves);
//
//     // row : freq
//     const rowMap = new Map();
//     const colMap = new Map();
//     const crossSet = new Set();
//
//     //for x moves check if row or col is same 3 times, then return A is winner
//     for(let i=0; i<xMoves.length; i++){
//         rowMap.set(xMoves[i][0], (rowMap.has(xMoves[i][0]) ? rowMap.get(xMoves[i][0]) : 0) + 1 );
//         colMap.set(xMoves[i][1], (colMap.has(xMoves[i][1]) ? colMap.get(xMoves[i][1]) : 0) + 1 );
//         crossSet.add( JSON.stringify(xMoves[i]) ) //add every elm of xMoves[]
//     }
//
//     for(const [key, val] of rowMap.entries()){
//         if(val === 3) return 'A';
//     }
//     for(const [key, val] of colMap.entries()){
//         if(val === 3) return 'A';
//     }
//     console.log(crossSet)
//     if(( crossSet.has('[0,0]') && crossSet.has('[1,1]') && crossSet.has('[2,2]') ) || (crossSet.has('[2,0]') && crossSet.has('[1,1]') && crossSet.has('[0,2]') )){
//         return 'A';
//     }
//
//     rowMap.clear();
//     colMap.clear();
//     crossSet.clear();
//
//     //for o moves check if row or col is same 3 times, then return B is winner
//     for(let i=0; i<oMoves.length; i++){
//         rowMap.set(oMoves[i][0], (rowMap.has(oMoves[i][0]) ? rowMap.get(oMoves[i][0]) : 0) + 1 ) //row
//         colMap.set(oMoves[i][1], (colMap.has(oMoves[i][1]) ? colMap.get(oMoves[i][1]) : 0) + 1 ) //col
//         crossSet.add( JSON.stringify(oMoves[i]) ) //add every elm of xMoves[]
//     }
//     for(const [key, val] of rowMap.entries()){
//         if(val === 3) return 'B';
//     }
//     for(const [key, val] of colMap.entries()){
//         if(val === 3) return 'B';
//     }
//     if(( crossSet.has('[0,0]') && crossSet.has('[1,1]') && crossSet.has('[2,2]') ) || (crossSet.has('[2,0]') && crossSet.has('[1,1]') && crossSet.has('[0,2]') )){
//         return 'B';
//     }
//
//
//     if(moves.length === 9) return 'Draw';
//     return 'Pending';
// };

// /**
//  * @param {number[][]} moves
//  * @return {string}
//  */
// var tictactoe = function(moves) {
//
//     let rows = new Array(3).fill(0);
//     let cols = new Array(3).fill(0);
//     let isPlayerA = true; //playerA:1   playerB:-1
//     let diagnal = 0;
//     let antidiagonal = 0;
//
//     for(let i=0; i<moves.length; i++){
//
//         let counter = isPlayerA? 1:-1;
//         isPlayerA = !isPlayerA; // switch to player B if A, switch to A player if B
//
//         let row = moves[i][0],
//             col = moves[i][1];
//
//         rows[row] +=  counter;
//         cols[col] +=  counter;
//
//         if (row === col) diagnal += counter;
//         if (row === 2 - col) antidiagonal += counter;
//
//         if (rows[row] === 3 || cols[col] === 3 || antidiagonal === 3 || diagnal === 3) {
//             return "A";
//         } else if (rows[row] === -3 || cols[col] === -3 || antidiagonal === -3 || diagnal === -3) {
//             return "B";
//         }
//
//     }
//
//     return moves.length === 9 ? "Draw" : "Pending"
//
//     // if(i%2 === 0) player1[i];
//     // if(i%2 === 1) player2[i][0];
// };

var tictactoe = function(moves) {

    //when any of these reach 3 then winner will be decided
    // allTogether there's 8 ways to win
    let columns = new Array(3).fill(0);
    let rows = new Array(3).fill(0);
    let cross = 0;
    let antiCross = 0;

    let currPlayer = 1;//1 is X(A), -1 is O(B)

    for(let i=0; i<moves.length; i++){
        const currRow = moves[i][0];
        const currCol = moves[i][1];


        rows[currRow] += currPlayer;
        columns[currCol] += currPlayer;
        if(currRow === currCol) cross += currPlayer;
        if(currRow === 2 - currCol) antiCross += currPlayer;

        if(rows[currRow] === 3 || columns[currCol] === 3 || cross === 3 || antiCross === 3) return 'A'
        if(rows[currRow] === -3 || columns[currCol] === -3 || cross === -3 || antiCross === -3) return 'B'

        currPlayer = currPlayer === 1 ? -1 : 1;
    }

    // console.log('columns', columns)
    // console.log('rows', rows)
    // console.log('cross', cross)
    // console.log('antiCross', antiCross)

    return moves.length === 9 ? 'Draw' : 'Pending';
}

// for(let i=0; i<moves.length)

// const player1 = new Array(8).fill(0);
// const player2 = new Array(8).fill(0);

// const winner = tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]) //xxx
// const winner = tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]] ) //Draw
// const winner = tictactoe([[2,0],[1,0],[1,1],[0,2]] ) //Pending
const winner = tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]] ) //B
console.log(winner)


// Practising deepCopy & difference between heap in memory vs reference in call stack
//in short, when comparing object with '===' we're only comparing their value in the call stack.
/*
const arr1 = [1,2,3]; //point to heap1 memory
const arr2 = [1,2,3]; //point to heap2 memory
const arr3 = arr1;    //point to heap1 memory

const arr4 = [...arr1] //deep copy

arr4[0] = 9999;
console.log(arr1 === arr2)
console.log(arr4 === arr1)
console.log(arr4)
console.log(arr1)
*/

//check for crosses

//
// //check if row is same 3 times
// for(let i=0; i<oMoves.length; i++){
//     map.s
// }

//check if colm is same 3 times

// console.log(moves)
//check if player loses
//check if player wins
//check if draw
//if none, then it's pending