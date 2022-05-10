const arr = [];//the first arr is the row

for(let i=0; i<5; i++){ //row

    arr[i] = []
    for(let j=0; j<5; j++){
        arr[i][j] = j; //column
    }

}

console.log(arr)

// for(let j=0; j<5; j++){
// }

// const p1 = function(s) {
//
//     for(let i=s.length-1; i>=0; i--){
//         for(let j=i+2; j<s.length; j++){
//             console.log('i:',i,'\tj:', j)
//         }
//     }
//
// }
// p1('abaabc')
//
//
// console.log('////////////////')
//
// const p2 = function(s) {
//
//     for(let i=0; i<s.length; i++){
//         for(let j=i+2; j<s.length; j++){
//             console.log('i:',i,'\tj:', j)
//         }
//     }
//
// }
// p2('abaabc')
