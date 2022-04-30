// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge = function(intervals) {
//
//     const overlapSet = new Set();
//     const arrToAddSet = new Set();
//
//     intervals.sort((a,b) => {
//         return a[0] - b[0];
//     });
//
//     console.log(intervals)
//
//     //find overlaps
//     for(let i=1; i<intervals.length; i++){
//         const currStart = intervals[i][0];
//         const currEnd = intervals[i][1];
//         const prevStart = intervals[i-1][0];
//         const prevEnd = intervals[i-1][1];
//
//         //if curr & prev are overWrapping
//         if((prevEnd >= currStart && prevEnd <= currEnd)) {
//             overlapSet.add(JSON.stringify(intervals[i-1]));
//             overlapSet.add(JSON.stringify(intervals[i]));
//
//             arrToAddSet.add(`[${prevStart},${currEnd}]`);
//         }
//
//         if((currEnd >= prevStart && currEnd <= prevEnd)){
//             overlapSet.add(JSON.stringify(intervals[i-1]));
//             overlapSet.add(JSON.stringify(intervals[i]));
//
//             arrToAddSet.add(`[${prevStart},${prevEnd}]`);
//         }
//     }
//
//     console.log(arrToAddSet)
//
//     //add everything to finalArr
//     const finalArr = [];
//     for(let i=0; i<intervals.length; i++){
//         if(overlapSet.has( JSON.stringify(intervals[i]) )) continue;
//         finalArr.push(intervals[i])
//     }
//     for(const arr of arrToAddSet){
//         finalArr.push(JSON.parse(arr))
//     }
//     //sort finalArr
//     finalArr.sort((a,b) => {
//         return a[0] - b[0];
//     });
//
//     return finalArr
// };

// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge = function(intervals) {
//
//     const overlapSet = new Set();
//     const arrToAddSet = new Set();
//
//     intervals.sort((a,b) => {
//         return a[0] - b[0];
//     });
//
//     console.log('after being sorted', intervals)
//
//     //find overlaps
//     for(let i=1; i<intervals.length; i++){
//         const currStart = intervals[i][0];
//         const currEnd = intervals[i][1];
//         const prevStart = intervals[i-1][0];
//         const prevEnd = intervals[i-1][1];
//
//         // console.log(intervals[i-1], intervals[i])
//         // console.log(intervals[i-1])
//
//
//         if(JSON.stringify(intervals[i]) === JSON.stringify(intervals[i-1])) {
//             // overlapSet.add(JSON.stringify(intervals[i]));
//             intervals.splice(i,1)
//             i--;
//             continue;
//         }
//
//         //if curr & prev are overWrapping
//         if((prevEnd >= currStart && prevEnd <= currEnd)) {
//             overlapSet.add(JSON.stringify(intervals[i-1]));
//             overlapSet.add(JSON.stringify(intervals[i]));
//             arrToAddSet.add(`[${prevStart},${currEnd}]`);
//
//             intervals[i] = [prevStart,currEnd];
//             continue;
//         }
//
//         if((currEnd >= prevStart && currEnd <= prevEnd)){
//             overlapSet.add(JSON.stringify(intervals[i-1]));
//             overlapSet.add(JSON.stringify(intervals[i]));
//             arrToAddSet.add(`[${prevStart},${prevEnd}]`);
//
//             intervals[i] = [prevStart,currEnd];
//             continue;
//         }
//     }
//
//     const finalArr = [];
//     for(let i=0; i<intervals.length; i++){
//         if(overlapSet.has(JSON.stringify(intervals[i]))) continue;
//         finalArr.push(intervals[i]);
//     }
//
//     return finalArr
// };

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[1,4],[4,5]]))
// console.log(merge([[1,4],[2,3]])); //[[1,4]]
// console.log(merge([[1,4],[0,2], [3,5]])); //[[0,5]]
// console.log(merge([[1,4],[1,4]] )); //[[0,5]]


// var merge = function(intervals) {
//     if(!intervals.length) return []; //if length of intervals is 0
//     intervals.sort((a, b) => a[0] - b[0]);
//
//     const result = [intervals[0]];
//     console.log(result)
//
//     for(let [start, end] of intervals) { //this for-loop doesn't have access to prev elm
//
//         if(start <= result[result.length - 1][1]) {
//             const [startPrev, endPrev] = result.pop();
//             result.push([startPrev, Math.max(end, endPrev)]);
//         } else {
//             result.push([start, end]); //if start is greater than the end
//         }
//
//     }
//     return result;
// };

// console.log(merge([[1,3],[2,6],[8,10],[15,18]] ));


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge2 = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]; //-1 a comes first, +1 b comes first
    })

    const arr = [intervals[0]];//this is prev elm

    for(let i=1; i<intervals.length; i++){
        const start = intervals[i][0];
        const end =  intervals[i][1];

        //if there's an overlap
        if(start <= arr[arr.length-1][1]) {
            const prevStart = arr[arr.length-1][0];
            const prevEnd = arr[arr.length-1][1];
            arr.pop(); //remove prev
            arr.push([prevStart, Math.max(prevEnd, end) ]);
            continue;
        }

        //when there's no overlap
        arr.push([start,end])
    }

    return arr
}
console.log(merge2([[1,3],[2,6],[8,10],[15,18]])) //[[1,6],[8,10],[15,18]]

//the names are too difficult/hard to read even though they make sense
// //find overlaps
// for(let i=1; i<intervals.length; i++){
//     const currInterIStart = intervals[i][0];
//     const currInterIEnd = intervals[i][1];
//     const prevInterIStart = intervals[i-1][0];
//     const prevInterIEnd = intervals[i-1][1];
//
//     //if curr & prev are overWrapping
//     if((prevInterIEnd >= currInterIStart && prevInterIEnd <= currInterIEnd) || (currInterIEnd <= prevInterIStart || currInterIEnd  )) {
//         overlapSet.add(JSON.stringify(intervals[i-1]));
//         overlapSet.add(JSON.stringify(intervals[i]));
//
//         arrToAddSet.add(`[${prevInterIStart},${currInterIEnd}]`);
//     }
// }


// console.log('BEFORE')
// console.log('intervalsArr:', intervals);
// console.log('interSet:', overlapSet)
// console.log('arrToAddSet', arrToAddSet)
// console.log('\n')


//TRY NOT TO USE ARRAY.SPLICE INSTEAD USE ANOTHER ARRAY AND PUSH IT INTO THAT ARR

//this way of removing wouldn't work
// intervals.splice(i, 1);
// i--;
// intervals.splice(i - 1, 1);
// i--


// for(let i=intervals.length; i>=0; i--){
//     if(overlapSet.has( JSON.stringify(intervals[i]) )){
//         intervals.splice(i,1);
//     }
// }