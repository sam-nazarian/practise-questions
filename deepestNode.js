class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let deepestValue = -1;
let largestNode = -1;

const findDeepest = function(root, depth){
    if(root === null) return;

    console.log(`${root.val} value \t ${depth}`)

    if(depth > deepestValue){
        deepestValue = depth;
        largestNode = root.val;
    }

    depth++; //depth will be different for each node, depending on their depth
    findDeepest(root.left, depth);
    findDeepest(root.right, depth);
}

const deepestNode = function(root)
{
    findDeepest(root, 0); //root has a depth of 0

    console.log(deepestValue)
    return largestNode;
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
root.right.left = new Node(5)

root.right.right = new Node(6)
root.right.left.right = new Node(7)

root.right.right.right = new Node(8)
root.right.left.right.left = new Node(9)
console.log(deepestNode(root))