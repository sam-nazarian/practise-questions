// Recursive javascript program for level
// order traversal of Binary Tree

/* Class containing left and right child of current
node and key value*/
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


// Root of the Binary Tree
var root = null;

/* function to print level order traversal of tree */
function printLevelOrder() {
    var h = height(root);
    console.log('height', h)
    // var i;
    for (let i = 1; i <= h; i++) //print for about of height inside binary tree
        printCurrentLevel(root, i);
}

/*
* Compute the "height" of a tree -- the number of nodes along the longest path
* from the root node down to the farthest leaf node.
*/
function height(root) {
    if (root == null)
        return 0; //return 0
    else {
        /* compute height of each subtree */
        var lheight = height(root.left);
        var rheight = height(root.right);

        /* use the larger one */
        if (lheight > rheight)
            return (lheight + 1); //get the longest path nodes between left & right & add 1 to it. instead of if, could use max()
        else
            return (rheight + 1);
    }
}

/* Print nodes at the current level */
//root, 1, 2, 3
function printCurrentLevel(root, level) {
    if (root == null) return;
    if (level == 1) console.log(root.data + " GG");
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1); //only change level for that func, not same as level--
        printCurrentLevel(root.right, level - 1);
    }
}

/* Driver program to test above functions */

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Level order traversal of binary tree is ");
printLevelOrder();

// This code is contributed by umadevi9616