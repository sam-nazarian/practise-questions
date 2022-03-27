/**
 * SAME - JUST USES CLOSURES
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let curr = 0;

  const preOrderTree = function (root, low, high) {
    if (root == null) return; //exit function from memory stack, BASE CASE

    // console.log(root.val);

    //each node has is at different stages

    if (root.val < low) {
      preOrderTree(root.right, low, high); //we want to get a bigger value, than root
      console.log('value<low:', root.val);
    } else if (root.val > high) {
      console.log('value>high:', root.val); //we want to get a smaller value, than root
      preOrderTree(root.left, low, high);
    } else {
      //if root.val is between min & max "<=high && >=low"
      curr += root.val;
      preOrderTree(root.left, low, high);
      preOrderTree(root.right, low, high);
      // console.log('this one');
    }
  };

  preOrderTree(root, low, high);
  return curr;
};
// //below works but is inneficient
// /**
//  * SAME - JUST USES CLOSURES
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} low
//  * @param {number} high
//  * @return {number}
//  */
// var rangeSumBST = function (root, low, high) {
//   // return curr;
//   let curr = 0;

//   const preOrderTree = function (root, low, high) {
//     if (root == null) return; //exit function from memory stack, BASE CASE

//     //each node has is at different stages
//     // console.log(root.val);

//     if (root.val >= low && root.val <= high) {
//       curr += root.val;
//       console.log('current', curr);
//     }

//     preOrderTree(root.left, low, high);
//     preOrderTree(root.right, low, high);
//   };

//   preOrderTree(root, low, high);
//   return curr;

//   // printPreOrderTree(root)
// };

// // const printPreOrderTree = function(root){

// //     if(root == null) return; //exit function from memory stack, BASE CASE

// //     //each node has is at different stages
// //     console.log(root.val);

// //     if(root.val => )

// //     printPreOrderTree(root.left);
// //     printPreOrderTree(root.right);
// // }

// //////////////////////////////////////////////////////////////
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
//  * @param {number} low
//  * @param {number} high
//  * @return {number}
//  */
// let curr = 0;
// var rangeSumBST = function (root, low, high) {
//   // return curr;

//   preOrderTree(root, low, high);
//   return curr;
//   curr = 0;
//   // z++;
//   // console.log(z)

//   // printPreOrderTree(root)
// };

// const preOrderTree = function (root, low, high) {
//   if (root == null) return; //exit function from memory stack, BASE CASE

//   //each node has is at different stages
//   // console.log(root.val);

//   if (root.val >= low && root.val <= high) {
//     curr += root.val;
//     // console.log('current', curr);
//   }

//   rangeSumBST(root.left, low, high);
//   rangeSumBST(root.right, low, high);
// };

// const printPreOrderTree = function(root){

//     if(root == null) return; //exit function from memory stack, BASE CASE

//     //each node has is at different stages
//     console.log(root.val);

//     if(root.val => )

//     printPreOrderTree(root.left);
//     printPreOrderTree(root.right);
// }
