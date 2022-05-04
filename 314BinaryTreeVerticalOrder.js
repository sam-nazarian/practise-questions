/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    //verticalNum : valsOfRoot[]
    const map = new Map();
    const arr = [];
    let col = 0;

    //if their in same col, then put them in same array
    verticalTransverse(root,col,arr, map);

    // console.log(map);
    for(const [key, val] of map.entries()){
        arr.push(val)
    }

    return arr;

};

//since we're passing reference of our object, the original arr changed
function verticalTransverse (root, col, arr, map){
    //could either have this func inside of verticalOrder & use closures or pass the arr as a parameter of this func
    if(root === null) return;

    col--
    verticalTransverse(root.left, col, arr, map); //remember, --col inside argument effects col for enire scope of func curr not jus for the func that we're calling
    col++//reversing col++ above

    //THESE STATEMENTS ARE HERE BECAUSE IT'S A POST TRANSVERSAL
    if(!map.has(col)) map.set(col, []);
    const currArr = map.get(col);
    console.log(root.val);

    currArr.push(root.val)
    // arr.push([root.val, col])

    col++;
    verticalTransverse(root.right, col, arr, map);
    col--;
}


// var verticalOrder = function(root) {
//   const arr = [];
//   let col = 0;

//   //if their in same col, then put them in same array
//   verticalTransverse(root,col,arr)

//   console.log(arr);

//   function verticalTransverse (root, col, arr){
//   //could either have this func inside of verticalOrder & use closures or pass the arr as a parameter of this func
//   if(root === null) {
//     col--
//     return;
//   }

//   verticalTransverse(root.left, --col, arr);
//   arr.push([root.val, col])
//   verticalTransverse(root.right, ++col, arr);
// }
// };






// var verticalOrder = function(root) {
//     const arr = [];
//     let col = 0;

//     //if their in same col, then put them in same array
//     verticalTransverse(root)
//     console.log(arr);

//     function verticalTransverse (root){
//         //could either have this func inside of verticalOrder & use closures or pass the arr as a parameter of this func
//         if(root === null) {
//             --col;
//             return;
//         }

//         col--;
//         verticalTransverse(root.left);
//         arr.push([root.val, col])
//         col++
//         verticalTransverse(root.right);
//     }
// };







// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var verticalOrder = function(root) {
//   //verticalNum : valsOfRoot[]
//   const map = new Map();
//   const arr = [];
//   let col = 0;

//   //if their in same col, then put them in same array
//   verticalTransverse(root,col,arr);

//   console.log(arr);
// };

// function verticalTransverse (root, col, arr){
//   //could either have this func inside of verticalOrder & use closures or pass the arr as a parameter of this func
//   if(root === null) return;

//     arr.push([root.val, col])

//   col--
//   verticalTransverse(root.left, col, arr); //remember, --col inside argument effects col for enire scope of func curr not jus for the func that we're calling
//   col++//reversing col++ above


//   col++;
//   verticalTransverse(root.right, col, arr);
//   col--;
// }



///////////////////////////////////////////////
//since arrays are passed by reference in js, passing an arr as a parameter works in js
//instead of reading last to 1st node, go from 1st to last