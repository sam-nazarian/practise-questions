// JavaScript program to find value of the deepest node
// in a given binary tree

class Node {
    constructor(key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

let maxLevel = -1;
let res = -1; //deepestValue

// maxLevel : keeps track of maximum level seen so far.
// res : Value of deepest node so far.
// level : Level of root
function find(root, level) {
    // if (root != null) {

    if(root === null) return

        console.log(`rootVal: ${root.data} \t level: ${level}`)

        // Update level and rescue
        if (level > maxLevel) {
            res = root.data;
            maxLevel = level;
        }

        level++ //needs to be at beginning to update values for later

        find(root.left, level);//find(root.left, ++level) ++level does that to entire level var, not just for specific one inside the find func

        find(root.right, level);

        // console.log(`rootValAFTER: ${root.data} \t level: ${level}`)
    // }
}

// Returns value of deepest node
function deepestNode(root) {
    // Initialize result and max level
    /* int res = -1;
    int maxLevel = -1; */

    // Updates value "res" and "maxLevel"
    // Note that res and maxLen are passed
    // by reference.
    find(root, 0);
    return res;
}

// Driver code
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.right = new Node(7);
root.right.right.right = new Node(8);
root.right.left.right.left = new Node(9);
console.log(deepestNode(root))
console.log(maxLevel)


// This code is contributed by rag2127
