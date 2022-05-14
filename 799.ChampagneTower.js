// /**
//  * @param {number} poured
//  * @param {number} query_row
//  * @param {number} query_glass
//  * @return {number}
//  */
// var champagneTower = function(poured) {
//     helper(0, poured);
//     function helper(count, poured){
//         let capacity = 0;
//         helper(count+1, poured-1)
//         //problem with this, is there's no left & right, so this wouldn't work
//     }
// };


// /**
//  * Makes the pascal's triangle
//  * @param {number} poured
//  */
// var champagneTower = function(poured) {
//     let arr = [];
//     //(n-1)/2
//     arr[0] = [poured];
//
//     for(let i=1; i<10; i++){
//         arr[i] = []; //adding col, to the curr row
//         // const row = arr[i];
//
//         for(let j=0; j<arr[i-1].length+1; j++){
//             //first & last elm of the pyramid
//             if(j===0) {
//                 arr[i][j] = arr[i-1][0];
//                 continue;
//             }
//             if(arr[i-1][j] === undefined) {
//                 arr[i][j] = arr[i-1][j - 1];
//                 continue;
//             }
//
//             arr[i][j] = arr[i-1][j] + arr[i-1][j-1]
//         }
//
//     }
//
//     console.log(arr)
//
// }

// /**
//  * Works but the i for loop doesn't stop
//  * @param {number} poured
//  */
// var champagneTower = function(poured) {
//     let arr = [];
//     //(n-1)/2
//     arr[0] = [poured];
//
//     for(let i=1; i<10; i++){
//         arr[i] = []; //adding col, to the curr row
//         // const row = arr[i];
//
//         for(let j=0; j<arr[i-1].length+1; j++){
//             //first & last elm of the pyramid
//             if(j===0) {
//                 arr[i][j] = (arr[i-1][0] - 1) / 2;
//                 continue;
//             }
//             if(arr[i-1][j] === undefined) {
//                 arr[i][j] = (arr[i-1][j-1] - 1) / 2;
//                 continue;
//             }
//
//             arr[i][j] = (arr[i-1][j] - 1)/2 + (arr[i-1][j-1] - 1)/2
//         }
//
//     }
//
//     console.log(arr)
//
// }


// /**
//  * Problem is it stops whenever a value is negative, instead do a for loop for query_row amount of times
//  * @param {number} poured
//  * @param {number} query_row
//  * @param {number} query_glass
//  * @return {number}
//  */
// const champagneTower = function(poured,query_row, query_glass) {
//     let arr = [];
//     //(n-1)/2
//     arr[0] = [poured];
//     let i=1; //row in 2d arr
//     let runLoop = true;//turns false when a negative number is found
//
//     while(runLoop){
//         arr[i] = []; //adding col, to the curr row
//         // const row = arr[i];
//
//         for(let j=0; j<arr[i-1].length+1; j++){
//             //first & last elm of the pyramid
//             if(arr[i][j-1] < 0) runLoop = false;
//
//             if(j===0) {
//                 arr[i][j] = (arr[i-1][0] - 1) / 2;
//                 continue;
//             }
//             if(arr[i-1][j] === undefined) {
//                 arr[i][j] = (arr[i-1][j-1] - 1) / 2;
//                 continue;
//             }
//
//             arr[i][j] = (arr[i-1][j] - 1)/2 + (arr[i-1][j-1] - 1)/2
//         }
//
//         i++;
//     }
//
//     console.log(arr)
//
//     console.log('LOG SPECIFIC',arr[27]);
//     // return arr[query_row][query_glass]
// }

// /**
//  * THIS WORKS, MY SOLUTION
//  * @param {number} poured
//  * @param {number} query_row
//  * @param {number} query_glass
//  * @return {number}
//  */
// var champagneTower = function(poured, query_row, query_glass) {
//     let arr = [];
//     //(n-1)/2
//     arr[0] = [poured];
//
//     for(let i=1; i<=query_row; i++){
//         arr[i] = []; //adding col, to the curr row
//         // const row = arr[i];
//
//         for(let j=0; j<arr[i-1].length+1; j++){ //[i-1]is prev row
//             //first & last elm of the pyramid
//             if(j===0) {
//                 arr[i][j] = Math.max((arr[i-1][0]-1)/2, 0);
//                 continue;
//             }
//             if(arr[i-1][j] === undefined) {
//                 arr[i][j] = Math.max( (arr[i-1][j-1]-1)/2, 0); //if val is less than 0 set it to 0, max sets the smallest possible val
//                 continue;
//             }
//
//             arr[i][j] = Math.max((arr[i-1][j] - 1)/2 ,0) + Math.max((arr[i-1][j-1] - 1)/2,0)  //the lowest it can be is 0
//         }
//
//     }
//
//     console.log(arr)
//
//     //the highest it can be is 1
//     return Math.min(arr[query_row][query_glass],1); //if val is greater than 1 set it to 1, min sets the largest possible val
// }



