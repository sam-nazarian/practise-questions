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
const levelOrder = function (root){
    let q = [];
    q.push(root);

    while(q.length > 0){
        const dequeue = q.shift();//same as dequeue
        if(dequeue === null) continue; //remember to continue, & not return as return will exit func

        console.log(dequeue.data);

        //explore every option for dequeue elm, remember in BFS, there's no recursive call
        q.push(dequeue.left)
        q.push(dequeue.right)
    }

    // console.log('value of queue', q) //queue is empty at this point

}



// Driver function
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);


levelOrder(root);