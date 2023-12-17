function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}
lowestCommonAncestor = function(root, p, q) {
    function dfs(node){
        if(node === null) return;
        if(node === p || node === q) return node;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if(left && right) return node;
        // return left || right;
        if(!left) return right;
        if(!right) return left;
    }
    return dfs(root);
}


const root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.right = new TreeNode(1);
root2.left.right = new TreeNode(2);
root2.left.left = new TreeNode(6);
root2.left.right.left = new TreeNode(7);
root2.left.right.right = new TreeNode(4);
root2.right.right = new TreeNode(8);
root2.right.left = new TreeNode(0);

console.log( lowestCommonAncestor(root2, 5,4));
