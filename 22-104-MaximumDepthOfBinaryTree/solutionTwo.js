function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

const maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    let depth = 0;
    let queue = [root];

    while(queue.length) {
        let len = queue.length;

        for(let i = 0; i<len; i++){
            let current = queue.shift();
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        depth++;
    }
    return depth;
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

console.log("Solution: ", maxDepth(root));