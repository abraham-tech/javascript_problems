function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}


const levelOrder = function(tree){
    if(tree === null) return [];
    let result = [];
    let queue = [tree];

    while(queue.length) {
        let levelArray = [];
        let levelSize = queue.length;

        while(levelSize > 0){
            let current = queue.shift();

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            levelArray.push(current.val);
            levelSize--;
        }
        result.push(levelArray)

    }
    return result;

}

// const root = new TreeNode(5);
// root.left = new TreeNode(4);
// root.right = new TreeNode(8);
// root.left.left = new TreeNode(11);
// root.left.left.left = new TreeNode(7);
// root.left.left.right = new TreeNode(2);
// root.right.left = new TreeNode(13);
// root.right.right = new TreeNode(4);
// root.right.right.left = new TreeNode(5);
// root.right.right.right = new TreeNode(1);
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);


console.log( levelOrder(root));
