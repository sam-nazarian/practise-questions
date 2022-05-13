// javascript program for different tree traversals

/* Class containing left and right child of current
   node and key value*/
class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

// Root of Binary Tree
var root = null;


/*
 * Given a binary tree, print its nodes according to the "bottom-up" postorder
 * traversal.
 */
function printPostorder(node) {
    if (node == null)
        return;

    // first recur on left subtree
    printPostorder(node.left);

    // then recur on right subtree
    printPostorder(node.right);

    // now deal with the node
    console.log(node.key + " ");
}

/* Given a binary tree, print its nodes in inorder */
function printInorder(node) {
    if (node == null)
        return;

    /* first recur on left child */
    printInorder(node.left);

    /* then print the data of node */
    console.log(node.key + " ");

    /* now recur on right child */
    printInorder(node.right);
}

/* Given a binary tree, print its nodes in preorder */
function printPreorder(node) {
    if (node == null) return 0;

    /* first print data of node */
    console.log(node.key + " ");

    /* then recur on left subtree */
    return printPreorder(node.left); //everything below this function doesn't get run since there's a return here
    //return, means exit the printOrder function (& go up with this val)
    // return // above is similar to having a return here, the func gets run then there's a return

    /* now recur on right subtree */
    printPreorder(node.right);

}



// Driver method


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Preorder traversal of binary tree is <br/>");
const val = printPreorder(root);

console.log('val', val)

// console.log("<br/>Inorder traversal of binary tree is <br/>");
// printInorder(root);
// console.log("<br/>Postorder traversal of binary tree is <br/>");
// printPostorder(root);
