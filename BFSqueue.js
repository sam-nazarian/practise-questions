// Javascript program to do level order
// traversal line by line
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Prints level order traversal line
// by line using two queues.
function levelOrder(root) {
    if (root == null)
        return;

    let q = [];

    // Pushing root node into the queue.
    q.push(root);

    // Pushing delimiter into the queue.
    q.push(null);

    // Executing loop till queue becomes
    // empty
    while (q.length != 0) {

        let curr = q.shift();

        // condition to check the
        // occurence of next level
        if (curr == null) {
            if (q.length != 0) {
                q.push(null);
                console.log("<br>");
            }
        } else {
            // Pushing left child current node
            if (curr.left != null)
                q.push(curr.left);

            // Pushing right child current node
            if (curr.right != null)
                q.push(curr.right);

            console.log(curr.data + " ");
        }
    }
}

// Driver function
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

levelOrder(root);

// This code is contributed by patel2127