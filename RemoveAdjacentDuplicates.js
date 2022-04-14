//using map, works but is inefficient
/**
 * @param {string} s
 * @return {string}
 */
// const removeDuplicates = function(s) {
//
//     const sArr = s.split('');
//     const map = new Map(); // sArr[i] : i
//
//     for(let i=0; i<sArr.length; i++){
//         console.log(map)
//
//         //if map has 2 already, & indexes match
//         if(map.has(sArr[i]) && i-1 === map.get(sArr[i])){
//             sArr.splice(i-1, 2);
//             map.clear();
//             i=0;
//         }
//         map.set(sArr[i], i);
//     }
//
//     console.log(sArr)
//     return sArr.join('')
// }


//2, using arrays
/**
 * @param {string} s
 * @return {string}
 */
// const removeDuplicates = function(s) {
//
//     const sArr = s.split('');
//     let left = 0;
//     let right = 1;
//
//     while(right < sArr.length){
//
//         if(sArr[left] === sArr[right]){
//             sArr.splice(left, 2);
//             left = 0;
//             right = 1;
//             continue;
//         }
//
//         left++;
//         right++;
//     }
//
//
//     // console.log(sArr);
//     return sArr.join('')
// }


const removeDuplicates = s => {
    const arr = s.split('');
    let ans = 0;
    for (let i = 0; i < arr.length; ++i) {

        console.log(ans)

        if( ans === 0 || arr[i] !== arr[ans - 1] ) {
            arr[ans] = arr[i];
            ans++;
        }else { //arr[i] === arr[ans]
            --ans;
        }

    }
    return arr.slice(0, ans).join('');
};

console.log(removeDuplicates('abb'))

// let n = 5
// for(let i=0; i<n; i++){
//     console.log(i)
//
//     if(i===3){
//         i = 0
//         n=2
//     }
// }


// // arr.length is getting checked every time in a forloop
// let arr = [1,2,3,4];
// for(let j=0; j<arr.length; j++){
//
//     console.log(j)
//
//     arr.splice(1,3);
// }
//
// console.log(arr)

//
// const map1 = new Map();
//
// map1.set('bar', 'baz');
// map1.set(1, 'foo');
//
// console.log(map1);
// // expected output: 2
//
// map1.clear();
//
// console.log(map1);
// // expected output: 0