// /**
//  * THIS WORKS, MY SOLUTION
//  * @param {number} poured
//  * @param {number} query_row
//  * @param {number} query_glass
//  * @return {number}
//  */
// var champagneTower = function(poured, query_row, query_glass) {
//     let arr = [];
//     //(n-1)/2
//     arr[0] = [poured];
//
//     for(let i=1; i<=query_row; i++){
//         arr[i] = []; //adding col, to the curr row
//         // const row = arr[i];
//
//         for(let j=0; j<arr[i-1].length+1; j++){ //[i-1]is prev row
//             //first & last elm of the pyramid
//             if(j===0) {
//                 arr[i][j] = Math.max((arr[i-1][0]-1)/2, 0);
//                 continue;
//             }
//             if(arr[i-1][j] === undefined) {
//                 arr[i][j] = Math.max( (arr[i-1][j-1]-1)/2, 0); //if val is less than 0 set it to 0, max sets the smallest possible val
//                 continue;
//             }
//
//             arr[i][j] = Math.max((arr[i-1][j] - 1)/2 ,0) + Math.max((arr[i-1][j-1] - 1)/2,0)  //the lowest it can be is 0
//         }
//
//     }
//
//     console.log(arr)
//
//     //the highest it can be is 1
//     return Math.min(arr[query_row][query_glass],1); //if val is greater than 1 set it to 1, min sets the largest possible val
// }


/**
 * WORKS
 * PRACTISE UPDATING MY-SOLUTION SO THAT i IS AT PARENT, AND WE GO TO CHILDREN, NOT FULLY DONE, GETS TO TEST 261/312
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    let arr = [];   //since rows & cols are equal in a pyramid, and the max row & col can be 100 as question says, then make the max 2d arr
    for(let i=0; i<100; i++){
        arr[i] = new Array(100).fill(0) //adding 102 cols for each row
    }
    arr[0][0] = poured;
    // console.log(arr)

    for(let i=0; i<query_row; i++){
        // arr[i+1] = new Array(arr[i].length+1).fill(0); //make column for row below

        for(let j=0; j<arr[i].length+1; j++){
            let valOfChild = Math.max((arr[i][j]-1)/2, 0); //val can't be less than 0
            // valOfChild = valOfChild || 0;

            arr[i+1][j] += valOfChild;
            arr[i+1][j+1] += valOfChild;
        }
    }

    console.log(arr)
    return Math.min( arr[query_row][query_glass], 1)
}
// console.log(champagneTower(5,4,1))
console.log(champagneTower(100000009,33,9))
// console.log(champagneTower(5,4,1))


//THIS(below) DOESN'T WORK , SETS '5' TO EVERY COLUMN, DOESN'T DETECT ROWS
// let arr = new Array(5).fill( new Array(5).fill(0) );
// arr[4][2] = '5'; //already an arr, so don't need to do arr[0][0] = [poured]

//DO THIS INSTEAD, THIS WORKS

//console.log(arr[i].length)



// var champagneTower = function(poured, query_row, query_glass) {
//     let cups = [poured];
//     for(let i=0; i<query_row; i++){
//         let nextRow = new Array(cups.length+1).fill(0);
//         for(let j=0; j<cups.length; j++){
//             let extraOverFlow = Math.max(0,cups[j]-1);
//             nextRow[j] += extraOverFlow/2;
//             nextRow[j+1] += extraOverFlow/2;
//         }
//         cups = nextRow;
//     }
//     console.log(cups)
//     return Math.min(1,cups[query_glass]);
// };
//
// console.log(champagneTower(25,6,1))




//pushing cols to curr row
// const val = (arr[i-1][j]-1) / 2

//in a 2d arr, arr[i] points to the colum(which is also an arr)

// while(n>=1){
//     arr[i] = [];
//     for(let i=0; i<)
//     arr[i].push()
//     i++;
// }

// for(let i=1; i<poured; i++){
//     n -=1;
//
//     // arr[i] = ;
//     for(let j=0; j<poured; j++){
//         n/2
//     }
// }