/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const xMoves = [];
    const oMoves = [];

    //x+=2 is being done after a loop has finished
    for(let x=0; x<moves.length; x+=2){
        xMoves.push(moves[x]);
    }
    for(let o=1; o<moves.length; o+=2){
        oMoves.push(moves[o]);
    }

    console.log('xMoves:', xMoves);
    console.log('oMoves', oMoves);

    // row : freq
    const rowMap = new Map();
    const colMap = new Map();
    const cross = new Set();

    //for x moves check if row or col is same 3 times, then return A is winner
    for(let i=0; i<xMoves.length; i++){
        rowMap.set(xMoves[i][0], (rowMap.has(xMoves[i][0]) ? rowMap.get(xMoves[i][0]) : 0) + 1 );
        colMap.set(xMoves[i][1], (colMap.has(xMoves[i][1]) ? colMap.get(xMoves[i][1]) : 0) + 1 );
        cross.add(xMoves[i]) //add every elm of xMoves[]
    }
    for(const [key, val] of rowMap.entries()){
        if(val === 3) return 'A';
    }
    for(const [key, val] of colMap.entries()){
        if(val === 3) return 'A';
    }
    if(( cross.has([0,0]) && cross.has([1,1]) && cross.has([2,2]) ) || (cross.has([2,0]) && cross.has([1,1]) && cross.has([2,0]) )){
        return 'A';
    }
    console.log(cross.has([0,0]))

    console.log(cross)

    rowMap.clear();
    colMap.clear();
    cross.clear();

    //for o moves check if row or col is same 3 times, then return B is winner
    for(let i=0; i<oMoves.length; i++){
        rowMap.set(oMoves[i][0], (rowMap.has(oMoves[i][0]) ? rowMap.get(oMoves[i][0]) : 0) + 1 ) //row
        colMap.set(oMoves[i][1], (rowMap.has(oMoves[i][1]) ? rowMap.get(oMoves[i][1]) : 0) + 1 ) //col
        cross.add(oMoves[i]) //add every elm of xMoves[]
    }
    for(const [key, val] of rowMap.entries()){
        if(val === 3) return 'B';
    }
    for(const [key, val] of colMap.entries()){
        if(val === 3) return 'B';
    }
    if(( cross.has([0,0]) && cross.has([1,1]) && cross.has([2,2]) ) || (cross.has([2,0]) && cross.has([1,1]) && cross.has([2,0]) )){
        return 'B';
    }


    if(moves.length === 9) return 'Draw';
    return 'Pending';
};

const winner = tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]) //xxx
console.log(winner)


const arr1 = [1,2,3]; //point to heap1 memory
const arr2 = [1,2,3]; //point to heap2 memory
const arr3 = arr1;    //point to heap1 memory

const arr4 = [...arr1] //deep copy

arr4[0] = 9999;
console.log(arr1 === arr2)
console.log(arr4 === arr1)
console.log(arr4)
console.log(arr1)

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