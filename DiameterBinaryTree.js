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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    //practise to print every elm in the root

    const print = function(root){
        if(root === null) return
        diameterOfBinaryTree(root.left);
        console.log(root.val)
    }

    print(root);

};