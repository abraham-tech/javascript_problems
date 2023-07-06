function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

const minDepth = function(root) {
    if(root === null) return 0;

    let minDepth = 1;

    let queue = [root];

    //bfs
    while(queue.length){
        let levelSize = queue.length;
        while(levelSize){
            let current = queue.shift();
            if(current.left === null && current.right === null){
                return minDepth;
            } else {
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);
            }
            levelSize --;
        }
        minDepth++;
    }
    return minDepth;
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

// const root = new TreeNode(4);
// root.left = new TreeNode(9);
// root.right = new TreeNode(0);
// root.left.left = new TreeNode(5);
// root.left.right = new TreeNode(1);

console.log( minDepth(root));